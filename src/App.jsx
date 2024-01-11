import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterComponent from './RouterComponent';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './components/home/HomePage';
// import ShopPage from './components/shop/ShopPage';
// import Cart from './components/cart/Cart';


function App() {

  return (
    // <Router>
    //   <div>
    //     <Header />
    //     <NavBar />
    //     <Routes>
    //       <Route path="/" element={<HomePage />} />
    //       <Route path="/shop" element={<ShopPage />} />
    //       <Route path="/cart" element={<Cart />} />
    //     </Routes>
    //     <Footer />
    //   </div>
    // </Router>

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
