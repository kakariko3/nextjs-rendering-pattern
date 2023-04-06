import { create } from 'zustand';

export const initialPageIds = ['1', '2', '3'];

type IsgIsrPageId = {
  pageIds: string[];
  addPageId: (id: string) => void;
};

export const useIsgIsrPageIdStore = create<IsgIsrPageId>((set) => ({
  pageIds: initialPageIds,
  addPageId: (id) => set((state) => ({ pageIds: [...state.pageIds, id] })),
}));
