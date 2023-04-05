import React, { useEffect } from "react";
import{
  Heading
} from '@chakra-ui/react'
const About = ({onScroll}) => {
 
  return (
   <div  id="about" className="mt-16 about section" >
         <Heading as='h6' mb='13' size='lg'>About</Heading>

         <div id="user-detail-intro">
            Hi there! I'm Mohammad Sahil, a Full Stack Web Developer from India. I'm a passionate s Full Stack Web Developer. I have experience in building Web applications with JavaScript / Reactjs / Nodejs / Expressjs / MongoDB and some other cool libraries and frameworks.I'm currently working on a few personal projects and learning new technologies. I'm also open to new opportunities. Feel free to contact me.
         </div>
   </div>
  );
};

export default About;