import { StateCreator } from 'zustand';

const initialPageIds = ['1', '2', '3'];

export type IsgIsrPageIdSlice = {
  isgIsrPageIds: string[];
  addIsgIsrPageId: (id: string) => void;
};

export const createIsgIsrPageIdSlice: StateCreator<IsgIsrPageIdSlice> = (
  set,
) => ({
  isgIsrPageIds: initialPageIds,
  addIsgIsrPageId: (id) =>
    set((state) => ({ isgIsrPageIds: [...state.isgIsrPageIds, id] })),
});
