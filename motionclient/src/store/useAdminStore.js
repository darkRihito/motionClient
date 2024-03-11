import { create } from "zustand";
import axios from "axios";

const useAdminStore = create((set) => ({
  users: null,
  questions: null,
  setUsers: (data) => set({ users: data }),
  setQuestions: (data) => set({ questions: data }),
}));

const fetchData = async ({ code }) => {
  try {
    const [usersResponse, questionsResponse] = await Promise.all([
      axios.get(`https://motionapp-backend.vercel.app/user/alluser/${code}`, {
        withCredentials: true,
      }),
      axios.get(`https://motionapp-backend.vercel.app/question/questionroom/${code}`, {
        withCredentials: true,
      }),
    ]);
    useAdminStore.getState().setUsers(usersResponse.data.data);
    useAdminStore.getState().setQuestions(questionsResponse.data.data);
  } catch (error) {
    console.log(error);
  }
};

export { useAdminStore, fetchData };
