import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>
        Learning SandBox
        <FontAwesomeIcon icon={faAmbulance} />
      </h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
