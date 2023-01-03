import { useAuth } from "../auth/Auth";
import styles from "./header.module.css";
export default function Header() {
  const { token } = useAuth();
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <span className={styles.logo}>TheCoolMusicCo</span>
        {token ? <span className={styles.icon}>x</span> : <span></span>}
      </div>
    </div>
  );
}
