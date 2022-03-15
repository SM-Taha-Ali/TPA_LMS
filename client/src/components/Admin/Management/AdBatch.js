import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import Footer from "../../Footer"
import "../Stylesheets/batch.css"

const AdBatch = () => {


    const openNav = () => {
        // ok so i have to commit
        var body = document.getElementsByTagName("BODY")[0];
        let width = body.offsetWidth
        if (width <= 640) {
            document.getElementById("mySidenav").style.width = "100vw";
            document.getElementById("main").style.marginLeft = "auto";
        } else {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }
    }

    return (
        <div className='pb-5'>
            <div className="d-flex flex-row align-items-center">
                <span onClick={openNav} role="button" className='text-start my-2 d-inline ms-3 text-dark'><i className="fas fa-bars text-dark me-2"></i></span>
            </div>
            <div className="min_height_footer">
                <div className="container">
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdBatch