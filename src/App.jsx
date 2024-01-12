import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterComponent from './RouterComponent';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavBar />
        <RouterComponent />
        <Footer />
      </div>
    </Router>
  )
}

export default App
