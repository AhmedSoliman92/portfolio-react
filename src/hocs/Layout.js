import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Body/navbar/Navbar';
import Home from '../components/Home';
import ScrollUp from '../components/Body/ScrollUp';
import './layout.css';



const Layout = ({dark,setDark}) => {

    return (
        <div className="layout">
            <div>
                <Navbar dark = {dark} setDark= {setDark} />
            </div>
            <div>
                <Home/>
            </div>
            <div>
                <Footer/>
            </div>
            <ScrollUp/>
        </div>
    );
}

export default Layout;