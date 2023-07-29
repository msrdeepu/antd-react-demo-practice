import "./App.css";

//imports
import ButtonItem from "./components/ButtonItem";
import Inputitem from "./components/Inputitem";
import Selectitem from "./components/Selectitem";
import Formitem from "./components/Formitem";
import Daterangepicker from "./components/Daterangepicker";
import Spincomponent from "./components/Spincomponent";

function App() {
  return (
    <div className="App">
      <ButtonItem />
      <Inputitem />
      <Selectitem />
      <Formitem />
      <Daterangepicker />
      <Spincomponent />
    </div>
  );
}

export default App;
