// import { create } from "zustand";

// // Define a Zustand store to hold user data
// const useUserStore = create((set) => ({
//   userData: null,
//   setUserData: (data) => set({ userData: data }),
// }));

// export default useUserStore;


import { create } from "zustand";
import axios from "axios";

function getRank(points) {
  if (points >= 0 && points <= 10) {
    return 'Newbie';
  } else if (points >= 11 && points <= 20) {
    return 'Medium';
  } else if (points >= 21 && points <= 30) {
    return 'Hard';
  } else {
    return 'Unknown'; // Default case if points are out of range
  }
}

// Define a Zustand store to hold user data
const useUserStore = create((set) => ({
  userData: null,
  setUserData: (data) => set({ userData: data }),
}));

// Fetch data function
const fetchData = async (setUserData) => {
  try {
    const response = await axios.get("https://motionapp-backend.vercel.app/user/getuser", {
      withCredentials: true,
    });
    let star_collected = response.data.data.challenge_point / 2;
    let rank = getRank(response.data.data.challenge_point / 2);
    setUserData({ ...response.data.data, star_collected, rank });
  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export { useUserStore, fetchData };