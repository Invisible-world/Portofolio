
import { BrowserRouter as  Router } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';

import Navbar from './Navbar/Navbar';

function App() {
  return (
    <>
     <Router>
     <Navbar />
     </Router>
     <Header />
    </>
  );
}

export default App;
