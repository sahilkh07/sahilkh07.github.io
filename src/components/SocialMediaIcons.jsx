import facebook from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github4.png'
import twitter from '../assets/twitter.png'
import {BsGithub} from 'react-icons/bs'
const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          id='contact-linkedin'
          href="https://www.linkedin.com/in/mohammad-sahil-6a1a96246"
          target="_blank"
          rel="noreferrer"
        >
          <img  alt="linkedin-link" src={linkedin} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          id='contact-github'
          href="https://github.com/sahilkh07"
          target="_blank"
          rel="noreferrer"
        >
          <img className="gray contact-github" alt="linkedin-link" src={github} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <img alt="twitter-link" src={twitter} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook-link" src={facebook} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src={insta} />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;
  