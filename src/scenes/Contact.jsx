import { EmailIcon } from "@chakra-ui/icons";
import { Divider, Heading, Text,Icon } from "@chakra-ui/react";
import React from "react";
import { MdCall } from "react-icons/md";
import { RxMobile } from "react-icons/rx";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Contact = () => {
  return (
    <div
      name="contact"
      id="contact"

    >
      <div className="flex mt-10 flex-col justify-center">
        <div>
          <Heading size={'lg'} >Contact</Heading>
         
          <p className='mb-6 '>Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>


<button className="text-white bg-yellow px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
            <div className="flex justify-center">
            <SocialMediaIcons/>
            </div>
            <Text  textAlign={'center'}>Made By Sahil</Text>
            <div className="flex justify-center gap-1">
            <Icon as={EmailIcon} w={6} h={6} placeContent='mohammadsahil90a@gmail.com' color="white" >
            </Icon>
            <Text id="contact-email" textAlign={'center'}>mohammadsahil90a@gmail.com</Text>
            </div>
            
         
            <div className="flex justify-center gap-1 mt-1">
            <Icon as={MdCall} w={6} h={6}  color="white" >
            </Icon>
            <Text id="contact-phone" textAlign={'center'}>9798665595</Text>
            
            </div>

      
          </form>
     
        </div>
      </div>
    </div>
  );
};

export default Contact;