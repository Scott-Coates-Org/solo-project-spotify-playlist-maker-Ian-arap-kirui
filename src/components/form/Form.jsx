import { useState } from "react";
import styles from "./form.module.css";
export default function Dropdown() {
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

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

  //validate inputs are filled
  const validate = () => {
    return genre.length & year.length;
  };

  return (
    <>
      <div className={styles.pickerContainer}>
        <form>
          <div className={styles.selector}>
            Genre:{" "}
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
              {genres.map((item) => {
                return (
                  <>
                    <option value={item.value}>{item.label}</option>;
                  </>
                );
              })}
            </select>
          </div>
          <div className={styles.selector}>
            Year:{" "}
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              {years.map((item) => {
                return (
                  <>
                    <option value={item.value}>{item.label}</option>;
                  </>
                );
              })}
            </select>
          </div>
          <button
            type="button"
            disabled={!validate()}
            className={styles.generateBtn}
          >
            Generate Playlist
          </button>
        </form>
      </div>
    </>
  );
}
