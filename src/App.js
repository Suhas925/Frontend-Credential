import './App.css';
import Navbar from './components/Providers/Navbar.js';
import Sidebar from './components/Providers/Sidebar.js';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Sidebar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
