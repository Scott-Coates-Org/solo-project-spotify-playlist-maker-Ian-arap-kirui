import { useEffect, useState } from "react";
import { getUserData } from "../../utils/api";
import { useAuth } from "../auth/Auth";
import styles from "./header.module.css";
export default function Header() {
  const [userData, setUserData] = useState("");
  const { token, user } = useAuth();

  useEffect(() => {
    if (token) {
      getUserData(token).then((user) => {
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
