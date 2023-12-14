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
import PLMAT from "./PLMAT";
import MCAT from "./MCAT";
import CLAT from "./CLAT";
import Programs from "./Programs";
import Scholarship from "./Scholarship";
import { links } from "./links";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import AdmissionOverview from "./AdmissionOverview";

function AdmissionsShell() {
  const navigate = useNavigate();
  const location = useLocation();
  const targetDivRef = useRef(null);
  const [selectedLink, setSelectedLink] = useState(null);
  const [isSolidBackground, setIsSolidBackground] = useState(false);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const handleScroll = () => {
    if (targetDivRef.current) {
      const rect = targetDivRef.current.getBoundingClientRect();
      // Adjust the conditions as needed
      setIsSolidBackground(rect.top <= 85); // Set to solid when the targetDivRef is at or above the top of the viewport
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
                currentRoute={location.pathname}
              />
            </div>
            <div>
              <Routes>
                <Route path="/" element={<Outlet />}>
                  <Route
                    path="admission-overview"
                    element={<AdmissionOverview />}
                  />
                  <Route path="plm-admission-test" element={<PLMAT />} />
                  <Route
                    path="medical-college-admission-test"
                    element={<MCAT />}
                  />
                  <Route
                    path="college-of-law-admission-test"
                    element={<CLAT />}
                  />
                  <Route path="undergraduate-programs" element={<Programs />} />
                  <Route
                    path="scholarship-and-financial-aid"
                    element={<Scholarship />}
                  />
                </Route>
              </Routes>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
    </>
  );
}

export default AdmissionsShell;
