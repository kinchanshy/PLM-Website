import React from "react";
import { Text, Divider, Space, Container } from "@mantine/core";
import Intro from "../../../components/Intro";
import Accordions from "../../../components/Accordions";
import Quotes from "../../../components/Quotes";
import BusinessCard from "../../../components/BusinessCard";
import { cedAccordion, cedBusinessCard, cedIntro, cedVM } from "../links";

function CED({ title }) {
  const more = title ? title.toUpperCase() : "";
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
          College of {title}
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      <Intro links={cedIntro} />
      <div style={{ padding: "1rem" }}>
        <Accordions items={cedAccordion} />
      </div>
      <Space h="lg" />
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Text fz="lg" fw="bold" p="lg">
          MORE ABOUT COLLEGE OF {more}
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Quotes links={cedVM} height="100vh" bg="#f7f7f7" />
      </div>
      <div>
        <BusinessCard {...cedBusinessCard} />
      </div>
    </Container>
  );
}

export default CED;
