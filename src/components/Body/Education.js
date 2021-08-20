import React from 'react'

const Education = () => {
    return (
        <div className="education">
          <div className="left lr">
                <div className="circle-left"></div>
                <p><b>Computer Science Engineering</b></p>
                <p>University of Miskolc</p>
                <p>Miskolc</p>
                <span>Current</span>
            </div>
            
            <div className="right lr">
                <div className="circle-right"></div>
                <p><b>Java Workshop</b></p>
                <p>Packt -Workshop Learning</p>
                <p>Online</p>
                <span>JAN 2021</span>
            </div>
            
            <div className="left lr">
                <div className="circle-left left-second-child"></div>
                <p><b>SQL Workshop</b></p>
                <p>Packt -Workshop Learning</p>
                <p>Online</p>
                <span>SEP 2020</span>
            </div>
            
            <div className="right lr">
                <div className="circle-right right-second-child"></div>
                <p><b>Computer maintenance</b></p>
                <p>UNHCR</p>
                <p>Banyias</p>

                <span>DEC 2018</span>
            </div>
            
            <div className="left lr">
                <div className="circle-left left-third-child"></div>
                <p><b><i className="uil uil-graduation-cap"></i>BSc Computer Engineering <br/>& Automatic Control</b></p>
                <p>Tishreen University</p>
                <p>Lattakia</p>
                <span>AUG 2017</span>
            </div>
            
            <div className="right lr">
                <div className="circle-right right-third-child"></div>
                <p><b>Algorithms and C++ Course</b></p>
                <p>Skills and Career Center</p>
                <p>Lattakia</p>
                <span>APR 2016</span>
            </div>
            <div className="line"></div>
        </div>
    );
}
export default Education;