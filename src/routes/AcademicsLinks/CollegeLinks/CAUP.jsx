import React, { useEffect } from "react";
import { Text, Box, Divider, Space, List, Grid } from "@mantine/core";
import CMSAccordion from "../../../components/Accordions";
import CMSTimeline from "../../../components/Timelines";
import CMSCard from "../../../components/Card";
import BusinessCard from "../../../components/BusinessCard";
import Introduction from "../../../components/Intro";
import pic from "../Images/crs.png";
import { timelineItems, accordionItems, CaupBusinessCardData } from "../links";
import { useNavigate } from "react-router-dom";

function CAUP({ selectedSublink }) {
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
      <div style={{ display: "flex" }}>
        <Introduction
          src={pic}
          content=" The College of Architecture and Urban Planning at PLM offers various
          degree programs, emphasizing design, theory, and practical skills to
          prepare students for careers in these fields. The college prioritizes
          creativity, sustainability, and innovative urban development."
        />
      </div>
      <div style={{ padding: "1rem" }}>
        <CMSAccordion items={accordionItems} />
      </div>
      <Space h="lg" />
      <div>
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
          columns={24}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid.Col span={11}>
            <CMSCard
              title="VISION"
              bgColor="color.2"
              height="60vh"
              content={
                <Text>
                  It will become a partner of choice as an active provider of
                  competent industry players in today's built-environment
                  market.
                </Text>
              }
            />
          </Grid.Col>
          <Grid.Col span={11}>
            <CMSCard
              title="MISSION"
              bgColor="color.2"
              height="60vh"
              content={
                <List type="ordered">
                  <List.Item>
                    <Text>
                      Transforming mindsets to highly competitive outlooks.
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      Create values mutually beneficial to students and the
                      institution by providing opportunities of borderless
                      cooperation.
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      Constant adherence to excellence in professionalism,
                      creativity, teamwork and leadership.
                    </Text>
                  </List.Item>
                </List>
              }
            />
          </Grid.Col>
        </Grid>
        <Space w="xl" />
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <CMSTimeline title="HISTORY" items={timelineItems} />
        </div>
        <div>
          <BusinessCard {...CaupBusinessCardData} />
        </div>
      </div>
    </Box>
  );
}

export default CAUP;
