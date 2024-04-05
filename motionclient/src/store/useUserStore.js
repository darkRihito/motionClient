import { create } from "zustand";
import axios from "axios";

const useUserStore = create((set) => ({
  userData: null,
  userHistory: null,
  setUserData: (data) => set({ userData: data }),
  setUserHistory: (data) => set({ userHistory: data }),
  updateUserStatus: (status) =>
    set((state) => ({
      userData: {
        ...state.userData,
        status: status,
      },
    })),
  updateUserChallengeStatus: () =>
    set((state) => ({
      userData: {
        ...state.userData,
        is_doing_challenge: "free",
      },
    })),
  updateUserPretestStatus: () =>
    set((state) => ({
      userData: {
        ...state.userData,
        pretest_done: true,
      },
    })),
}));

const userRank = (starCollected) => {
  let rank, rank_url, title;

  if (starCollected >= 0 && starCollected <= 5) {
    rank = "Journeyman";
    rank_url = "/assets/rank/rank1.png";
    title = ",B";
  } else if (starCollected >= 6 && starCollected <= 10) {
    rank = "Sage";
    rank_url = "/assets/rank/rank2.png";
    title = ",A";
  } else if (starCollected >= 11 && starCollected <= 15) {
    rank = "Expert";
    rank_url = "/assets/rank/rank3.png";
    title = ",Ex";
  } else if (starCollected >= 16 && starCollected <= 20) {
    rank = "Maestro";
    rank_url = "/assets/rank/rank4.png";
    title = ",S";
  } else if (starCollected >= 21 && starCollected <= 25) {
    rank = "Master";
    rank_url = "/assets/rank/rank5.png";
    title = ",M";
  } else if (starCollected >= 26 && starCollected <= 30) {
    rank = "Grandmaster";
    rank_url = "/assets/rank/rank6.png";
    title = ",GM";
  } else if (starCollected >= 31 && starCollected <= 35) {
    rank = "Legendary";
    rank_url = "/assets/rank/rank7.png";
    title = ",L";
  } else {
    rank = "Supreme";
    rank_url = "/assets/rank/rank8.png";
    title = ",SR";
  }

  return { rank, rank_url, title };
};

const fetchUserData = async () => {
  try {
    // Make concurrent requests to fetch user data and history data
    const [userDataResponse, historyDataResponse] = await Promise.all([
      axios.get("http://localhost:8000/user/user", {
        withCredentials: true,
      }),
      axios.get("http://localhost:8000/history/historyid", {
        withCredentials: true,
      }),
    ]);

    const userData = userDataResponse.data.data;

    if (userData.role == "user") {
      const challengePoint = userData.challenge_point;
      // Determine rank and rank URL
      const { rank, rank_url, title } = userRank(userData.star_collected);
      // Update state with the fetched data
      useUserStore.setState({
        userData: { ...userData, rank, rank_url, title },
        userHistory: historyDataResponse.data.data,
      });
      // console.log(useUserStore.getState());
    } else {
      useUserStore.setState({
        userData: userData,
      });
    }
  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export { useUserStore, fetchUserData };
