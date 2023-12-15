import React, { useState, useEffect, useRef } from "react";
import { useWindowScroll } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HomeText from "../components/HomeComponents/HomeText";
import Footer from "../components/Footer";
import HomeNews from "../components/HomeComponents/HomeNews";
import HomeSeal from "../components/HomeComponents/HomeSeal";
import GotoTop from "../components/GotoTop";
import HomeCarousel from "../components/HomeComponents/HomeCarousel";
import HomeArchive from "../components/HomeComponents/HomeArchive";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [navBackgroundTop, setNavBackgroundTop] = useState(
    "HeaderTransparentTop"
  );
  const [navBackgroundBot, setNavBackgroundBot] = useState(
    "HeaderTransparentBot"
  );
  const [isHeaderBotVisible, setHeaderBotVisible] = useState(true);
  const navRefTop = useRef(navBackgroundTop);
  navRefTop.current = navBackgroundTop;
  const navRefBot = useRef(navBackgroundBot);
  navRefBot.current = navBackgroundBot;
  const targetDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const targetDivPosition = targetDivRef.current.offsetTop - 100;
      const show = window.scrollY > targetDivPosition;

      if (show) {
        setNavBackgroundTop("HeaderSolidTop");
        setHeaderBotVisible(false);
      } else {
        setNavBackgroundTop("HeaderTransparentTop");
        setHeaderBotVisible(true);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //routing
  const navigate = useNavigate();
  // This are the effects that are used on this page
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div>
      <div>
        <Header
          topStyle={{
            background:
              navBackgroundTop === "HeaderTransparentTop"
                ? "rgba(0, 0, 0, 0.5)"
                : "#fff",
            "& .menuText:hover": {
              color:
                navBackgroundTop === "HeaderSolidTop" ? "#d5a106" : "#022f76",
              transition: "0.3s ease-in-out",
            },
            boxShadow:
              navBackgroundTop === "HeaderSolidTop"
                ? "0 4px 4px rgba(0, 0, 0, 0.2)"
                : "none",
            zIndex: navBackgroundTop === "HeaderSolidTop" ? 1 : "unset",
          }}
          botStyle={{
            background:
              navBackgroundBot === "HeaderTransparentBot"
                ? "linear-gradient(to bottom, rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0))"
                : "#f9f8f8",
            "& .menuText:hover": {
              color:
                navBackgroundBot === "HeaderSolidBot" ? "#d5a106" : "#022f76",
              transition: "0.3s ease-in-out",
            },
          }}
          menuColor={navBackgroundTop === "HeaderSolidTop" ? "#022f76" : "#fff"}
          searchColor={navBackgroundTop === "HeaderSolidTop" ? "#000" : "#fff"}
          isHeaderBotVisible={isHeaderBotVisible}
        />
      </div>
      <div className="main">
        <div className="main-text">
          {/* The Big Texts in the middle */}
          <HomeText
            Program={() => {
              navigate("/admissions/undergraduate-programs");
            }}
            Explore={() => {
              window.scrollTo({
                top: targetDivRef.current.offsetTop - 50,
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div>
      <div ref={targetDivRef} className="contents-container">
        <>
          <HomeNews />
        </>
        <div className="carousel">
          <HomeCarousel />
        </div>
        <div className="seal">
          <HomeSeal />
        </div>
        <>
          <HomeArchive />
        </>
        <>
          <GotoTop />
          <Footer />
        </>
      </div>
    </div>
  );
}

export default Home;
