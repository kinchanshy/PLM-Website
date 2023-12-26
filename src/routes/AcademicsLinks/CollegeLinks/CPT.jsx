import React from "react"
import { Space, Text, Box, Divider, Grid } from "@mantine/core";
import Introduction from "../../../components/Intro";
import CMSAccordion from "../../../components/Accordions";
import CMSCard from "../../../components/Card";
import CMSTimeline from "../../../components/Timelines";
import BusinessCard from "../../../components/BusinessCard";
import CustomTable from "../../../components/Tables";
import ExtraAccordion from "../../../components/ExtraAccordion";
import {
  CPTAccordionItems,
  CPTtimelineItems,
  CPTBusinessCardData,
  columns,
  elements,
} from "../links";
import pic from "../Images/crs.png";
import { useNavigate } from "react-router-dom";

function CPT({ selectedSublink }) {
  const navigate = useNavigate();
  const title = selectedSublink.toUpperCase();
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
          College of {selectedSublink}
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      <Introduction
        src={pic}
        content="The college is proud of the quality of its faculty members who possess extensive clinical experience and educational background in their specialization. They bring insights from theory, practice, and research to help shape the careers of all our students."
      />
      <div style={{ padding: "1rem" }}>
        <CMSAccordion items={CPTAccordionItems} />
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
          MORE ABOUT COLLEGE OF {title}
        </Text>
      </div>
      <Grid
        columns={40}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid.Col span={19}>
          <CMSCard
            title="VISION"
            bgColor="color.2"
            height="70vh"
            content={
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Text ta="start">
                  To be a pioneering institution in physical therapy education,
                  setting global standards for excellence, innovation, and
                  compassionate care.
                </Text>
              </div>
            }
          />
        </Grid.Col>
        <Grid.Col span={19}>
          <CMSCard
            title="MISSION"
            bgColor="color.2"
            height="70vh"
            content={
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Text>
                  To educate and empower future physical therapists, enhancing
                  well-being and mobility while advancing the field through
                  research and community service.
                </Text>
              </div>
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
        <CMSTimeline title="HISTORY" items={CPTtimelineItems} />
      </div>
      <div>
        <ExtraAccordion
          title="Board Examination Performance"
          content="The college has repeatedly garnered a 100% or above the national passing rate in the Physical Therapist board exam, producing two to multiple topnotchers per exam."
        >
          <CustomTable columns={columns} data={elements} />
        </ExtraAccordion>
      </div>
      <div>
        <BusinessCard {...CPTBusinessCardData} />
      </div>
    </Box>
  );
}

export default CPT;
