import { useRef, useState } from "react";
import ReactSelect from "react-select";
import { fetcher, getUserData } from "../../utils/api";
import { useAuth } from "../auth/Auth";
import styles from "./form.module.css";

const years = [];
const currentYear = new Date().getFullYear();
const genres = [
  { value: "Afrobeats", label: "Afrobeats" },
  { value: "R&B", label: "R&B" },
  { value: "rock", label: "Rock-n-Roll" },
  { value: "Hip-hop", label: "Hip-hop" },
  { value: "country", label: "Country" },
];

for (let i = 0; i < 101; i++) {
  years.push({ value: currentYear - i, label: currentYear - i });
}
const fillPlaylist = async (token, playlistId) => {};
const searchForTracks = async (token, genre, year) => {
  const searchResults = await fetcher(
    `https://api.spotify.com/v1/search?q=genre:${genre}%20year:${year}&type=track&limit=30`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log("search results:", searchResults);
  return searchResults;
};
export default function Dropdown() {
  const { token } = useAuth();
  const genreRef = useRef();
  const yearRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (genreRef.current.hasValue() && yearRef.current.hasValue()) {
      let selectedGenre = genreRef.current.getValue()[0].value;
      let selectedYear = yearRef.current.getValue()[0].value;
      console.log("genre/year:", selectedGenre, selectedYear);

      const userData = await getUserData(token);
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
      console.log(emptyPlaylist);
      searchForTracks(token, selectedGenre, selectedYear);
    } else {
      alert("Please select a genre and year");
    }
  };

  return (
    <>
      <div className={styles.pickerContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.selector}>
            <ReactSelect
              options={genres}
              placeholder="Select Genre..."
              className={styles.select}
              ref={genreRef}
            />
            <ReactSelect
              options={years}
              placeholder="Select Year..."
              className={styles.select}
              ref={yearRef}
            />
          </div>
          <button
            type="submit"
            // disabled={}
            className={styles.generateBtn}
          >
            Generate Playlist
          </button>
        </form>
      </div>
    </>
  );
}
