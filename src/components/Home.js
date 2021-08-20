import React from 'react'
import { Contact, Education,Projects,Skills, Intro,AboutMe} from './Body'
import './home.css'
import '../App.css'
const Home = () => {
    return (
        <div className="body">
            <section id='intro'>
                <Intro/>
            </section>
            <section id='about'>
            <h1 className="heading">About me</h1>
                <AboutMe/>
            </section>
            <section id='education'>
                <div className="title">
                <h1 className="heading">Education & Training</h1>
                </div>
                <Education/>
            </section>
            <section id='skill'>
            <h1 className="heading">PROGRAMMING LANGUAGE</h1>
                <Skills/>
            </section>
            <section id='project'>
                <h1 className="heading">Projects</h1>
                <Projects/>
            </section>
            
            
            <section id='contact'>
            <h1 className="heading">CONTACT ME</h1>
                <Contact/>
            </section>

            
            
            
            
        </div>
    );
}
export default Home;