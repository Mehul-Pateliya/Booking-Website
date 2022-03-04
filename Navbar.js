import React from 'react';
import './Navbar.css';

function Navbar()
{
    return(
        <>
         <nav>
            <span className="leftnav">
                   <span className="title">Booking Website</span>
                   <span className="left">Booking Website</span>
                   <span className="left">Booking Website</span>      
            </span>
            <span className="rightnav">
                   <span className="login">Booking Website</span>
                   <span className="right">Booking Website</span>
            </span>
         </nav>
        </>
    );
}

export default Navbar;