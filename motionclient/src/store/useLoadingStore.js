import { create } from "zustand";

const useLoadingStore = create((set) => ({
  isLoading: false,
  toogleLoading: () => set((state) => ({ isLoading: !state.isLoading })),
  startLoading: () => set({ isLoading: true }),
  endLoading: () => set({ isLoading: false }),
  setLoading: (state) => set({ isLoading: state }),
}));

export default useLoadingStore;