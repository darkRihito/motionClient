import create from 'zustand';

// Define a Zustand store to hold user data
const useUserStore = create((set) => ({
  userData: null,
  setUserData: (data) => set({ userData: data }),
}));

export default useUserStore;