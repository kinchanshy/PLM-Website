import React, { useState, useEffect, useRef } from "react";
import {
  Routes,
  Route,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import {
  Grid,
  Text,
  Container,
  Divider,
  Space,
  ScrollArea,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import PressRelease from "./PressRelease";
import Gallery from "./Gallery";
import { links } from "./links";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import Reports from "./Reports";
import NewsLetter from "./NewsLetter";
import Announcements from "./Announcements";
import Message from "./Message";
import QuickLinks from "../../components/QuickLinks";

function NewsShell() {
  const navigate = useNavigate();
  const location = useLocation();
  const targetDivRef = useRef(null);
  const [selectedLink, setSelectedLink] = useState(null);
  const [isSolidBackground, setIsSolidBackground] = useState(false);
  const viewport = useRef(null);

  const scrollToTop = () =>
    viewport.current.scrollTo({ top: 0, behavior: "smooth" });

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    scrollToTop();
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

  return (
    <>
      <div style={{ overflow: "hidden" }}>
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
              ADMISSIONS
            </Text>
          </div>
        </div>
        <div
          ref={targetDivRef}
          style={{
            position: "sticky",
            top: "0",
            backgroundColor: "#fff",
            width: "100%",
            zIndex: "1",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "1.5rem",
              marginLeft: "1rem",
            }}
          >
            <Text fz="lg" ff="Open Sans">
              Home
            </Text>
            <Space w="sm" />
            <Text c="gray">⚬</Text>
            <Space w="sm" />
            <Text fz="lg" ff="Open Sans">
              Admissions
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

          <div
            style={{
              height: "80svh",
            }}
          >
            <ScrollArea
              h="75svh"
              scrollbarSize={1}
              offsetScrollbars
              viewportRef={viewport}
            >
              <Grid columns={24}>
                <Grid.Col span={6}>
                  <div>
                    <Sidebar
                      title={selectedLink}
                      links={links}
                      onLinkClick={handleLinkClick}
                      currentRoute={location.pathname}
                      scrollToTop={handleScrollToTop}
                    />
                  </div>
                </Grid.Col>
                <Grid.Col span="auto">
                  <Container>
                    <Routes>
                      <Route path="/" element={<Outlet />}>
                        <Route
                          path="press-release"
                          element={<PressRelease />}
                        />
                        <Route path="gallery" element={<Gallery />} />
                        <Route path="special-reports" element={<Reports />} />
                        <Route path="news-letter" element={<NewsLetter />} />
                        <Route
                          path="announcements"
                          element={<Announcements />}
                        />
                        <Route
                          path="message-from-the-university-president"
                          element={<Message />}
                        />
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
          </div>
        </div>
        <QuickLinks />
      </div>
      <Footer />
    </>
  );
}

export default NewsShell;
