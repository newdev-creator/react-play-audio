import React from "react";
import { useSelector } from "react-redux";

import formValue from "../../utils/formatValue";

export default function Progress() {
  const progressData = useSelector((state) => state.progress);

  function handleProgressClick(e) {
    const player = document.getElementById("audio-player");
    const rect = e.target.getBoundingClientRect();
    const width = rect.width;
    const x = e.clientX - rect.left;

    player.currentTime = (x / width) * progressData.totalDuration;
  }

  return (
    <div className="max-w-[800px] mx-auto">
      <div
        onClick={handleProgressClick}
        className="bg-slate-900 h-2 rounded cursor-pointer overflow-hidden"
      >
        <div
          style={{
            transform: `scaleX(${
              progressData.current / progressData.totalDuration
            })`,
          }}
          className="bg-indigo-400 origin-left h-full pointer-events-none"
        ></div>
      </div>
      <div className="flex justify-between">
        <span>{formValue(progressData.current)}</span>
        <span>{formValue(progressData.totalDuration)}</span>
      </div>
    </div>
  );
}
