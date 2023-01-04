import Dropdown from "../dropdowns/dropdown";
import LoginBtn from "../../pages/Login/index";
export default function Index() {
  return (
    <div>
      Select your desired Genre and Year, <br />
      then hit generate to create your playlist!
      <Dropdown />
      <Dropdown />
      <button>Generate Playlist</button>
      <LoginBtn />
    </div>
  );
}
