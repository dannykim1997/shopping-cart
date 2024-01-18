import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterComponent from './RouterComponent';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState([]);

  const updateQuantity = (productId, quantity) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: quantity,
    }))
  };

  return (
    <Router>
      <div className='app-container'>
        <Header />
        <NavBar />
        <RouterComponent cart={cart} setCart={setCart} quantities={quantities} setQuantities={setQuantities} updateQuantity={updateQuantity} />
        <Footer />
      </div>
    </Router>
  )
}

export default App
