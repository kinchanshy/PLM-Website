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
import Navigation from "../../../components/Sidebar";
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

        <div
          style={{
            display: "flex",     
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 1.5rem 0 1.5rem",
        
          }}
        >
          <div>
            <Text p="xs" fw={'bold'} fz={'1.5rem'}>
            PARTNERS
            </Text>
          </div>
          
          <Divider />

          <div>
            <Text p="xs">
            PLM works with partners that share our vision of making service-oriented, quality education a standard in learning.
            </Text>
          </div>

          <div>
            <Text p="xs" fw={'bold'} fz={'1.25rem'}>
            Scholarship Providers
            </Text>
          </div>
          
          <div>
            <Text p="xs">
            PLM partners with foundations and generous individuals to provide poor but deserving students the fighting chance that they deserve. Depending on the partners, scholars receive monthly stipends, book allowance, and even a year-end bonus.
            </Text>
          </div>

          <div>
            <Text p="xs">
            Read more about our scholarship providers here. (Nakalink ito under admissions)
            </Text>
          </div>

          <div>
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
  );
}

export default Partners;
