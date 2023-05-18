import "./App.css";
import { Greeting } from "./components/Greeting/Greeting";
import { InformationText } from "./components/InformationText";

function App() {
  return (
    <div className="App">
      <Greeting />
      <InformationText />
    </div>
  );
}

export default App;
