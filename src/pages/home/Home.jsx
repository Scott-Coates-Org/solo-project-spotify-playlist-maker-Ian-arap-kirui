import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import LoginBtn from "../Login/index";
import styles from "../home/home.module.css";
import { useAuth } from "../../components/auth/Auth";
import Index from "../../components/loggedIn";
export default function Home() {
  const { token } = useAuth();
  return (
    <div className={styles.home}>
      <Header />
      {token ? (
        // if user is logged in
        <>
          <hr className={styles.lineSeparator} />
          <div className={styles.homeContainer}>
            <Index />
          </div>
          <hr className={styles.lineSeparator} />
        </>
      ) : (
        //else, if user is not logged in
        <>
          <hr className={styles.lineSeparator} />
          <div className={styles.homeContainer}>
            <h1>Spotify Playlist Generator</h1>
            <p>
              Our playlist maker provides you with just the right music to get
              you <br />
              in the zone without wasting your time
            </p>
            <LoginBtn />
          </div>
          <hr className={styles.lineSeparator} />
        </>
      )}

      <Footer />
    </div>
  );
}
