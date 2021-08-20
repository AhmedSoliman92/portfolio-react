import React from 'react'
import './web.css'
const Web = ({dark, setDark}) => {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#about">
                    <i className="uil uil-user-circle web-icon"></i>About
                </a>
            </div>
            <div className="web-option">
            <a href="#project">
            <i className="uil uil-clipboard-notes web-icon"></i>Project
            </a>
            </div>
            <div className="web-option">
            <a href="#education">
            <i className="uil uil-university web-icon"></i>Education
            </a>
            </div>
            <div className="web-option">
            <a href="#skill"><i className="uil uil-laptop web-icon"></i>Skill</a>
            </div>
            <div className="web-option">
            <a href="#contact"><i className="uil uil-user web-icon"></i> Contact</a>
            </div>
            <div className="web-option">
            
            <div className="mode" onClick={() => setDark(!dark)}>{ dark ? <i className="uil uil-sun web-icon"></i> :<i className="uil uil-moon web-icon"></i>}</div>
            </div>
            
        </div>
    );
}
export default Web;