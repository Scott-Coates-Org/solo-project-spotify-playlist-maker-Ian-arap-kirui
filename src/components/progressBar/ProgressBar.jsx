import styles from "./progress.module.css";
export default function ProgressBar({ progress, message }) {
  const container = {
    height: "36px",
    width: "90%",
    borderRadius: 5,
  };
  const bar = {
    height: "20px",
    width: `${progress}%`,
    backgroundColor: "#1db954",
    borderRadius: "inherit",
    transform: "translateY(-10px)",
    margin: "1rem 0",
    border: "1px solid black",
  };
  const label = {
    padding: "1rem",
    color: "white",
  };

  return (
    <div className={styles.progressBar}>
      <div style={container}>
        <div
          style={bar}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
        <p>
          {progress === 100 ? (
            <span style={label}>Playlist Generated!</span>
          ) : (
            <>
              <span style={label}>{`Generating Playlist ${progress}%`}</span>
              <span style={label}>{`${message}`}</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
