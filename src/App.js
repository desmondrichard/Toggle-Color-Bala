import "bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Square from './Components/Square';
import Input from './Components/Input';
import { useState } from "react";

function App() {
  // Creating useStates:
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <section className="section">
      <Square colorValue={colorValue} hexValue={hexValue} isDarkText={isDarkText} />
      <Input colorValue={colorValue} setColorValue={setColorValue} hexValue={hexValue} setHexValue={setHexValue} isDarkText={isDarkText} setIsDarkText={setIsDarkText} />
    </section>
  );
}

export default App;
