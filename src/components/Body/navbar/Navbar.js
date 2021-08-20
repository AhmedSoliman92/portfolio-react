import React,{useState} from 'react';
import Mobile from './mobile';
import Web from './web';
import './nav.css'

const Navbar = ({dark,setDark}) => {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <section  id= "nav" className="nav" >
            <div className="logo">Ahmed Soliman</div>
            <div className="menu">
                <div className="web-menu" ><Web dark={dark} setDark={setDark} /></div>
                <div className="mobile-menu" >
                    <div onClick = {()=>setIsOpen(!isOpen)}>
                        <i className="uil uil-apps menu-icon"/>
                    </div>
                    {isOpen && <Mobile dark={dark}  setDark={setDark} isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
        </section>
    );
}
export default Navbar;