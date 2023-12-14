import React, { useState, useEffect, useRef } from "react";
import { Text, Container, Button } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HomeText from "../components/HomeText";
import Footer from "../components/Footer";

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

  // This scroll effect will get triggered when you click the explore more button

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
        <div
          style={{
            marginTop: "10rem",
            position: "fixed",
            zIndex: 0,
          }}
        >
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
      <div
        ref={targetDivRef}
        style={{
          width: "100%",
          backgroundColor: "#fff",
          position: "absolute",
          zIndex: "1",
          overflow: "auto",
        }}
      >
        <div style={{ height: "50vh" }}>Hello</div>
        <div style={{ height: "50vh" }}>Hi</div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
