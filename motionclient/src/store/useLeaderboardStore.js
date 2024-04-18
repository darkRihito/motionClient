import { create } from "zustand";
import axios from "axios";

const useLeaderboardStore = create((set) => ({
  leaderboardData: null,
  setleaderboardData: (data) => set({ leaderboardData: data }),
}));

const fetchData = async () => {
  try {
    // Make request to fetch user data
    const leaderboardDataResponse = await axios.get("https://motionapp-backend.vercel.app/leaderboard/data", {
      withCredentials: true,
    });

    const leaderboardData = leaderboardDataResponse.data.message; // Assuming user data is stored in the message field
    
    // Update state with the fetched data
    useLeaderboardStore.setState({
      leaderboardData: leaderboardData.map(user => ({
        ...user,
        ...getRankData(user.star_collected)
      }))
    });
  } catch (error) {
    console.error("Failed:", error.message);
  }
};

// Helper function to determine rank based on challenge points
const getRankData = (starCollected) => {
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

export { useLeaderboardStore, fetchData };

