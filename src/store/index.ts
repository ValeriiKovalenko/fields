import { create } from "zustand";
import { IMode } from "../api";

interface IStore {
  modeList?: IMode[];
  activeMode?: IMode;
  isActive: boolean;
  activeCells: Array<number>;
  loading: boolean;
  setModeList: (list: IMode[]) => void;
  toggleCell: (n: number) => void;
  toggleActiveMode: (isActive: boolean) => void;
  setActiveMode: (mode: IMode) => void;
  clearField: () => void;
}

export const useStore = create<IStore>((set) => ({
  modeList: undefined,
  activeMode: undefined,
  isActive: false,
  activeCells: [],
  loading: false,
  setModeList: (list: IMode[]) => set({ modeList: list }),
  toggleCell: (n: number) => {
    set((state) => {
      return {
        activeCells: state.activeCells.includes(n)
          ? state.activeCells.filter((item) => item !== n)
          : [...state.activeCells, n],
      };
    });
  },
  toggleActiveMode: (isActive) => {
    set({ isActive: isActive });
    if (!isActive) {
      set({ activeCells: [] });
    }
  },
  setActiveMode: (mode) => {
    set({ activeMode: mode });
  },
  clearField: () => set({ activeCells: [] }),
}));
