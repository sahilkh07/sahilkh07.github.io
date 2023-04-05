import React from 'react';
import {HiMenuAlt4,HiX} from "react-icons/hi";
import {motion} from "framer-motion";
import resume from '../data/Mohammad_Sahil_Resume.pdf'

import "./Navbar.scss";

const Navbar = () => {
const [toggle, setToggle] = React.useState(false);

  return (
    <nav className='sahil_navbar  ' id="nav-menu" >
      <div className='sahil_navbar_logo' >
        <a href="#home"><span>{"<Sahil/>"}</span></a>
      </div>

      <ul className='sahil_navbar_links' >
        {["Home","About","Skills","Projects","Contact"].map((item)=>(
        <li className='app__flex  p-text' key={`link-${item}`}>
          <div/>
          <a className={`nav-link ${item.toLowerCase()}`} href={`#${item.toLowerCase()}`}>{item}</a>
        </li>
        ))}
      </ul>

      <a id="resume-link-1" class="nav-link resume" href={resume} download="Mohammad_Sahil_Resume.pdf" onClick={()=>{window.open('https://drive.google.com/file/d/1x6IkpKIRtZfnJT1szT8sqpabp_VL-4hG/view')}}><button className='sahil_nav_button' id="resume-button-1">Resume</button></a>

      <div className='sahil_navbar_menu' >
<HiMenuAlt4 onClick={()=>{setToggle(true)}} />

{
  toggle && (
      <motion.div 
      whileInView={{x:[260,0]}}
      transition={{duration:0.85,ease:"easeOut"}}
      >
<HiX onClick={()=>{setToggle(false)}} />
<ul>
{["Home","About","Skills","Projects","Contact"].map((item)=>(
        
        <li  key={item}>
          <a onClick={()=>{setToggle(false)}} className={`nav-link ${item.toLowerCase()}`} href={`#${item.toLowerCase()}`}>{item}</a>
        </li>
      
        ))}  </ul>
      </motion.div>
  )
}
      </div>
    </nav>
  )
}

export default Navbar