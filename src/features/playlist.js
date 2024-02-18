import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: undefined,
  play: false,
  currentMuscID: undefined,
};

export const playlist = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addBaseSongs: (state, action) => {
      state.songs = action.payload;
      state.currentMuscID = action.payload[0].id;
    },

    toggleLecture: (state, action) => {
      state.play = !state.play;
    },
  },
});

export function getMusicsData(action) {
  return function (dispatch, getState) {
    fetch("/data/playlist.json")
      .then((data) => data.json())
      .then((data) => dispatch(addBaseSongs(data.playlist)));
  };
}

export const { addBaseSongs, toggleLecture } = playlist.actions;
export default playlist.reducer;
