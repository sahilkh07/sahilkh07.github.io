import { Heading } from "@chakra-ui/react";
import React from "react";
import resume from '../data/Mohammad_Sahil_Resume.pdf'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

import Typewriter from "typewriter-effect";
import profile from "../assets/profile-pic6.png";
import SocialMediaIcons from "../components/SocialMediaIcons";
import "./Home.css";
const Home = ({ useMediaQuery }) => {
  const handleClick=()=>{
    window.open('https://drive.google.com/file/d/1x6IkpKIRtZfnJT1szT8sqpabp_VL-4hG/view')
  }

  return (
    <div id="home" className="top_Heading">
      <div>
        <Heading>Hi My name is</Heading>
           <Heading id="user-detail-name">Mohammad Sahil</Heading>
           <Heading>And I'm a Full Stack Web Developer</Heading>
        <SocialMediaIcons />
        <div className="resume">
          <a id="resume-link-2" className="resume_button"
            textAlign={"center"}
            href={resume}
            onClick={handleClick}
            download="Mohammad_Sahil_Resume.pdf">
        <button id="resume-button-2" className="bg-yellow p-2 rounded ">Resume</button>
        </a>
        </div>
      </div>
      <div>
        <img className="home-img" style={{ height: "300px" }} src={profile} alt="" />
      </div>
    </div>
  );
};

export default Home;
