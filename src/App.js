import Navbar  from "./scenes/Navbar";


import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


import DotGroup from "./scenes/DotGroup";
import About from "./scenes/About";
import Home from "./scenes/Home";
import Portfolio from "./scenes/Portfolio";
import  Projects  from "./scenes/Projects";
import Skills  from "./scenes/Skills";
import Contact from "./scenes/Contact";
import { GIthubStats } from "./scenes/GIthubStats";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="w-5/6 mx-auto md:h-full flex flex-col " >
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Home useMediaQuery={useMediaQuery}/>
          <About onScroll={setSelectedPage}/>
        <Projects onScroll={setSelectedPage}/>
        <Skills/>
        <GIthubStats/>
        <Contact/>
        </div>
    </div>
  );
}

export default App;
