import React from "react";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";

import classes from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={classes.Layout}>
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default Layout;