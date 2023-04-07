import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import About from './page/About';
import Home from './page/Home';
import News from "./page/News";
import SignupNow from './page/SignupNow';
import Webiner from './page/Webiner';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webiner" element={<Webiner />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignupNow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
