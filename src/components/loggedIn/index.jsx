import { useState } from "react";
import Form from "../form/Form";
import ProgressBar from "../progressBar/ProgressBar";
import styles from "./loggedIn.module.css";
export default function Index() {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Creating Playlist...");
  return (
    <div>
      <div>
        Select your desired Genre and Year, <br />
        then hit generate to create your playlist!
        <Form
          progress={progress}
          setProgress={setProgress}
          message={message}
          setMessage={setMessage}
        />
        {progress > 0 && (
          <ProgressBar
            progress={progress}
            setProgress={setProgress}
            message={message}
          />
        )}
      </div>
    </div>
  );
}
