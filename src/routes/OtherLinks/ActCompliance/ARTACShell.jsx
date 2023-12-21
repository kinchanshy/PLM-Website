import React, { useState, useEffect, useRef } from "react";
import { useWindowScroll } from "@mantine/hooks";
import { useNavigate, useLocation } from "react-router-dom";
import { Text, Space, Divider, Container } from "@mantine/core";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ARTAC from "./ARTAC";
import QuickLinks from "../../../components/QuickLinks";

function ARTACShell() {
  const navigate = useNavigate();
  const targetDivRef = useRef(null);
  const location = useLocation();
  const [isSolidBackground, setIsSolidBackground] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);
  const [selectedSublink, setSelectedSublink] = useState(null);
  const [activeSidebarIndex, setActiveSidebarIndex] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setSelectedSublink(null); // Reset selected sublink when changing main links
  };

  const [scroll, scrollTo] = useWindowScroll();

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

  // This are the effects that are used on this page

  return (
    <div>
      <div style={{ height: "150vh", overflow: "hidden" }}>
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
        <div className="bg">
          <div
            style={{
              display: "flex",
              marginLeft: "3rem",
              marginTop: "10rem",
              position: "fixed",
              zIndex: 0,
            }}
          >
            <Divider size="md" color="#FFC60B" orientation="vertical" />
            <Space w="sm" />
            <Text c="#fff" fw="bold" fz="3rem">
              ANTI-RED TAPE ACT COMPLIANCE
            </Text>
          </div>
        </div>
        <div
          ref={targetDivRef}
          style={{
            position: "sticky",
            backgroundColor: "#fff",
            width: "100%",
            zIndex: "1",
          }}
        >
          <div
            style={{ display: "flex", padding: "1.5rem", marginLeft: "1rem" }}
          >
            <Text fz="lg" ff="Open Sans">
              Home
            </Text>
            <Space w="sm" />
            <Text c="gray">⚬</Text>
            <Space w="sm" />
            <Text fz="lg" ff="Open Sans">
              Citizen's Charter
            </Text>
          </div>
          <div
            style={{
              marginLeft: "2rem",
              marginRight: "2rem",
              marginBottom: "1rem",
            }}
          >
            <Divider size="sm" />
          </div>
          <div style={{ height: "100vh", backgroundColor: "#fff" }}>
            <Container>
              <ARTAC />
            </Container>
          </div>
          <QuickLinks />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ARTACShell;
