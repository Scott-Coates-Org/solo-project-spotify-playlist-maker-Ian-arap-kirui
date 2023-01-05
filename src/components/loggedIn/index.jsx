import Form from "../form/Form";
import styles from "./loggedIn.module.css";
export default function Index() {
  return (
    <div>
      <div>
        Select your desired Genre and Year, <br />
        then hit generate to create your playlist!
        <Form />
      </div>
    </div>
  );
}
