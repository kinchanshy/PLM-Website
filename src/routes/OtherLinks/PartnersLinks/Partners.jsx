import React, { useState, useRef, useEffect } from "react";
import { Text, Divider, Container } from "@mantine/core";
import BusinessCard from "../../../components/BusinessCard";
import { partnersBusinessCard } from "./links";

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

  return (
    <Container size="xl">
      <div style={{ padding: "1.5rem 0 1.5rem 0" }}>
        <Text p="xs" fw={"bold"} fz={"1.5rem"}>
          PARTNERS
        </Text>
      </div>

      <Divider />

      <div style={{ padding: "1.5rem 0 1.5rem 0" }}>
        <Text p="xs">
          PLM works with partners that share our vision of making
          service-oriented, quality education a standard in learning.
        </Text>
      </div>

      <div>
        <Text p="xs" fw={"bold"} fz={"1.25rem"}>
          Scholarship Providers
        </Text>
      </div>

      <div style={{ padding: "1.5rem 0 1.5rem 0" }}>
        <Text p="xs">
          PLM partners with foundations and generous individuals to provide poor
          but deserving students the fighting chance that they deserve.
          Depending on the partners, scholars receive monthly stipends, book
          allowance, and even a year-end bonus.
        </Text>
      </div>

      <div style={{ padding: "1.5rem 0 1.5rem 0" }}>
        <Text p="xs">
          Read more about our <a href="/admissions/scholarship-and-financial-aid" style={{textDecoration: "none"}}>scholarship providers here.</a>
        </Text>
      </div>

      <div style={{ padding: "1.5rem 0 1.5rem 0" }}>
        <Text p="xs">
          Organizations or individuals interested to provide scholarship to PLM
          students may contact the Office of Public Affairs (OPA). Inquiries and
          letters of intent may be addressed to:
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
        <BusinessCard {...partnersBusinessCard} />
      </div>
    </Container>
  );
}

export default Partners;
