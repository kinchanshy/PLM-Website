import React, { useState, useEffect, useRef } from "react";
import { useWindowScroll } from "@mantine/hooks";
import {
  Routes,
  Route,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Grid, Text, Space, Divider, Container, ScrollArea, } from "@mantine/core";
import { links } from "./links";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Campus from "../CommunityLinks/Campus";
import Events from "../CommunityLinks/Events";
import Sports from "../CommunityLinks/Sports";
import VISA from "../CommunityLinks/VISA";
import QuickLinks from "../../../components/QuickLinks";
import Nav from "../../../components/Nav";

function CommunityShell() {
  const navigate = useNavigate();
  const targetDivRef = useRef(null);
  const location = useLocation();
  const [isSolidBackground, setIsSolidBackground] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);
  const [selectedSublink, setSelectedSublink] = useState(null);
  const [activeSidebarIndex, setActiveSidebarIndex] = useState(null);
  const viewport = useRef(null);

  const scrollToTop = () =>
    viewport.current.scrollTo({ top: 0, behavior: "smooth" });

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setSelectedSublink(null); // Reset selected sublink when changing main links
  };
  const handleScrollToTop = () => {
    if (targetDivRef.current) {
      const navHeight = 75; // Replace with your actual navigation bar height
      const targetDivOffset = targetDivRef.current.offsetTop - navHeight;
      window.scrollTo({ top: targetDivOffset, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (targetDivRef.current) {
      const rect = targetDivRef.current.getBoundingClientRect();
      // Adjust the conditions as needed
      setIsSolidBackground(rect.top <= 85); // Set to solid when the targetDivRef is at or above the top of the viewport
      if (
        rect.top <= 0 &&
        rect.bottom >= window.innerHeight &&
        rect.height < window.innerHeight
      ) {
        handleScrollToTop();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Initial setup
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //routing

  // This are the effects that are used on this page

  return (
    <div>
      <div style={{ height: "150vh", overflow: "hidden" }}>
        <Nav
          style={{
            backgroundColor: isSolidBackground ? "#fff" : "transparent",
            boxShadow: isSolidBackground
              ? "0 4px 4px rgba(0, 0, 0, 0.2)"
              : "none",
          }}
          color={isSolidBackground ? "#022f76" : "#fff"}
          sColor={isSolidBackground ? "#022f76" : "#fff"}
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
              COMMUNITY
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
              Community
            </Text>
            <Space w="sm" />
            <Text c="gray">⚬</Text>
            <Space w="sm" />
            <Text fz="lg" ff="Open Sans">
              {selectedLink} {/* Show the selected link here */}
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

          <ScrollArea
              h="75svh"
              scrollbarSize={1}
              offsetScrollbars
              viewportRef={viewport}
            >
            <Grid columns={24}>
              <Grid.Col span={6}>
                <Container>
                  <Sidebar
                    title={selectedLink}
                    links={links}
                    onLinkClick={handleLinkClick}
                    currentRoute={location.pathname}
                    scrollToTop={handleScrollToTop}
                  />
                </Container>
              </Grid.Col>
              <Grid.Col span="auto">
                  <Container>
                    <Routes>
                      <Route path="/" element={<Outlet />}>
                        <Route path="campus" element={<Campus />} />
                        <Route path="events" element={<Events />} />
                        <Route path="sports" element={<Sports />} />
                        <Route path="immigration-and-visa" element={<VISA />} />
                      </Route>
                    </Routes>
                    <Divider
                      variant="dashed"
                      label="Scroll to top"
                      labelPosition="center"
                      color="#6a0000"
                      onClick={scrollToTop}
                      style={{ cursor: "pointer" }}
                    />
                  </Container>
              </Grid.Col>
            </Grid>
          </ScrollArea>
          <QuickLinks />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CommunityShell;
