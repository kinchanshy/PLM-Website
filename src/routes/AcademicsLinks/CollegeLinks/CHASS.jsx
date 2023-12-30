import React from "react";
import { Text, Divider, Space, Container, List } from "@mantine/core";
import Intro from "../../../components/Intro";
import Accordions from "../../../components/Accordions";
import BusinessCard from "../../../components/BusinessCard";
import { chassAccordion, chassBusinessCard, chassIntro } from "../links";

function CHASS({ title }) {
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
      <Intro links={chassIntro} />
      <div style={{ padding: "1rem" }}>
        <Accordions items={chassAccordion} />
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
      <div>
        <Text fz="lg" p="sm" fw="bold">
          Departments
        </Text>
        <Text p="sm">
          The college has four (4) departments and one office handling the
          graduate course:
        </Text>
        <List p="sm">
          <List.Item>
            <Text>Department of Languages and Literature</Text>
          </List.Item>
          <List.Item>
            <Text>Department of Social Sciences and Humanities</Text>
          </List.Item>
          <List.Item>
            <Text>Department of Mass Communication</Text>
          </List.Item>
          <List.Item>
            <Text>Department of Social Work</Text>
          </List.Item>
          <List.Item>
            <Text>Communication Management Graduate School Program</Text>
          </List.Item>
        </List>
        <Text p="xs" ta="justify">
          The Departments of Languages and Literature, and Social Sciences and
          Humanities handle the New General Education Program, following the
          Department of Education's K-12 Basic Education Curriculum.
        </Text>
      </div>
      <div>
        <BusinessCard {...chassBusinessCard} />
      </div>
    </Container>
  );
}

export default CHASS;
