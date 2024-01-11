import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            {/* <a href='/'>Home Page</a>
            <a href='shop'>Shop Page</a>
            <a href='cart'>Cart Page</a> */}
            <Link to='/'>Home</Link>
            <Link to='shop'>Shop Page</Link>
            <Link to='cart'>Cart Page</Link>
        </div>
    );
}

export default NavBar