import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  Divider,
} from "@mantine/core";
import Accordions from "../../../components/AccordionsAdmission";
import BusinessCard from "../../../components/BusinessCardFooter";
import { charterAccordion } from "./links";


function CitizensCharter() {

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
              Citizen's Charter
            </Text>
          </div>
          
          <Divider />

          <div>
            <Text p="xs">
              The Pamantasan ng Lungsod ng Maynila released its Citizen's Charter in compliance with the Anti-Red Tape Act and as a testament of its officials' and employees' commitment to provide responsive, accessible, courteous and effective public service.
            </Text>
          </div>

          <div>
            <Text p="xs">
              The charter provides details such as requirements, steps, processing time, and fees (if applicable) of the various services offered by the university.
            </Text>
          </div>
          
          <div>
            <Text p="xs">
              Read the Citizen's Charter here:
            </Text>
          </div>

          <div style={{ width: "100%", height: "80vh", overflow: "hidden" }}>
            <iframe
              src={"https://www.plm.edu.ph/images/downloads/approved-plm-citizen's-charter-2019.pdf"}
              title={"PDF Viewer"}
              width="100%"
              style={{ border: "none", width: "80%", height: "100%", padding:"1.5rem 0 1.5rem 20rem" }}
            />
          </div>

          <div>
            <Text p="xs" fw={'bold'} fz={'1.5rem'}>
              Frequently Asked Questions (FAQs)
            </Text>
          </div>

          <div style={{ padding: "1rem" }}>
            <Accordions items={charterAccordion} />
          </div>

          <Divider />

          <div style={{paddingTop: "1.5rem"}}>
            <BusinessCard />
          </div>
        </div>
  );
}

export default CitizensCharter;
