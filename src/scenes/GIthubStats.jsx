import React from "react";
import "./Stats.scss";
import GitHubCalendar from 'react-github-calendar'

export const GIthubStats = () => {
  return (
    // streak 

    

    <div>
   
        <br/>
   
      <div className="streak-div"  >
        <a href="https://github.com/sahilkh07">
          <img
          id="github-streak-stats"
            align="left"
            className="mb-2"
            src="https://github-readme-streak-stats.herokuapp.com?user=sahilkh07&background=00000000&theme=github-dark-blue"
          />
        </a>
      </div>
 
      <div className="lang-div">
        <a href="https://github.com/sahilkh07">  
          <img
          id="github-top-langs"
          className="w-[100%] h-[100%]"
        
          
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=sahilkh07&show_icons=true&locale=en&bg_color=00000000"  //launguages
          />
        </a>
        
        <a href="https://github.com/sahilkh07">
          <img
          className="stat-img w-[100%] h-[100%]"
          id="github-stats-card"
        
          
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=sahilkh07&show_icons=true&locale=en&bg_color=00000000" //stats
          />
        </a>
      </div>
      <div className='flex w-[100%] h-[100%] justify-center mt-2 '>
            <GitHubCalendar className=" w-[100%] h-[100%]" color={'green'} username="sahilkh07" />
            </div>
    </div>
  );
};

