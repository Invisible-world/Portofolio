import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Experience from './Pages/Experience';
import Work from './Pages/Work';

function App() {
  return (
    <>
     <Router>
     <Navbar />
     <Header />
     <About />
     <Work />
     <Experience />
     
     <Contact />
     </Router>
     
    </>
  );
}

export default App;
