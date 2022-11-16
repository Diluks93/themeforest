import { createSlice } from '@reduxjs/toolkit';

export interface PlayerState {
  isPlay: boolean;
}

const initialState: PlayerState = {
  isPlay: false,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    togglePlayer: state => ({
      ...state,
      isPlay: !state.isPlay,
    }),
  },
});

export const { togglePlayer } = playerSlice.actions;

export default playerSlice.reducer;
