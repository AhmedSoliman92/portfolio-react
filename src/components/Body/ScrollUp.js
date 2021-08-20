import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/fontawesome-free-solid';
import '../../hocs/layout.css'

const ScrollUp = () => {
    const [showScroll,setShowScroll] = useState(false);
     const toUp = ()=> {
         if(!showScroll && window.pageYOffset>100){
             setShowScroll(true)
         }else if (showScroll && window.pageYOffset <= 100) {
             setShowScroll(false)
         }
     }
     window.addEventListener('scroll',toUp)

    return (
        <a className="scroll" href="#nav" style={{opacity: showScroll? 1:0}} > <FontAwesomeIcon icon={faArrowCircleUp}/></a>
    )
}

export default ScrollUp
