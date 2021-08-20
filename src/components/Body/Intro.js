import React from 'react'
import './body.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane } from '@fortawesome/fontawesome-free-solid';
const Intro = () => {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello there, I am 
                    <br/>
                    <span className="about-name">Ahmed Soliman</span>
                    <br/>
                        Software Engineer
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <a href="#contact" className="button"><FontAwesomeIcon icon={faPaperPlane}/>Contact me</a>
                </div>
                <div className="about-img">
                    <svg className="img" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
                           <mask id="mask0" mask-type="alpha">
                            <path  d="M37.5,-23.2C44.2,-10,42.3,6.6,34.6,21.3C26.9,36,13.4,48.8,-1.1,49.4C-15.6,50,-31.3,38.5,-44,20.9C-56.8,3.3,-66.7,-20.5,-58.9,-34.3C-51.1,-48.1,-25.5,-52,-5.1,-49.1C15.4,-46.1,30.8,-36.4,37.5,-23.2Z" transform="translate(100 100)" />
                           </mask>
                        <g mask="url(#mask0)">
                            <path fill="#4070F4" d="M37.5,-23.2C44.2,-10,42.3,6.6,34.6,21.3C26.9,36,13.4,48.8,-1.1,49.4C-15.6,50,-31.3,38.5,-44,20.9C-56.8,3.3,-66.7,-20.5,-58.9,-34.3C-51.1,-48.1,-25.5,-52,-5.1,-49.1C15.4,-46.1,30.8,-36.4,37.5,-23.2Z" transform="translate(100 100)" />
                            <image x='65' y='54' href={require('./ahmed.png').default} className="ahmed"/>
                        </g>
                        
                    </svg>
                    
                    
                </div>
            </div>
            <div className="about-bottom">
                
                <div className="social">
                    <a href="https://www.linkedin.com/in/ahmed-soliman-714437186/" rel="noopener noreferrer" target="_blank">
                        <i className="uil uil-linkedin-alt social-icon"/>
                    </a>
                </div>
                <div className="social">
                    <a href="https://github.com/AhmedSoliman92" rel="noopener noreferrer" target="_blank">
                        <i className="uil uil-github-alt  social-icon"></i>
                    </a>
                </div>
                <div className="social">
                    <a href="https://www.facebook.com/ahmed.ghsoliman/" rel="noopener noreferrer" target="_blank"><i className="uil uil-facebook-f social-icon"/></a>
                </div>
                <div className="social">
                    <a href="https://www.instagram.com/ahmed_soliman101/" rel="noopener noreferrer" target="_blank">
                        <i className="uil uil-instagram social-icon"></i>
                    </a>
                    
                </div>
                <div className="social">
                    <i className="uil uil-whatsapp social-icon"></i>
                </div>
                <div className="social">
                    <i className="uil uil-skype-alt social-icon"></i>
                </div>
                <div className="social">
                    <i className="uil uil-telegram-alt social-icon"></i>
                </div>
                
            </div>
        </div>
    );
}

export default Intro;