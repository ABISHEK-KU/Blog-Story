import React from "react";
import { Link } from "react-router-dom";
import Button from '../stories/Button/Button'
import '../Style/NavBar.css'

const NavBar=(props)=>{
    return (
        <div className="NavButton">
            <Link to='/post'><Button variant={`success`} children={`Post`}/></Link>
            <Link to='/published'><Button variant={`danger`} children={'Publish'}/></Link>
        </div>
    )
}
export default NavBar