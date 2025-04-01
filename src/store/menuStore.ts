import { create } from "zustand";

interface MenuState {
  isOpen: boolean;
  toggleOpen: () => void;
}

export const useMenuStore = create<MenuState>()((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
