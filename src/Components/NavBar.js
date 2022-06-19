import React from "react";
import { Link } from "react-router-dom";
import '../Style/NavBar.css'

const NavBar=(props)=>{
    return (
        <div className="NavButton">
            <Link to='/post'><button className="post">New Post</button></Link>
            <Link to='/published'><button className="publish">Published</button></Link>
        </div>
    )
}
export default NavBar