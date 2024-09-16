import "./App.css";
import Greetings from "./Components/Greetings";
import Heading from "./Components/Heading";
import List from "./Components/List";
import FormValidation from "./Pages/FormValidation";

function App() {
  return (
    <>
      <Heading />
      <List />
      <Greetings />
      <FormValidation />
    </>
  );
}

export default App;
