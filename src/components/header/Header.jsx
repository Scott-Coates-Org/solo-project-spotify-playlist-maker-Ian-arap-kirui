import { useAuth } from "../auth/Auth";
import styles from "./header.module.css";
export default function Header() {
  const { token } = useAuth();
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <span className={styles.logo}>TheCoolMusicCo</span>
        {token ? (
          <img
            src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="profile-img"
            className={styles.profilePhoto}
          />
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}
