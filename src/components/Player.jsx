import React from "react";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Player() {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist);
  const audioRef = useRef();

  return (
    <audio
      id="audio-player"
      src={playlist.songs?.find((obj) => obj.id === playlist.currentMuscID).url}
      ref={audioRef}
    ></audio>
  );
}
