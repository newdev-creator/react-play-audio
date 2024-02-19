import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { previousSong } from "../../features/playlist";

import prevIcon from "../../assets/prev-icon.svg";

export default function PreviousButton() {
  const playlist = useSelector((state) => state.playlist);
  const dispatch = useDispatch();

  function handleClick() {
    if (playlist.songs) {
      const previousIndex =
        playlist.songs.findIndex((song) => song.id === playlist.currentMuscID) -
        1;
      dispatch(previousSong(previousIndex));
    }
  }

  return (
    <button
      onClick={handleClick}
      className="w-9 h-9 mr-4 bg-slate-400 rounded-full flex justify-center items-center"
    >
      <img src={prevIcon} className="w-5 h-5" alt="previous song" />
    </button>
  );
}
