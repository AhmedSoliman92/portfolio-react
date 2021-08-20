import React from 'react'
import './mobile.css';
const Mobile = ({isOpen,setIsOpen,dark,setDark}) => {
    const mobileDark = {backgroundColor:"#0e2431"}
    const mobileLight = {backgroundColor:"#fff"}
    const colorLight ={color:"#fff"}
    const colorDark={color:"#4070f4"  }    
    const modeBg = {backgroundColor: "#4070f45c"}
            

    return (
        <div className="mobile" style={dark ? mobileDark : mobileLight }>
            <div className="close-icon" onClick={()=> setIsOpen(!isOpen)}  style={dark ? colorLight : colorDark }>
                <i className="uil uil-times-square"></i>
            </div>
                
                <div id="mobile" className="mobile-options">
                        <div className="mode" onClick={() => setDark(!dark)} style={modeBg }>
                            { dark ? <i className="uil uil-sun web-icon" style= {colorLight}></i> :<i className="uil uil-moon web-icon" style= {colorLight}></i>}
                        </div>
                        <div className="option">
                            <a href="#project" style={dark ? colorLight : colorDark }>
                            <i className="uil uil-user-circle mobile-icon"></i>About
                            </a>
                        </div>
                        <div className="option">
                            <a href="#project" style={dark ? colorLight : colorDark }>
                            <i className="uil uil-clipboard-notes mobile-icon"></i>Project
                            </a>
                        </div>
                        <div className="option">
                            <a href="#education"  style={dark ? colorLight : colorDark }>
                            <i className="uil uil-university mobile-icon"></i>Education
                            </a>
                        </div>
                        <div className="option">
                            <a href="#skill"  style={dark ? colorLight : colorDark }><i className="uil uil-laptop mobile-icon"></i>Skill</a>
                        </div>
                        <div className="option">
                            <a href="#contact"  style={dark ? colorLight : colorDark }><i className="uil uil-user mobile-icon"></i> Contact</a>
                        </div>
                </div>
            
        </div>
    );
}
export default Mobile;