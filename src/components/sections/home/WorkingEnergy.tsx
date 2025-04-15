"use client";
import SpotifyPlayer from "@/components/common/SpotifyPlayer";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const WorkingEnergy = () => {
  const { data: session } = useSession();
  const [currentTrackId, setCurrentTrackId] = useState("");
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    if (session) {
      // console.log("check token =>", session?.token.accessToken);
      // axios
      //   .get("https://api.spotify.com/v1/me/playlists", {
      //     headers: {
      //       Authorization: `Bearer ${session?.token.accessToken}`,
      //     },
      //   })
      //   .then((response) => {
      //     console.log("all playlist =>", response);
      //   })
      //   .catch((error) => {
      //     console.error("Error fetching playlists:", error);
      //   });
      axios
        .get("https://api.spotify.com/v1/playlists/5RGWJr22LfesEULQCmkfh9", {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
          },
        })
        .then((response) => {
          setPlaylists(response.data.tracks.items);
          setCurrentTrackId(response.data.tracks.items[0]?.track.id || "");
        })
        .catch((error) => {
          console.error("Error fetching playlists:", error);
        });
    }
  }, [session]);
  // console.log("playlist =>", playlists);

  return (
    <div>
      {currentTrackId && <SpotifyPlayer trackId={currentTrackId} />}

      {/* <ul className="mt-[16px] flex flex-col">
        {playlists &&
          playlists.map((_, idx) => {
            const isActive = _.track.id === currentTrackId;
            return (
              <li
                key={idx}
                onClick={() => onChangeTrack(_.track.id)}
                className={`${isActive ? "bg-gray-100" : ""} py-[6px] px-[12px] rounded-[4px] hover:bg-gray-200 cursor-pointer duration-100`}
              >
                <p className="text-[14.5px] font-medium">{_.track.name}</p>
                <div>
                  {_.track.artists.map((item, idxArtist) => {
                    return (
                      <span key={item.id} className="text-[13px] text-gray-500">
                        {item.name}
                      </span>
                    );
                  })}
                </div>
              </li>
            );
          })}
      </ul> */}
    </div>
  );
};

export default WorkingEnergy;
