import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPhone, faAt, faMapMarkerAlt,faPaperPlane } from '@fortawesome/fontawesome-free-solid';

const Contact = () => {
    return (
        <div className="contact">
            
            <div className="label-contact">
                
                <span><FontAwesomeIcon icon={faPhone} className="ico"/> +36 70 6572621</span>
                <br/><br/>

                <span><FontAwesomeIcon icon={faAt} className="ico"/> ahmed.soli101@gmail.com</span>
                <br/><br/>

                
                <a href="https://www.google.com/maps/place/Budapest,+Semmelweis+u.+2,+1052/@47.4944685,19.0562406,17z/data=!3m1!4b1!4m5!3m4!1s0x4741dc43a31a06e9:0x48bca4ee1a6c2a33!8m2!3d47.4944685!4d19.0584293"
                target="_blank">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="ico"/>
                Hungary,1052 Budapest, Semmelweis 2</a>

                <br/><br/>
            </div>
            <div class="container">
                <div className="row-one">
                    <div className="name" >
                        <input  type="text" required/>
                        <span className="label">Full Name</span>
                    </div>
                    <div className="email " >
                        <input  type="text" required/>
                        <span className="label">Email</span>
                    </div>  
                </div>

                    <div className="subject" >
                        <input  type="text" required/>
                        <span className="label">Subject</span>
                    </div>
                    <div className="subject" >
                        <textarea  type="text" required/>
                        <span className="label">Body Message</span>
                    </div>
                    <button className="button"><FontAwesomeIcon icon={faPaperPlane}/> Send</button>
            </div>
        </div>
    );
}
export default Contact;