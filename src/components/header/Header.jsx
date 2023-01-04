import { useEffect, useState } from "react";
import { fetcher } from "../../utils/api";
import { useAuth } from "../auth/Auth";
import styles from "./header.module.css";
export default function Header() {
  const [userData, setUserData] = useState("");
  const { token, user } = useAuth();

  useEffect(() => {
    const getUser = async () => {
      const userResponse = await fetcher("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      return userResponse;
    };
    if (token) {
      getUser().then((user) => {
        console.log(user);
        setUserData(user.images[0].url);
      });
    }
  }, [token]);
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <span className={styles.logo}>TheCoolMusicCo</span>
        {token && (
          <div className={styles.imgContainer}>
            <img
              className={styles.profilePhoto}
              src={userData}
              alt="spotify profile"
            />
          </div>
        )}
      </div>
    </div>
  );
}
