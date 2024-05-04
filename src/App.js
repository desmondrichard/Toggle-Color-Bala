import "bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Square from './Components/Square';
import Input from './Components/Input';

function App() {
  return (
    <section className="section">
      <Square />
      <Input />
    </section>
  );
}

export default App;
