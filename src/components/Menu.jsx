import React from 'react'
import  { useState } from 'react';
import './Menu.css';
function Menu() {

    return (

        <>
            <div className="Navbar">

            
               
            </div>
           
            <div id="side_menu_icon">
                <a href="#about">
                    <img src="https://i.pinimg.com/474x/53/fa/bf/53fabf5ac9ed557319a2a0fa5ae535d8.jpg" alt=""/>
                </a>
                <a href="#skills">
                    <img src="https://image.pngaaa.com/808/4100808-middle.png" alt=""/>
                </a>
                <a href="#projects">
                    <img src="https://www.nicepng.com/png/detail/502-5026325_digital-marketing-fundamentals-project-management-icon-png.png" alt=""/>
                </a>
                <a href="#contact">
                    <img src="data:image/png;base64,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" alt=""/>
                </a>
            </div>

        </>
    )
}

export default Menu;
