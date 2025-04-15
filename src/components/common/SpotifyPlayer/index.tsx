"use client";
import React, { useEffect, useRef, useState } from "react";
import { Spotify } from "react-spotify-embed";
interface SpotifyPlayerProps {
  trackId: string; // e.g. '0rRVgRjCjK8SJW5G0zgBqh'
}

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ trackId }) => {
  return (
    <div className="w-full rounded-[12px] overflow-hidden shadow-lg">
      <Spotify
        className="w-full"
        link="https://open.spotify.com/playlist/5RGWJr22LfesEULQCmkfh9?si=mTiITmlHQpaGkoivGTv8Jw"
      />

      {/* <iframe
        src={`https://open.spotify.com/embed/track/${trackId}`}
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        allowTransparency
      ></iframe> */}
    </div>
  );
};

export default SpotifyPlayer;
