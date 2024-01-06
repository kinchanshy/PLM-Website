import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  Divider,
  ActionIcon,
  Tooltip,
  Group,
  Image,
} from "@mantine/core";
import {
  IconBrandFacebookFilled,
  IconBrandLinkedin,
  IconMailFilled,
  IconBrandX,
} from "@tabler/icons-react";
import BusinessCard from "../../../components/BusinessCardFooter";
import ARTACSeal from "../../../assets/ARTAC.png";


function ARTAC() {

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
              Anti-Red Tape Act Compliance
            </Text>
          </div>
          
          <Divider />

          <div style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
            <Image src={ARTACSeal} p="md" style={{width:"20%"}}/>
          </div>

          

          <div>
            <Text p="xs">
            PLM is compliant with the Anti-Red Tape Act (ARTA), as validated by the Civil Service Commission-Malacañan Palace.
            </Text>
          </div>

          <div>
            <Text p="xs">
            Pursuant to the Transparency Principle of the Philippine Government, PLM's public policy is expressed through PAO No. 2013-12.
            </Text>
          </div>

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

export default ARTAC;
