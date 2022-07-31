import React, { useEffect } from "react";
import CommingSoon from "./CommingSoon";
import Intro from "./Intro";
import Quality from "./Quality";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = (props) => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
    AOS.refresh();
  }, []);
  

  return (
    <div className="home">
     <Intro/>
    <div data-aos="fade-up">
     <Quality/>
     </div>
    <div data-aos="fade-up">
     <CommingSoon/>
     </div>

    </div>
  );
};

export default Home;
