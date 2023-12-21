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
  Image,
} from "@mantine/core";
import quick from "../../assets/quick.png";
import Profile from "./Profile";
import OBE from "./OBE";
import Administration from "./Administration";
import PrideHall from "./PrideHall";
import Contact from "./Contact";
import VM from "./ProfileLinks/VM";
import Seal from "./ProfileLinks/Seal";
import History from "./ProfileLinks/History";
import Hymn from "./ProfileLinks/Hymn";
import Charter from "./ProfileLinks/Charter";
import Code from "./ProfileLinks/Code";
import Map from "./ProfileLinks/Map";
import Thrusts from "./ProfileLinks/Thrusts";
import Facilities from "./ProfileLinks/Facilities";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import { links } from "./links";
import BoardPassers from "./PrideHallLinks/BoardPassers";
import Awards from "./PrideHallLinks/Awards";
import Outstanding from "./PrideHallLinks/Outstanding";
import Model from "./PrideHallLinks/Model";
import BOR from "./AdministrationLinks/BOR";
import President from "./AdministrationLinks/President";
import VP from "./AdministrationLinks/VP";
import Directors from "./AdministrationLinks/Directors";
import Deans from "./AdministrationLinks/Deans";
import OrgChart from "./AdministrationLinks/OrgChart";
import SupportStaff from "./AdministrationLinks/SupportStaff";
import QuickLinks from "../../components/QuickLinks";

function AboutShell() {
  const navigate = useNavigate();
  const location = useLocation();
  const targetDivRef = useRef(null);
  const [selectedLink, setSelectedLink] = useState(null);
  const [selectedSublink, setSelectedSublink] = useState(null);
  const [isSolidBackground, setIsSolidBackground] = useState(false);
  const [activeSidebarIndex, setActiveSidebarIndex] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setSelectedSublink(null); // Reset selected sublink when changing main links
  };

  const handleSublinkClick = (sublink) => {
    setSelectedSublink(sublink); // Handle sublink selection
  };

  const handleSidebarLinkActivate = (index) => {
    setActiveSidebarIndex(index);
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
              ABOUT
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
              About
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

          <div
            style={{
              display: "flex",
              alignItems: "start",
              gap: "2rem",
              backgroundColor: "#fff",
              zIndex: "1",
              height: "100vh",
            }}
          >
            <div style={{ minWidth: "30vw", position: "sticky", top: "0" }}>
              <Sidebar
                title={selectedLink}
                links={links}
                onLinkClick={handleLinkClick}
                onSublinkClick={handleSublinkClick}
                selectedSublink={selectedSublink}
                currentRoute={location.pathname}
                scrollToTop={handleScrollToTop}
              />
            </div>
            <div>
              <Container>
                <Routes>
                  <Route path="/" element={<Outlet />}>
                    <Route path="university-profile/*" element={<Outlet />}>
                      <Route index element={<Profile />} />
                      <Route path="vision-and-mission" element={<VM />} />
                      <Route path="seal-and-symbols" element={<Seal />} />
                      <Route path="history" element={<History />} />
                      <Route path="university-hymn" element={<Hymn />} />
                      <Route path="university-charter" element={<Charter />} />
                      <Route path="university-code" element={<Code />} />
                      <Route path="university-map" element={<Map />} />
                      <Route path="academic-thrusts" element={<Thrusts />} />
                      <Route path="facilities" element={<Facilities />} />
                    </Route>
                    <Route path="outcome-based-education" element={<OBE />} />
                    <Route path="administration/*" element={<Outlet />}>
                      <Route index element={<Administration />} />
                      <Route path="board-of-regents" element={<BOR />} />
                      <Route path="the-president" element={<President />} />
                      <Route
                        path="vice-president-&-assistant-vice-presidents"
                        element={<VP />}
                      />
                      <Route
                        path="directors-and-chiefs"
                        element={<Directors />}
                      />
                      <Route path="deans" element={<Deans />} />
                      <Route
                        path="organizational-chart"
                        element={<OrgChart />}
                      />
                      <Route
                        path="presidential-support-staff"
                        element={<SupportStaff />}
                      />
                    </Route>
                    <Route path="pride-hall" element={<Outlet />}>
                      <Route index element={<PrideHall />} />
                      <Route
                        path="board-exam-passers"
                        element={<BoardPassers />}
                      />
                      <Route path="awards" element={<Awards />} />
                      <Route
                        path="outstanding-alumni"
                        element={<Outstanding />}
                      />
                      <Route path="model-employees" element={<Model />} />
                    </Route>
                    <Route path="contact" element={<Contact />} />
                  </Route>
                </Routes>
              </Container>
            </div>
          </div>
        </div>
        <QuickLinks />
      </div>
      <Footer />
    </>
  );
}

export default AboutShell;
