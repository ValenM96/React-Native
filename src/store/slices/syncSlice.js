import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSyncing: false,
  lastSynced: null,
};

const syncSlice = createSlice({
  name: 'sync',
  initialState,
  reducers: {
    startSync(state) {
      state.isSyncing = true;
    },
    endSync(state, action) {
      state.isSyncing = false;
      state.lastSynced = action.payload;
    },
  },
});

export const { startSync, endSync } = syncSlice.actions;
export default syncSlice.reducer;
