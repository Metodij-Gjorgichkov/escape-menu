import "./App.css";
import Menu from "./components/Menu";
import LangContextConstructor from "./context/langContextConstructor";

function App() {
  return (
    <>
     <LangContextConstructor>
      <Menu />
     </LangContextConstructor>
    </>
  );
}

export default App;
