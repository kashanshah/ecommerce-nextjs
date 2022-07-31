import { createSlice } from '@reduxjs/toolkit';
import { randomNumberBetween } from '../utils/helpers';

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    helloCSS: 'rotate(0) scale(1)',
    homeBGImage: randomNumberBetween(1, 12),
    isPageLoading: true,
    isSearchOpen: false,
    isMiniCartActive: false,
    isMobileMenuActive: false,
    orderBy: ['popularity', 'desc'],
    isGridListing: true,
  },
  reducers: {
    updateHelloCss: (state, action) => {
      state.helloCSS = action.payload;
    },
    updateBG: (state) => {
      state.homeBGImage = randomNumberBetween(1, 12);
    },
    updateIsPageLoading: (state, action) => {
      state.isPageLoading = action.payload;
    },
    updateIsMobileMenuActive: (state, action) => {
      state.isMobileMenuActive = action.payload;
    },
    updateIsSearchOpen: (state, action) => {
      state.isSearchOpen = action.payload;
    },
    updateConfig: (state, action) => {
      state.orderBy = action.payload.orderBy ?? state.orderBy;
      state.isGridListing = action.payload.isGridListing ?? state.isGridListing;
      state.isMiniCartActive = action.payload.isMiniCartActive ?? state.isMiniCartActive;
      state.isSearchOpen = action.payload.isSearchOpen ?? state.isSearchOpen;
    },
  },
});

export const {
  updateHelloCss,
  updateBG,
  updateIsMobileMenuActive,
  updateIsPageLoading,
  updateIsSearchOpen,
  updateConfig,
} = commonSlice.actions;

export default commonSlice.reducer;
