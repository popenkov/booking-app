import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UISchema } from '../types/UISchema';

const initialState: UISchema = {
  scroll: 0,
  isMenuOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<number>) => {
      state.scroll = payload;
    },
    setIsMenuOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isMenuOpen = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: uiActions } = uiSlice;
export const { reducer: uiReducer } = uiSlice;
