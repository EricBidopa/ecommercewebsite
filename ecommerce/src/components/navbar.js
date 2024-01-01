import React from "react";
import '../styles.css';
import logo from '../images/logo.svg';
import bag from '../images/bag.svg';
import heart from '../images/heart.svg';
import search from '../images/search.svg';



export default function Navbar(){
    return(
        <>
            <nav className="navbar">
                <div>
                    <img className="logo" src={logo} alt="this is the logo"/>
                </div>
                <div>
                <ul className="navtexts">
                    <li>New arrivals</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Collection</li>
                </ul>
                </div>
                <div>
                    <span className="dividingline"></span>
                    <img className="search" src={search} alt="search" />
                    <span className="dividingline"></span>
                    <img className="heart" src={heart} alt="heart"/>
                    <span className="dividingline"></span>
                    <img className="bag" src={bag} alt="bag"/>
                    <span className="dividingline"></span>
                </div>
            </nav>
            <section className="secondsection">
                <p className="firsttext">Members : Free Shipping on Orders $50+</p>
                <p className="secondtext">Join now</p>
            </section>
            </>

    );
}