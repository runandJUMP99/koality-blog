import React from "react"

import classes from "./Header.module.css";

const Header = () => {
    return (
        <nav className={classes.Header}>
            <div>
                <p>KOALITY BLOG</p>
            </div>
            <ul className={classes.Navbar}>
                <li id="home"><a href="/">HOME</a></li>
                <li id="about"><a href="/about">ABOUT ME</a></li>
                <li id="contact"><a href="/contact">CONTACT ME</a></li>
            </ul>
        </nav>
    );
}

export default Header;