import React from "react";
import { useSelector } from "react-redux";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import TogglePlayerButton from "./TogglePlayerButton";
import Progress from "./Progress";

export default function PlayerPanel() {
  const playlist = useSelector((state) => state.playlist);
  const actualSong = playlist.songs?.find(
    (obj) => obj.id === playlist.currentMuscID
  );

  console.log(actualSong);

  return (
    <div className="fixed w-full bottom-0 rounded border-t-2 border-gray-800 p-6 bg-gradient-to-r from-indigo-100 to-purple-200">
      <div className="max-w-[800px] mx-auto mb-2">
        <p className="text-xl text-slate-800 font-semibold">
          {playlist.songs && actualSong.title}
        </p>
        <div className="flex justify-between">
          <p className="text-lg text-gray-900">
            {playlist.songs && actualSong.artist}
          </p>
          <p className="text-lg text-gray-900">
            {playlist.songs?.findIndex(
              (song) => song.id === playlist.currentMuscID
            ) + 1}{" "}
            / {playlist.songs.length}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mb-5">
        <PreviousButton />
        <TogglePlayerButton />
        <NextButton />
      </div>
      <Progress />
    </div>
  );
}
