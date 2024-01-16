import { Link } from "react-router-dom";
import '../App.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to='/'>Home </Link>
            <Link to='shop'>Shop </Link>
            <Link to='cart'>Cart </Link>
        </div>
    );
}

export default NavBar