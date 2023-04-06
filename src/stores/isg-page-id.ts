import { create } from 'zustand';

export const initialPageIds = ['1', '2', '3'];

type IsgPageId = {
  pageIds: string[];
  addPageId: (id: string) => void;
};

export const useIsgPageIdStore = create<IsgPageId>((set) => ({
  pageIds: initialPageIds,
  addPageId: (id) => set((state) => ({ pageIds: [...state.pageIds, id] })),
}));
