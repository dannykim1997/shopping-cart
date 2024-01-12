import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='shop'>Shop Page</Link>
            <Link to='cart'>Cart Page</Link>
        </div>
    );
}

export default NavBar