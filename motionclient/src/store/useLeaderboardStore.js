import { create } from "zustand";
import axios from "axios";

// Define a Zustand store to hold user data
const useLeaderboardStore = create((set) => ({
  userData: null,
  setUserData: (data) => set({ userData: data }),
}));

// Fetch data function
const fetchData = async () => {
  try {
    // Make request to fetch user data
    const userDataResponse = await axios.get("http://localhost:8000/user/getalluser", {
      withCredentials: true,
    });

    const userData = userDataResponse.data.message; // Assuming user data is stored in the message field
    
    // Update state with the fetched data
    useLeaderboardStore.setState({
      userData: userData.map(user => ({
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
  return { rank, rank_url };
};

export { useLeaderboardStore, fetchData };

