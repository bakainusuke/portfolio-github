import logo from './logo.svg'; 
import './App.css';
import {
  BrowserRouter as Router,
  // Navigate,
  // Route,
  // Routes,
} from "react-router-dom";
import Navbar from "./fragments/Navbar";
import Footer from "./fragments/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Router>
        <Navbar />
          <main className="flex-grow p-4 bg-gray-100">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
