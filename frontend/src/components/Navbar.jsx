import * as React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar(){
    return(
        <>
        <div className="bg-img">
            <div className="navcontainer">
                <div className='logonav'>
                <Link to="/" className="logon">
                Storm Refuge
                </Link>
                </div>
                <div className="topnav">
                <Link to="/">
                    Home
                </Link>
                <Link to="/about">
                    About
                </Link>

                <Link to="/games">
                    Games
                </Link>
                <Link to="searchgames">
                    Search Games
                </Link>
                </div>
                <div className="leftlinks">
                <Link to="/login" className="login">
                    Login
                </Link>
                <Link to="/register" className="register">
                    Register
                </Link>
                </div>
            </div>
        </div>
        </>
    )
}