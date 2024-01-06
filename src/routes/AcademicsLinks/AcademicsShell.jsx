import React, { useState, useEffect, useRef } from "react";
import {
  Routes,
  Route,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import {
  ScrollArea,
  Text,
  Space,
  Divider,
  Container,
  Grid,
  Button,
} from "@mantine/core";
import { links } from "./links";
import Overview from "./Overview";
import Colleges from "./Colleges";
import Calendar from "./Calendar";
import CRS from "./CRS";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import CAUP from "./CollegeLinks/CAUP";
import PLMBS from "./CollegeLinks/PLMBS";
import CED from "./CollegeLinks/CED";
import COE from "./CollegeLinks/COE";
import CHASS from "./CollegeLinks/CHASS";
import CN from "./CollegeLinks/CN";
import CPT from "./CollegeLinks/CPT";
import CS from "./CollegeLinks/CS";
import CL from "./CollegeLinks/CL";
import GSL from "./CollegeLinks/GSL";
import CM from "./CollegeLinks/CM";
import SG from "./CollegeLinks/SG";
import SPH from "./CollegeLinks/SPH";
import Sidebar from "../../components/Sidebar";
import QuickLinks from "../../components/QuickLinks";

function AcademicsShell() {
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
    scrollToTop();
  };

  const handleSublinkClick = (sublink) => {
    setSelectedSublink(sublink); // Handle sublink selection
    scrollToTop();
  };

  const handleSidebarLinkActivate = (index) => {
    setActiveSidebarIndex(index);
  };

  const handleScrollToTop = () => {
    if (targetDivRef.current) {
      const navHeight = 75;
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

  const handleResetSublink = () => {
    setActiveSublink(null);
  };

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
          onResetSublink={handleResetSublink}
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
              ACADEMICS
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
              Academics
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
                      onSublinkClick={handleSublinkClick}
                      selectedSublink={selectedSublink}
                      currentRoute={location.pathname}
                      scrollToTop={handleScrollToTop}
                    />
                  </div>
                </Grid.Col>
                <Grid.Col span="auto">
                  <Container>
                    <Routes>
                      <Route path="/" element={<Outlet />}>
                        {/* <Route index element={<Academics />} /> */}
                        <Route
                          path="academic-overview"
                          element={<Overview title={selectedLink} />}
                        />
                        <Route path="colleges/*" element={<Outlet />}>
                          <Route
                            index
                            element={<Colleges title={selectedLink} />}
                          />
                          <Route
                            path="college-of-architecture-and-urban-planning"
                            element={<CAUP title={selectedSublink} />}
                          />
                          <Route
                            path="plm-business-school"
                            element={<PLMBS title={selectedSublink} />}
                          />
                          <Route
                            path="college-of-education"
                            element={<CED title={selectedSublink} />}
                          />
                          <Route
                            path="college-of-engineering"
                            element={<COE title={selectedSublink} />}
                          />
                          <Route
                            path="college-of-humanities-arts-and-social-sciences"
                            element={<CHASS title={selectedSublink} />}
                          />
                          <Route
                            path="college-of-nursing"
                            element={<CN title={selectedSublink} />}
                          />
                          <Route
                            path="college-of-physical-therapy"
                            element={<CPT title={selectedSublink} />}
                          />
                          <Route
                            path="college-of-science"
                            element={<CS title={selectedSublink} />}
                          />
                          <Route
                            path="college-of-law"
                            element={<CL title={selectedSublink} />}
                          />
                          <Route
                            path="graduate-school-of-law"
                            element={<GSL title={selectedSublink} />}
                          />
                          <Route
                            path="college-of-medicine"
                            element={<CM title={selectedSublink} />}
                          />
                          <Route
                            path="school-of-government"
                            element={<SG title={selectedSublink} />}
                          />
                          <Route
                            path="school-of-public-health"
                            element={<SPH title={selectedSublink} />}
                          />
                        </Route>
                        <Route
                          path="academic-calendar"
                          element={<Calendar title={selectedLink} />}
                        />
                        <Route
                          path="crs"
                          element={<CRS title={selectedLink} />}
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
      <div>
        <Footer />
      </div>
    </>
  );
}

export default AcademicsShell;
