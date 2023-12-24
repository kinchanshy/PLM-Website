import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  Divider,
  Space,
  SimpleGrid,
  Paper,
  ActionIcon,
} from "@mantine/core";
import {
  IconMinus,
  IconMapPin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import Footer from "../../../components/Footer";
import Navigation from "../../../components/Navigation";
import Nav from "../../../components/Nav";



function Partners() {

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
            PARTNERS
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
              Partners
            </Text>
            <Space w="sm" />
          </div>

          <Divider />
        </div>

        <div
          style={{
            display: "flex",     
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 1.5rem 0 1.5rem",
        
          }}
        >
          <div style={{padding: '1.5rem 0 1.5rem 0'}}>
            <Text p="xs" fw={'bold'} fz={'1.5rem'}>
            PARTNERS
            </Text>
          </div>
          
          <Divider />

          <div style={{padding: '1.5rem 0 1.5rem 0'}}>
            <Text p="xs">
            PLM works with partners that share our vision of making service-oriented, quality education a standard in learning.
            </Text>
          </div>

          <div>
            <Text p="xs" fw={'bold'} fz={'1.25rem'}>
            Scholarship Providers
            </Text>
          </div>
          
          <div style={{padding: '1.5rem 0 1.5rem 0'}}>
            <Text p="xs">
            PLM partners with foundations and generous individuals to provide poor but deserving students the fighting chance that they deserve. Depending on the partners, scholars receive monthly stipends, book allowance, and even a year-end bonus.
            </Text>
          </div>

          <div style={{padding: '1.5rem 0 1.5rem 0'}}>
            <Text p="xs">
            Read more about our scholarship providers here. (Nakalink ito under admissions)
            </Text>
          </div>

          <div style={{padding: '1.5rem 0 1.5rem 0'}}>
            <Text p="xs">
            Organizations or individuals interested to provide scholarship to PLM students may contact the Office of Public Affairs (OPA). Inquiries and letters of intent may be addressed to:
            </Text>
          </div>

          <div style={{ padding: "2rem" }}>
            <Paper radius="md" shadow="md" p="lg" bg="color.2">
              <SimpleGrid cols={2}>
                <div>
                  <Text fz="xl" fw="bold">
                    Office of Public Affairs
                  </Text>
                  <Text fw="bold">Dina C. Mendez</Text>
                  <Text fz="xs" c="dimmed">
                    Officer-in-Charge
                  </Text>
                </div>
                <div>
                  <div style={{ display: "flex" }}>
                    <ActionIcon c="color.4">
                      <IconMinus size="1.125rem" />
                    </ActionIcon>
                    <Space w="xs" />
                    <Text fz="lg" fw="bold">
                      GET IN TOUCH
                    </Text>
                  </div>
                  <div>
                    <Text fz="lg" fw="bold" p="sm">
                      We’d love to hear from you! Please
                      feel free to contact us with any
                      questions.
                    </Text>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div>
                      <ActionIcon c="color.4">
                        <IconMapPin size="1.125rem" />
                      </ActionIcon>
                    </div>
                    <Space w="xs" />
                    <div>
                      <Text>Office Location</Text>
                      <Text c="dimmed">(Location ng Building)</Text>
                    </div>
                  </div>
                  <Space h="xs" />
                  <div style={{ display: "flex" }}>
                    <div>
                      <ActionIcon c="color.4">
                        <IconMail size="1.125rem" />
                      </ActionIcon>
                    </div>
                    <Space w="xs" />
                    <div>
                      <Text>Email</Text>
                      <Text c="dimmed">vppa@plm.edu.ph</Text>
                    </div>
                  </div>
                  <Space h="xs" />
                  <div style={{ display: "flex" }}>
                    <div>
                      <ActionIcon c="color.4">
                        <IconPhone size="1.125rem" />
                      </ActionIcon>
                    </div>
                    <Space w="xs" />
                    <div>
                      <Text>Contact Numbers</Text>
                      <Text c="dimmed">000000</Text>
                    </div>
                  </div>
                </div>
              </SimpleGrid>
            </Paper>
          </div>

          </div>

        <Footer />
      </div>
    </div>
  );
}

export default Partners;
