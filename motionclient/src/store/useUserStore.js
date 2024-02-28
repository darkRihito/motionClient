import { create } from "zustand";
import axios from "axios";

// Define a Zustand store to hold user data
const useUserStore = create((set) => ({
  userData: null,
  userHistory: null,
  setUserData: (data) => set({ userData: data }),
  setUserHistory: (data) => set({ userHistory: data }),
}));

// Fetch data function
const fetchData = async () => {
  try {
    // Make concurrent requests to fetch user data and history data
    const [userDataResponse, historyDataResponse] = await Promise.all([
      axios.get("http://localhost:8000/user/getuser", {
        withCredentials: true,
      }),
      axios.get("http://localhost:8000/history/gethistoryid", {
        withCredentials: true,
      }),
    ]);

    const userData = userDataResponse.data.data;
    const challengePoint = userData.challenge_point;
    const star_collected = challengePoint / 2;

    // Determine rank and rank URL
    let rank, rank_url;
    if (challengePoint >= 0 && challengePoint <= 10) {
      rank = "Journeyman";
      rank_url = "/assets/rank/rank1.png";
    } else if (challengePoint >= 11 && challengePoint <= 20) {
      rank = "Sage";
      rank_url = "/assets/rank/rank2.png";
    } else if (challengePoint >= 21 && challengePoint <= 30) {
      rank = "Expert";
      rank_url = "/assets/rank/rank3.png";
    } else if (challengePoint >= 31 && challengePoint <= 40) {
      rank = "Maestro";
      rank_url = "/assets/rank/rank4.png";
    } else if (challengePoint >= 41 && challengePoint <= 50) {
      rank = "Master";
      rank_url = "/assets/rank/rank5.png";
    } else if (challengePoint >= 51 && challengePoint <= 60) {
      rank = "Grandmaster";
      rank_url = "/assets/rank/rank6.png";
    } else if (challengePoint >= 61 && challengePoint <= 70) {
      rank = "Legendary";
      rank_url = "/assets/rank/rank7.png";
    } else {
      rank = "Supreme";
      rank_url = "/assets/rank/rank8.png";
    }

    // Update state with the fetched data
    useUserStore.setState({
      userData: { ...userData, star_collected, rank, rank_url },
      userHistory: historyDataResponse.data.data,
    });
  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export { useUserStore, fetchData };
