import * as React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { useNavigate } from "react-router-dom";

export default function Navbar(){
    let navigate = useNavigate();
    function getUser(){
    const user = localStorage.getItem('username');
    console.log(user);
    }
    
    getUser();

    function logOut(){
        localStorage.removeItem('username');
        navigate('/');
    }

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

                {localStorage.getItem('username') ? (
                    <div className="leftlinks">
                    
                    <Link to="/profile" className="login">
                        Profile
                    </Link>
                    <button onClick={logOut} className="register">
                        Logout
                    </button>
                    </div>
                ):(
                <div className="leftlinks">
                    
                <Link to="/login" className="login">
                    Login
                </Link>
                <Link to="/register" className="register">
                    Register
                </Link>
                </div>
                )}
            </div>
        </div>
        </>
    )
}