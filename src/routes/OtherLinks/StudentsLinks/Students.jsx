import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  Divider,
  Space,
  Grid,
  ScrollArea,
  Container,
  Image,
} from "@mantine/core";
import Footer from "../../../components/Footer";
import Navigation from "../../../components/Navigation";
import Nav from "../../../components/Nav";
import { links } from "./links";
import pic from "./Images/student_manual.jpg";

function Students() {
  const [selectedLink, setSelectedLink] = useState(null);
  const [selectedSublink, setSelectedSublink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    if (!link.component && link.subLinks && link.subLinks.length > 0) {
      // Main link does not have a component, set the first sublink as active
      const firstSublink = link.subLinks[0];
      setSelectedSublink(firstSublink.label);
      handleSublinkClick(firstSublink); // Trigger a click on the first sublink
    } else {
      // Main link has a component or no sublinks, reset the selected sublink
      setSelectedSublink(null);
    }
  };

  const handleSublinkClick = (sublink) => {
    setSelectedSublink(sublink); // Handle sublink selection
    console.log(selectedSublink);
  };

  const aboutTextRef = useRef(null);
  const [isSolidBackground, setIsSolidBackground] = useState(false);

  const handleScroll = () => {
    if (aboutTextRef.current) {
      const rect = aboutTextRef.current.getBoundingClientRect();

      setIsSolidBackground(
        rect.top <= window.innerHeight && rect.bottom >= 170
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const getFirstSublinkWithComponent = (mainLink) => {
  //   return mainLink.subLinks.find((sublink) => sublink.component)?.component;
  // };

  return (
    <div style={{ overflow: "hidden" }}>
      <Nav
        style={{
          backgroundColor: isSolidBackground ? "transparent" : "#fff",
          boxShadow: isSolidBackground
            ? "none"
            : "0 4px 4px rgba(0, 0, 0, 0.2)",
        }}
        backgroundColor
        color={isSolidBackground ? "color.0" : "color.9"}
        sColor={isSolidBackground ? "color.0" : "color.9"}
      />
      <div className="Header">
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
        style={{
          display: "flex",
          position: "absolute",
          flexDirection: "column",
          backgroundColor: "#fff",
          width: "100%",
          zIndex: "1",
        }}
      >
        <div
          ref={aboutTextRef}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center ",
            padding: "1rem",
          }}
        >
          <div style={{ display: "flex", padding: "1rem" }}>
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

          <Divider />
        </div>
        <div style={{ height: "150vh" }}>
          <Grid columns={24}>
            <Grid.Col span={6}>
              <Container>
                <Navigation
                  title={selectedLink}
                  links={links}
                  onLinkClick={handleLinkClick}
                  onSublinkClick={handleSublinkClick}
                  selectedSublink={selectedSublink}
                />
              </Container>
              <Container style={{ marginTop: -500 }}>
                <Image maw={350} src={pic} p="md" />
              </Container>
              {/* Place Navigation component in the first column */}
            </Grid.Col>
            <Grid.Col span={18}>
              <ScrollArea h={1000} type="never">
                <Container>
                  {/* Render content based on the selected link */}
                  {links.map((link) => {
                    if (link.label === selectedLink) {
                      if (selectedSublink) {
                        const sublink = link.subLinks.find(
                          (sublink) => sublink.label === selectedSublink
                        );

                        if (sublink && sublink.component) {
                          const SublinkComponent = sublink.component;
                          return (
                            <SublinkComponent
                              selectedLink={selectedLink}
                              selectedSublink={selectedSublink}
                            />
                          );
                        } else {
                          console.error(
                            `Component not found for sublink: ${selectedSublink}`
                          );
                          // Handle the case when the component is not found, you can add an error message or a default action
                          return null;
                        }
                      } else if (link.component) {
                        // Render the component of the main link
                        const MainLinkComponent = link.component;
                        return (
                          <MainLinkComponent selectedLink={selectedLink} />
                        );
                      } else if (link.subLinks && link.subLinks.length > 0) {
                        // Main link does not have a component, render the first sublink and its component
                        const firstSublink = link.subLinks[0];
                        const FirstSublinkComponent = firstSublink.component;

                        if (FirstSublinkComponent) {
                          return (
                            <FirstSublinkComponent
                              selectedLink={selectedLink}
                              selectedSublink={firstSublink.label}
                            />
                          );
                        } else {
                          console.error(
                            `Component not found for sublink: ${firstSublink.label}`
                          );
                          // Handle the case when the component is not found, you can add an error message or a default action
                          return null;
                        }
                      }
                    }
                    return null;
                  })}
                </Container>
              </ScrollArea>
            </Grid.Col>
          </Grid>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Students;
