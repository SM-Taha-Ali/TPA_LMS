import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./Main.css"

const Header = () => {
    let navigate = useNavigate();

    let location = useLocation();
    useEffect(() => {
    }, [location]);

    const login_navigation = () => {
        navigate('/login')
    }

    const logout = () => {
        localStorage.removeItem('token')
        navigate('/login')
        window.location.reload()
    }

    // const local_name = JSON.parse(localStorage.getItem('user_details'));

    // const userName = `${local_name.username}`

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="/images/tpa_logo.png" alt="" width={45} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item px-1">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item px-1">
                                <Link className={`nav-link ${location.pathname === "/batch" ? "active" : ""}`} aria-current="page" to="/batch">Batch</Link>
                            </li>
                            <li className="nav-item px-1">
                                <Link className={`nav-link ${location.pathname === "/courses" ? "active" : ""}`} aria-current="page" to="/course">Courses</Link>
                            </li>
                            <li className="nav-item px-1">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item px-1">
                                <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} aria-current="page" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item px-1">
                                <Link className={`nav-link ${location.pathname === "/admin" ? "active" : ""}`} aria-current="page" to="/admin/management/dashboard">Admin</Link>
                            </li>

                        </ul>
                        {/* <button className='btn btn_blue text-white' onClick={login_navigation}>{!localStorage.getItem('token') ? `Login` : `${userName}`}</button> */}
                        {!localStorage.getItem('token') ?
                            <Link to="/login" className="btn m-0 p-1">
                                <div className="text-grey d-flex flex-row align-items-center media-center header-login-btn">
                                    <div className='ps-2 pe-1 py-2 Border-left'>
                                        <i className="fas fa-user"></i>

                                    </div>
                                    <div className='pe-2 ps-1 py-2 Border-right' id='default-login'>
                                        Login
                                    </div>
                                </div>
                            </Link> :
                            <div className="btn m-0 p-1" >
                                <div className="text-grey d-flex flex-row align-items-center media-center header-login-btn">
                                    <div className='ps-2 pe-1 py-2 Border-left'>
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="dropdown pe-2 ps-1 py-2 Border-right">
                                        <span className="dropbtn mx-2">lol</span>
                                        <div className="dropdown-content Z-INDEX">
                                            <a href="#" className='dropdown_link' onClick={logout}><i className="far fa-sign-out mx-1"></i> Logout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header