import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import LoginBtn from "../Login/index";
import styles from "../home/home.module.css";
export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <hr className={styles.lineSeparator} />
      <div className={styles.homeContainer}>
        <h1>Spotify Playlist Generator</h1>
        <p>
          Our playlist maker provides you with just the right music to get you{" "}
          <br />
          in the zone without wasting your time
        </p>
        <LoginBtn />
      </div>
      <hr className={styles.lineSeparator} />
      <Footer />
    </div>
  );
}
