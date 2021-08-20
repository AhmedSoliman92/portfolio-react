import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperclip } from '@fortawesome/fontawesome-free-solid';

const AboutMe = () => {
    return (
        <div className="about-me">
            <p>
                I'm Studing MSc Computer Sience Engineering at University of Miskolc, And it's expected to graduate at the end of Jan 2022.
                I had Bachelor degree in Computer Engineerng And Automatic Control. Also I've studied Web Sience Master but I puased it regarding to the  hungarian scholarship which I got it.
                In my academic journey, I've got a lot. Either software or hardware.
                Beside to my study, I keep learning and  training , expecially in programming(Web Development, Data Science).
                <br/>
                <strong>Download the CV and Browse the my personal page to know, What I gained during these years.</strong> 

            </p>
            <a download='' href={require('./Ahmed Soliman.pdf').default} className="button"><FontAwesomeIcon icon={faPaperclip}/> Download CV</a>
        </div>
    )
}

export default AboutMe;