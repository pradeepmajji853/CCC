import React, { useEffect, useState } from "react";
import Heropage from "../components/Heropage";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Home.css";

export default function Home() {
  const [navVisible, setNavVisible] = useState(true);

  const handleScroll = () => {
    const heropage = document.querySelector(".heropage");
    const heropageHeight = heropage.offsetHeight;
    const scrollPosition = window.scrollY;
    
    if (scrollPosition >= heropageHeight) {
      setNavVisible(false);
    } else {
      setNavVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="herobg">
        {navVisible && <Navbar navBackground="transparent" />}
        <Heropage className="heropage" />
      </div>
      <Content />
      <Footer />
    </>
  );
}
