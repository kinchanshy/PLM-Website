import React from "react";
import { Text, Divider, Space, Container } from "@mantine/core";
import Intro from "../../../components/Intro";
import Quotes from "../../../components/Quotes";
import Timelines from "../../../components/Timelines";
import BusinessCard from "../../../components/BusinessCard";
import { cnIntro, cnBusinessCard, cnVM, cnTimeline } from "../links";

function CN({ title }) {
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
      <Intro links={cnIntro} />
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
        <Quotes links={cnVM} height="70vh" bg="#f7f7f7" />
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
        <Timelines items={cnTimeline} />
      </div>
      <div>
        <BusinessCard {...cnBusinessCard} />
      </div>
    </Container>
  );
}

export default CN;
