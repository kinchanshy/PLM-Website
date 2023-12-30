import React from "react";
import { Text, Divider, Container } from "@mantine/core";
import Intro from "../../../components/Intro";
import Accordions from "../../../components/Accordions";
import BusinessCard from "../../../components/BusinessCard";
import { clAccordion, clBusinessCard, clIntro } from "../links";

function CL({ title }) {
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
      <Intro links={clIntro} />
      <div style={{ padding: "1rem" }}>
        <Accordions items={clAccordion} />
      </div>
      <div>
        <BusinessCard {...clBusinessCard} />
      </div>
    </Container>
  );
}

export default CL;
