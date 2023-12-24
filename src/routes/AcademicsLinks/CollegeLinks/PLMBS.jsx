import React from "react";
import { Text, Box, Divider, Space, Grid } from "@mantine/core";
import Introduction from "../../../components/Intro";
import CMSAccordion from "../../../components/Accordions";
import CMSCard from "../../../components/Card";
import CMSTimeline from "../../../components/Timelines";
import BusinessCard from "../../../components/BusinessCard";
import pic from "../Images/crs.png";
import {
  PLMBSAccordionItems,
  PLMBStimelineItems,
  PLMBSBusinessCardData,
} from "../links";
import { useNavigate } from "react-router-dom";

function PLMBS({ selectedSublink }) {
  const navigate = useNavigate();
  //const title = selectedSublink.toUpperCase();

  return (
    <Box style={{ fontFamily: "Open Sans, sans serif" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Text size="1.5rem" fw="bold" p="xs">
          {selectedSublink}
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      <Introduction
        src={pic}
        content="The PLM Business School offers undergraduate and post-graduate programs that aim to make students able professionals and managers both in the private and public sector."
      />
      <div style={{ padding: "1rem" }}>
        <CMSAccordion items={PLMBSAccordionItems} />
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
          MORE ABOUT {title}
        </Text>
      </div>
      <Grid
        columns={20}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid.Col span={9}>
          <CMSCard
            title="VISION"
            bgColor="color.2"
            height="50vh"
            content={
              <Text>
                To be a globally recognized hub of excellence in business
                education, fostering innovation, leadership, and ethical
                business practices.
              </Text>
            }
          />
        </Grid.Col>
        <Space w="xl" />
        <Grid.Col span={9}>
          <CMSCard
            title="MISSION"
            bgColor="color.2"
            height="50vh"
            content={
              <Text>
                Our mission is to provide a transformative and holistic business
                education, empowering students to excel in the dynamic world of
                commerce, while promoting sustainable business practices and
                contributing to the betterment of society.
              </Text>
            }
          />
        </Grid.Col>
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <CMSTimeline title="HISTORY" items={PLMBStimelineItems} />
      </div>
      <div>
        <BusinessCard {...PLMBSBusinessCardData} />
      </div>
    </Box>
  );
}

export default PLMBS;
