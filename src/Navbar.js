import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link style={{color : "white", backgroundColor: "#f1356d", padding: "5px 8px", borderRadius: "8px"}} to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;