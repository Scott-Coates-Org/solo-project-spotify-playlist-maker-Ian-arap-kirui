import { useState } from "react";
import styles from "./dropdown.module.css";
export default function Dropdown() {
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

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
              <option value="AfroBeats">AfroBeats</option>
              <option value="Rap">Rap</option>
              <option value="Hip-Hop">Hip-Hop</option>
              <option value="R&B">R&B</option>
              <option value="Rock">Rock</option>
            </select>
          </div>
          <div className={styles.selector}>
            Year:{" "}
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
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
