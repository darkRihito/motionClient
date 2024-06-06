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
  updateUserProfile: (pict) =>
    set((state) => ({
      userData: {
        ...state.userData,
        pict_url: pict,
      },
    })),
  updateUserPretest: () =>
    set((state) => ({
      userData: {
        ...state.userData,
        pretest_done: true,
      },
    })),
  updateUserPosttest: () =>
    set((state) => ({
      userData: {
        ...state.userData,
        posttest_done: true,
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

const calculateTruePercentage = (achievements) => {
  if (!Array.isArray(achievements) || achievements.length === 0) {
    return 0;
  }
  const trueCount = achievements.filter(Boolean).length;
  return (trueCount / achievements.length) * 100;
};

const questList = [
  "Do your first pretest on challenge room!",
  "Do your first practice on challenge room!",
  "Do your first simulation on simulation page!",
  "Finish reading your first Module at the material page!",
  "Reach 5 stars by doing practice!",
  "Earn 50 points by doing practice!",
  "Complete your 10th practice on challenge room!",
  "Earn 100 points by doing practice",
  "Read 5 Modules at the material page!",
  "Reach 15 stars by doing practice!",
  "Complete your 5th simulation on simulation page!",
  "Reach Grandmaster rank!",
  "Complete your 20th practice on challenge room",
  "Finish reading all 10 Modules at the material page!",
  "Complete your 10th simulation on simulation page!",
  "Reach Peak Rank!",
  "Earn 300 points by doing practice!",
  "Buy the last profile picture from exchange store!",
  "Complete your posttest!",
];

const getNextQuest = (achievements) => {
  const firstIncompleteIndex = achievements.indexOf(false);
  return firstIncompleteIndex !== -1
    ? questList[firstIncompleteIndex]
    : "All quests completed!";
};

const countCompletedModules = (modules) => {
  if (!Array.isArray(modules)) {
    return 0;
  }
  return modules.filter(Boolean).length;
};

const calculateAccuracyRate = (history) => {
  if (!Array.isArray(history) || history.length === 0) {
    return 0;
  }

  // Filter simulation entries
  const simulationEntries = history.filter(
    (item) => item.name === "simulation"
  );

  if (simulationEntries.length === 0) {
    return 0;
  }

  // Sum up the scores of the simulation entries
  const totalScore = simulationEntries.reduce((acc, item) => acc + item.score, 0);

  // Calculate the average score
  const averageScore = totalScore / simulationEntries.length;

  // Return the average score as the accuracy rate
  return averageScore;
};


const fetchUserData = async () => {
  try {
    // Make concurrent requests to fetch user data and history data
    const [userDataResponse, historyDataResponse] = await Promise.all([
      axios.get("https://motionapp-backend.vercel.app/user/user", {
        withCredentials: true,
      }),
      axios.get("https://motionapp-backend.vercel.app/history/historyid", {
        withCredentials: true,
      }),
    ]);

    const userData = userDataResponse.data.data;

    if (userData.role == "user") {
      const challengePoint = userData.challenge_point;
      const { rank, rank_url, title } = userRank(userData.star_collected);
      const nextQuest = getNextQuest(userData.achievement);
      const achievementPercentage = calculateTruePercentage(
        userData.achievement
      );
      const completedModulesCount = countCompletedModules(
        userData.modules_completed
      );
      const accuracyRate = calculateAccuracyRate(
        historyDataResponse.data.data.history
      );
      useUserStore.setState({
        userData: {
          ...userData,
          rank,
          rank_url,
          title,
          achievementPercentage,
          nextQuest,
          completedModulesCount,
          accuracyRate,
        },
        userHistory: historyDataResponse.data.data,
      });
      console.log("USERSTORE:", useUserStore.getState());
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
