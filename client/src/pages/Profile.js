import { useState, useEffect } from "react";
import { catchErrors } from "../utils";
import axios from "axios";
import {
  getCurrentUserProfile,
  getCurrentUserPlaylists,
  getTopArtists,
  getTopTracks
} from "../spotify";
import { StyledHeader, StyledLogoutButton} from "../styles";
import {
  SectionWrapper,
  ArtistsGrid,
  TrackList,
  PlaylistsGrid, Loader
} from "../components";
import cn from "classnames";


const Profile = () => {
  const [tab, updateTab] = useState("dashboard");
  const [profile, setProfile] = useState(null);

  const [playlists, setPlaylists] = useState(null);
  const [playlistsData, setPlaylistsData] = useState(null);

  const [topArtists, setTopArtists] = useState(null);
  const [topTracks, setTopTracks] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getCurrentUserProfile();
      setProfile(data);

      const userPlaylists = await getCurrentUserPlaylists();
      setPlaylists(userPlaylists.data);

      const userTopArtist = await getTopArtists();
      setTopArtists(userTopArtist.data);

      const userTopTracks = await getTopTracks();
      setTopTracks(userTopTracks.data);




    };

    catchErrors(fetchData());
  }, []);

  useEffect(() => {
    if (!playlistsData) {
      return;
    }
    const fetchMoreData = async () => {
      if (playlistsData.next) {
        const { data } = await axios.get(playlistsData.next);
        setPlaylistsData(data);
      }
    };

    setPlaylists((playlists) => [
      ...(playlists ? playlists : []),
      ...playlistsData.items,
    ]);

    catchErrors(fetchMoreData());
  }, [playlistsData]);

  return (
    <>
      <StyledHeader>
        {profile && (
          <>
            <div className={"welcome"}>
              Welcome to the Spotify Event Finder!
            </div>

            <div className={"profileHeader"}>
              <div className={"profilePic"}>
                {profile.images.length && profile.images[0].url && (
                  <img
                    className="header__img"
                    src={profile.images[0].url}
                    alt="Avatar"
                  />
                )}
              </div>
              <div>
                <h1 className="header__name">{profile.display_name}</h1>

                <p className="header__meta">
                  <div className={"headerMargin"}>
                    {playlists && (
                      <span>
                        {playlists.total} Playlist
                        {playlists.total !== 1 ? "s                 " : "                 "}
                      </span>
                    )}
                    <span>
                      {profile.followers.total} Follower
                      {profile.followers.total !== 1 ? "s" : ""}
                    </span>
                  </div>
                </p>
              </div>
            </div>
          </>
        )}
        <div className={"tabList"}>
          <div
            className={cn("tabItem", {
              active: tab === "TopArtists",
            })}
            onClick={() => updateTab("TopArtists")}
          >
            Top Artists
          </div>
          <div
            className={cn("tabItem", {
              active: tab === "TopTracks",
            })}
            onClick={() => updateTab("TopTracks")}
          >
            Top Tracks
          </div>
          <div
            className={cn("tabItem", {
              active: tab === "YourPlaylists",
            })}
            onClick={() => updateTab("YourPlaylists")}
          >
            Your Playlists
          </div>
        </div>

        {tab === "TopArtists" && topArtists && (
          <>
          <SectionWrapper title="Top artists this month">
            <ArtistsGrid artists={topArtists.items.slice(0, 10)} />
          </SectionWrapper>
          </>
        ) 
        }

        {tab === "TopTracks" && topTracks && (
          <SectionWrapper title="Top tracks this month">
            <TrackList tracks={topTracks.items.slice(0, 10)} />
          </SectionWrapper>
        )}

        {tab === "YourPlaylists" && playlists && (
          <SectionWrapper title="Playlists">
            <PlaylistsGrid playlists={playlists.items.slice(0, 10)} />
          </SectionWrapper>
        )}

        <StyledLogoutButton>Search for Events Near You!    🚧👷FUNCTIONALITY STILL UNDER CONSTRUCTION👷🚧</StyledLogoutButton>
      </StyledHeader>
    </>
  );
};

export default Profile;
