import { create } from 'zustand';

import {
  createIsgIsrPageIdSlice,
  IsgIsrPageIdSlice,
} from './slices/isg-isr-page-id';
import { createIsgPageIdSlice, IsgPageIdSlice } from './slices/isg-page-id';

export const useBoundStore = create<IsgPageIdSlice & IsgIsrPageIdSlice>(
  (...a) => ({
    ...createIsgPageIdSlice(...a),
    ...createIsgIsrPageIdSlice(...a),
  }),
);
