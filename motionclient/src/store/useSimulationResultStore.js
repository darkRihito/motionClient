import { create } from "zustand";
import axios from "axios";

const useSimulationResult = create((set) => ({
  result: null,
  setResult: (res) => set({ result: res }),
}));

const fetchData = async ({ category }) => {
  try {
    const [Response] = await Promise.all([
      axios.get(`http://localhost:8000/simulation/detail/${category}`, {
        withCredentials: true,
      }),
    ]);
    console.log("RESPONSE RES", Response);
    useSimulationResult.setState({
      result: Response.data.data.answer,
    });
  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export { useSimulationResult, fetchData };
