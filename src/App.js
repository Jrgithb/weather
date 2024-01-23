import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home';
import Register from './views/Register';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/Find a forecast" element={<Home />} />
        {/* <Route path="/Register" element={<Register />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Register" element={<Register />} /> */}
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
