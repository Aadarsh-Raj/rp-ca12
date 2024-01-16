import React, { useState } from 'react';
import Button from "./Button";
import './Style/header.css';

function Header(){
    const [toggle, setToggle] = useState(false);
    const [displayValue,setDisplayValue] = useState("flex");
function setDisplay(){
    if(window.innerWidth < 800){
        setDisplayValue("none");
    }else{
        setDisplayValue("flex");
    }
}
function openNav(){
    if(window.innerWidth <800){
    // if(toggle == false){
        setToggle((prevToggle)=>!prevToggle);
        setDisplayValue((prevState)=>toggle==true ? "flex":"none");
    // }
}else{
    setDisplay();
}
}
    return (
       <>
       <header className="header">
        <div className="logo">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
        <p>GeekFoods</p>
        </div>
        <nav className="nav mobile-nav" onResize={setDisplay} style={{display:displayValue}}>
        <button> Home</button>
        <button> Quote</button>
        <button> Restaurants</button>
        <button> Foods</button>
        <button> Contact</button>
</nav>
<div className="header-button">
<Button btnTitle="Get started"/>
<div className="menu-bar-container" onClick={openNav}>
<i class="fa-solid fa-bars fa-xl"></i>
</div>
</div>
       </header>
       </>
    );
}

export default Header;