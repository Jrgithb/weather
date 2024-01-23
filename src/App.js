import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Home/>
    </div>
  );
}

export default App;
