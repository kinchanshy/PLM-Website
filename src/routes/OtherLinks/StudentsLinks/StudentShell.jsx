import React, { useState, useEffect, useRef } from "react";
import { useWindowScroll } from "@mantine/hooks";
import {
  Routes,
  Route,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Grid, Text, Space, Divider, Container } from "@mantine/core";
import { links } from "./links";
import Footer from "../../../components/Footer";
import Sidebar from "../../../components/Sidebar";
import Students from "./Students";
import StudentManual from "./StudentManual";
import Tuition from "./Tuition";
import Services from "./Services";
import NSTP from "./NSTP";
import SSC from "./SSC";
import Org from "./Org";
import Evaluation from "./Evaluation";
import StudentCRS from "./StudentCRS";
import Header from "../../../components/Header";

function StudentShell() {
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
              STUDENTS
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
              Students
            </Text>
            <Space w="sm" />
            <Text c="gray">⚬</Text>
            <Space w="sm" />
            <Text fz="lg" ff="Open Sans">
              {selectedLink} {/* Show the selected link here */}
            </Text>
            {selectedSublink && (
              <>
                <Space w="sm" />
                <Text c="gray">⚬</Text>
                <Space w="sm" />
                <Text fz="lg" ff="Open Sans">
                  {selectedSublink}
                </Text>
              </>
            )}
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
          <Grid columns={24}>
            <Grid.Col span={6}>
              <Container>
                <Sidebar
                  title={selectedLink}
                  links={links}
                  onLinkClick={handleLinkClick}
                  currentRoute={location.pathname}
                />
              </Container>
            </Grid.Col>
            <Grid.Col span="auto">
              <div style={{ height: "100vh", width: "100%" }}>
                <Container>
                  <Routes>
                    <Route path="/" element={<Outlet />}>
                      <Route path="students" element={<Students />} />
                      <Route
                        path="student-manual"
                        element={<StudentManual />}
                      />
                      <Route
                        path="tuition-and-other-fees"
                        element={<Tuition />}
                      />
                      <Route path="student-services" element={<Services />} />
                      <Route
                        path="national-service-training-program"
                        element={<NSTP />}
                      />
                      <Route path="student-council" element={<SSC />} />
                      <Route path="student-organization" element={<Org />} />
                      <Route
                        path="students-faculity-evaluation-system"
                        element={<Evaluation />}
                      />
                      <Route path="crs" element={<StudentCRS />} />
                    </Route>
                  </Routes>
                </Container>
              </div>
            </Grid.Col>
          </Grid>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StudentShell;
