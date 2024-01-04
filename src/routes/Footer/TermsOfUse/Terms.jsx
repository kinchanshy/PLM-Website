import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  Divider,
  List,
  ActionIcon,
  Tooltip,
  Group,
} from "@mantine/core";
import {
  IconBrandFacebookFilled,
  IconBrandLinkedin,
  IconMailFilled,
  IconBrandX,
} from "@tabler/icons-react";
import BusinessCard from "../../../components/BusinessCardFooter";

function Terms() {

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
            Term of Use
            </Text>
          </div>
          
          <Divider />

          <div>
            <Text p="xs">
            Welcome to the official website of Pamantasan ng Lungsod ng Maynila (PLM), the first and only chartered and autonomous university funded by the city government. By accessing and using this website, you agree to be bound by the following terms and conditions:
            </Text>
          </div>

          <div>
            <Text p="xs">
            The content of this website, including but not limited to text, graphics, images, logos, icons, and software, is the property of PLM or its content providers and is protected by Philippine copyright laws.
            </Text>
          </div>

          <div>
            <Text p="xs">
            You may view, download, and print the content of this website for personal, non-commercial, and educational purposes only, provided that you retain all copyright and other proprietary notices contained in the original materials.
            </Text>
          </div>

          <div>
            <Text p="xs">
            You may not modify, copy, reproduce, republish, upload, post, transmit, or distribute in any way the content of this website without the prior written permission of PLM or its content providers.
            </Text>
          </div>

          <div>
            <Text p="xs">
            You may not use the content of this website for any unlawful or prohibited purpose, or in any manner that could damage, disable, overburden, or impair the website or interfere with the rights of PLM or any third party.
            </Text>
          </div>

          <div>
            <Text p="xs">
            You may not use any automated means, such as robots or crawlers, to access, monitor, or collect data from this website, or to circumvent any security measures or access restrictions implemented on this website.
            </Text>
          </div>

          <div>
            <Text p="xs">
            You may not attempt to gain unauthorized access to any part of this website, or any system or network connected to this website, or to any PLM email account, by hacking, password mining, or any other means.
            </Text>
          </div>

          <div>
            <Text p="xs">
            You may not use this website to transmit or upload any material that contains viruses, worms, Trojan horses, or any other harmful or malicious code that could damage or compromise the integrity or security of this website or any system or network connected to this website.
            </Text>
          </div>

          <div>
            <Text p="xs">
            You grant PLM a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display any content that you post, submit, or transmit to or through this website, in any media or format, for any purpose, without any compensation or acknowledgment to you.
            </Text>
          </div>

          <div>
            <Text p="xs">
            You acknowledge that PLM does not endorse, verify, or guarantee the accuracy, completeness, reliability, or suitability of any content posted, submitted, or transmitted by you or any other user or third party on this website. You agree that PLM is not liable for any loss or damage arising from your reliance on such content.
            </Text>
          </div>

          <div>
            <Text p="xs">
            You agree to indemnify, defend, and hold harmless PLM, its officers, employees, agents, partners, and content providers, from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees, including reasonable attorneys' fees, arising from or relating to your use of this website or your violation of these terms and conditions.
            </Text>
          </div>

          <div>
            <Text p="xs">
            PLM reserves the right to modify, suspend, or discontinue, temporarily or permanently, this website or any part thereof, at any time, without prior notice or liability to you or any third party.
            </Text>
          </div>

          <div>
            <Text p="xs">
            PLM reserves the right to change, update, or revise these terms and conditions at any time, without prior notice or liability to you or any third party. Your continued use of this website after any such changes constitutes your acceptance of the new terms and conditions.
            </Text>
          </div>

          <div>
            <Text p="xs">
            These terms and conditions constitute the entire agreement between you and PLM regarding your use of this website and supersede any prior or contemporaneous agreements, communications, or understandings, whether written or oral, between you and PLM.
            </Text>
          </div>

          <div style={{paddingBottom:"1.5rem"}}>
            <Text p="xs">
            These terms and conditions are governed by and construed in accordance with the laws of the Republic of the Philippines, without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts of the Republic of the Philippines for any dispute arising from or relating to these terms and conditions or your use of this website.
            </Text>
          </div>

          <Divider />

          <div style={{paddingTop: "1.5rem"}}>
            <BusinessCard />
          </div>

          <Group
              gap={40}
              style={{
                paddingTop: "2rem"
              }}
              justify="center"
              wrap="nowrap"
            >
              <ActionIcon
                variant="filled"
                color="#000000"
                size="lg"
                onClick={() => {
                  window.open("mailto:info@plm.edu.ph", "_blank");
                }}
              >
                <Tooltip label="Email us" withArrow>
                  <IconMailFilled />
                </Tooltip>
              </ActionIcon>
              <ActionIcon
                variant="filled"
                color="#000000"
                size="lg"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A15097268&keywords=pamantasan%20ng%20lungsod%20ng%20maynila&origin=RICH_QUERY_SUGGESTION&position=0&searchId=93b8881c-843a-49c2-95b8-ea6b6f58f9ae&sid=n%3Am&spellCorrectionEnabled=false",
                    "_blank"
                  );
                }}
              >
                <Tooltip label="Linkedin Account" withArrow>
                  <IconBrandLinkedin />
                </Tooltip>
              </ActionIcon>
              <ActionIcon
                variant="filled"
                color="#000000"
                size="lg"
                onClick={() => {
                  window.open("https://www.facebook.com/PLM.Haribon", "_blank");
                }}
              >
                <Tooltip label="Facebook Page" withArrow>
                  <IconBrandFacebookFilled />
                </Tooltip>
              </ActionIcon>
              <ActionIcon
                variant="filled"
                color="#000000"
                size="lg"
                onClick={() => {
                  window.open("https://twitter.com/PLM_Manila", "_blank");
                }}
              >
                <Tooltip label="X Account" withArrow>
                  <IconBrandX />
                </Tooltip>
              </ActionIcon>
            </Group>
        </div>
  );
}

export default Terms;
