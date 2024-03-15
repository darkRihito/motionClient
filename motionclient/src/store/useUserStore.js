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
}));

const userRank = (challengePoint) => {
  let rank, rank_url, title;

  if (challengePoint >= 0 && challengePoint <= 10) {
    rank = "Journeyman";
    rank_url = "/assets/rank/rank1.png";
    title = ",B";
  } else if (challengePoint >= 11 && challengePoint <= 20) {
    rank = "Sage";
    rank_url = "/assets/rank/rank2.png";
    title = ",A";
  } else if (challengePoint >= 21 && challengePoint <= 30) {
    rank = "Expert";
    rank_url = "/assets/rank/rank3.png";
    title = ",Ex";
  } else if (challengePoint >= 31 && challengePoint <= 40) {
    rank = "Maestro";
    rank_url = "/assets/rank/rank4.png";
    title = ",S";
  } else if (challengePoint >= 41 && challengePoint <= 50) {
    rank = "Master";
    rank_url = "/assets/rank/rank5.png";
    title = ",M";
  } else if (challengePoint >= 51 && challengePoint <= 60) {
    rank = "Grandmaster";
    rank_url = "/assets/rank/rank6.png";
    title = ",GM";
  } else if (challengePoint >= 61 && challengePoint <= 70) {
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

const fetchData = async () => {
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
      const star_collected = challengePoint / 2;
      // Determine rank and rank URL
      const { rank, rank_url, title } = userRank(challengePoint);
      // Update state with the fetched data
      useUserStore.setState({
        userData: { ...userData, star_collected, rank, rank_url, title },
        userHistory: historyDataResponse.data.data,
      });
      console.log(useUserStore.getState());
    } else {
      useUserStore.setState({
        userData: userData,
      });
    }
  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export { useUserStore, fetchData };
