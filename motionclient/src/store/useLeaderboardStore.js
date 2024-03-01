import { create } from "zustand";
import axios from "axios";

// Define a Zustand store to hold user data
const useLeaderboardStore = create((set) => ({
  leaderboardData: null,
  setleaderboardData: (data) => set({ leaderboardData: data }),
}));

// Fetch data function
const fetchData = async () => {
  try {
    // Make request to fetch user data
    const leaderboardDataResponse = await axios.get("http://localhost:8000/leaderboard/data", {
      withCredentials: true,
    });

    const leaderboardData = leaderboardDataResponse.data.message; // Assuming user data is stored in the message field
    
    // Update state with the fetched data
    useLeaderboardStore.setState({
      leaderboardData: leaderboardData.map(user => ({
        ...user,
        star_collected: user.challenge_point / 2,
        ...getRankData(user.challenge_point)
      }))
    });
  } catch (error) {
    console.error("Failed:", error.message);
  }
};

// Helper function to determine rank based on challenge points
const getRankData = (challengePoint) => {
  let rank, rank_url, title;
      if (challengePoint >= 0 && challengePoint <= 10) {
        rank = "Journeyman";
        rank_url = "/assets/rank/rank1.png";
      } else if (challengePoint >= 11 && challengePoint <= 20) {
        rank = "Sage";
        rank_url = "/assets/rank/rank2.png";
      } else if (challengePoint >= 21 && challengePoint <= 30) {
        rank = "Expert";
        rank_url = "/assets/rank/rank3.png";
        title = ",Ex"
      } else if (challengePoint >= 31 && challengePoint <= 40) {
        rank = "Maestro";
        rank_url = "/assets/rank/rank4.png";
        title = ",S"
      } else if (challengePoint >= 41 && challengePoint <= 50) {
        rank = "Master";
        rank_url = "/assets/rank/rank5.png";
        title = ",M"
      } else if (challengePoint >= 51 && challengePoint <= 60) {
        rank = "Grandmaster";
        rank_url = "/assets/rank/rank6.png";
        title = ",GM"
      } else if (challengePoint >= 61 && challengePoint <= 70) {
        rank = "Legendary";
        rank_url = "/assets/rank/rank7.png";
        title = ",L"
      } else {
        rank = "Supreme";
        rank_url = "/assets/rank/rank8.png";
        title = ",SR"
      }
  return { rank, rank_url, title };
};

export { useLeaderboardStore, fetchData };

