import { StateCreator } from 'zustand';

const initialPageIds = ['1', '2', '3'];

export type IsgPageIdSlice = {
  isgPageIds: string[];
  addIsgPageId: (id: string) => void;
};

export const createIsgPageIdSlice: StateCreator<IsgPageIdSlice> = (set) => ({
  isgPageIds: initialPageIds,
  addIsgPageId: (id) =>
    set((state) => ({ isgPageIds: [...state.isgPageIds, id] })),
});
