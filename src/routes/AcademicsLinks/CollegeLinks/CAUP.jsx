import React from "react";
import { Text, Divider, Space, Container } from "@mantine/core";
import Intro from "../../../components/Intro";
import Accordions from "../../../components/Accordions";
import Quotes from "../../../components/Quotes";
import Timelines from "../../../components/Timelines";
import BusinessCard from "../../../components/BusinessCard";
import {
  caupIntro,
  caupAccordion,
  caupTimeline,
  caupVM,
  caupBusinessCard,
} from "../links";

function CAUP({ title }) {
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
      <div style={{ display: "flex" }}>
        <Intro links={caupIntro} />
      </div>
      <div style={{ padding: "1rem" }}>
        <Accordions items={caupAccordion} />
      </div>
      <Space h="lg" />
      <>
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
          <Quotes links={caupVM} height="70vh" bg="#F7F7F7" />
        </div>
        <Space w="xl" />
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <Timelines items={caupTimeline} />
        </div>
        <div>
          <BusinessCard {...caupBusinessCard} />
        </div>
      </>
    </Container>
  );
}

export default CAUP;
