import { create } from "zustand";

const useLoadingStore = create((set) => ({
  //   bears: 0,
  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
  isLoading: false,
  toogleLoading: () => set((state) => ({ isLoading: !state.isLoading })),
  startLoading: () => set({ isLoading: true }),
  endLoading: () => set({ isLoading: false }),
  setLoading: (state) => set({ isLoading: state }),
}));

export default useLoadingStore;