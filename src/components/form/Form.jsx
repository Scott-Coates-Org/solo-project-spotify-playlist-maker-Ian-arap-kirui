import { useRef, useState, useEffect } from "react";
import ReactSelect from "react-select";
import { fetcher, getUserData } from "../../utils/api";
import { useAuth } from "../auth/Auth";
import styles from "./form.module.css";

const years = [];
const currentYear = new Date().getFullYear();

for (let i = 0; i < 101; i++) {
  years.push({ value: currentYear - i, label: currentYear - i });
}

const fillPlaylist = async (token, playlistId, tracks) => {
  try {
    const res = await fetcher(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uris: tracks,
        }),
      }
    );
    if (res.ok) {
      return res;
    } else {
      throw new Error(res.statusText);
    }
  } catch (err) {
    console.log(err);
  }
};
const getTracks = async (token, genre, year) => {
  try {
    const searchResults = await fetcher(
      `https://api.spotify.com/v1/search?q=genre:${genre}%20year:${year}&type=track&limit=50`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (searchResults.ok) {
      return searchResults;
    } else {
      throw new Error(searchResults.statusText);
    }
  } catch (err) {
    console.log(err);
  }
};

const selectTracksToAdd = (trackInfoArray) => {
  let totalDuration = 0;
  let tracksToAdd = [];
  for (let i = 0; i < trackInfoArray.length; i++) {
    if (totalDuration + trackInfoArray[i].duration_seconds <= 12000) {
      tracksToAdd.push(trackInfoArray[i].uri);
      totalDuration += trackInfoArray[i].duration_seconds;
    } else {
      break;
    }
  }
  return tracksToAdd;
};
export default function Form({ progress, setProgress, message, setMessage }) {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const { token } = useAuth();
  const genreRef = useRef();
  const yearRef = useRef();

  useEffect(() => {
    async function fetchGenres() {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/recommendations/available-genre-seeds",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            method: "GET",
          }
        );
        if (response.ok) {
          const data = await response.json();
          setGenres(data.genres);
        } else {
          throw new Error(response.statusText);
        }
      } catch (err) {
        setError(err.message);
      }
    }

    fetchGenres();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProgress((prev) => prev + 10);
    if (genreRef.current.hasValue() && yearRef.current.hasValue()) {
      let selectedGenre = genreRef.current.getValue()[0].value;
      let selectedYear = yearRef.current.getValue()[0].value;

      const userData = await getUserData(token);

      setProgress((prev) => prev + 10);
      const { href } = userData;
      const emptyPlaylist = await fetcher(`${href}/playlists`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `The ${selectedGenre} of ${selectedYear}`,
          description: `A playlist of ${selectedGenre} from ${selectedYear}`,
          public: false,
        }),
      });
      const playlistId = emptyPlaylist.id;
      setProgress((prev) => prev + 20);
      const tracksResponse = await getTracks(
        token,
        selectedGenre,
        selectedYear
      );
      setMessage((message) => message + "songs found...");
      setProgress((prev) => prev + 10);
      const trackInfo = tracksResponse.tracks.items.map((track) => {
        return {
          uri: track.uri,
          duration_seconds: Math.floor(track.duration_ms / 1000),
        };
      });
      setProgress((prev) => prev + 20);
      const tracksToAdd = selectTracksToAdd(trackInfo);
      setMessage((message) => message + `${tracksToAdd.length} songs added...`);
      fillPlaylist(token, playlistId, tracksToAdd);
      setProgress(100);
      setTimeout(() => {
        setProgress(0);
      }, 15000);
    } else {
      alert("Please select a genre and year");
    }
  };

  return (
    <>
      {error ? (
        <>
          <p>an error occured</p>
        </>
      ) : (
        <div className={styles.pickerContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.selector}>
              <ReactSelect
                options={genres.map((genre) => ({
                  value: genre,
                  label: genre,
                }))}
                placeholder="Select Genre..."
                className={styles.select}
                isDisabled={progress > 0}
                ref={genreRef}
              />
              <ReactSelect
                options={years}
                placeholder="Select Year..."
                className={styles.select}
                isDisabled={progress > 0}
                ref={yearRef}
              />
            </div>
            <button type="submit" className={styles.generateBtn}>
              Generate Playlist
            </button>
          </form>
        </div>
      )}
    </>
  );
}
