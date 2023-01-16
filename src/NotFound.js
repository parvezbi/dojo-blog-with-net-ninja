import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p style={{marginBottom:"10px"}}>That page cannot be found!</p>
            <Link style={{color : "white", backgroundColor: "#f1356d", padding: "5px 8px", borderRadius: "8px",textDecoration:"none",marginTop:"10px"}} to="/">Back To Home</Link>
        </div>
     );
}
 
export default NotFound;