import React from "react";
import { Text, Divider, Space, Container } from "@mantine/core";
import Intro from "../../../components/Intro";
import Accordions from "../../../components/Accordions";
import Quotes from "../../../components/Quotes";
import Timelines from "../../../components/Timelines";
import BusinessCard from "../../../components/BusinessCard";
import {
  plmbsIntro,
  plmbsAccordion,
  plmbsVM,
  plmbsTimeline,
  plmbsBusinessCard,
} from "../links";

function PLMBS({ title }) {
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
          {title}
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      <Intro links={plmbsIntro} />
      <div style={{ padding: "1rem" }}>
        <Accordions items={plmbsAccordion} />
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
          MORE ABOUT {more}
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Quotes links={plmbsVM} height="60vh" bg="#f7f7f7" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <Timelines items={plmbsTimeline} />
      </div>
      <div>
        <BusinessCard {...plmbsBusinessCard} />
      </div>
    </Container>
  );
}

export default PLMBS;
