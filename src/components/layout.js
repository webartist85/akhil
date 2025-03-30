import Header from "./header";
import Footer from "./footer";
import { useState, useEffect } from 'react';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Layout = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <div className={`main-container ${theme}`}>
                <Header />
                {
                    children
                }
                <Footer />
            </div>
        </>
    )
}
export default Layout;