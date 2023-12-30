import React from "react";
import { Text, Divider, Container } from "@mantine/core";
import Intro from "../../../components/Intro";
import Accordions from "../../../components/Accordions";
import BusinessCard from "../../../components/BusinessCard";
import { sgAccordion, sgBusinessCard, sgIntro } from "../links";

function SG({ title }) {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Text size="1.5rem" fw="bold" p="xs">
          {title}
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      <Intro links={sgIntro} />
      <div style={{ padding: "1rem" }}>
        <Accordions items={sgAccordion} />
      </div>
      <div>
        <BusinessCard {...sgBusinessCard} />
      </div>
    </Container>
  );
}

export default SG;
