import React from "react";
import { Space, Text, Box, Divider, Grid, List } from "@mantine/core";
import Introduction from "../../../components/Intro";
import CMSAccordion from "../../../components/Accordions";
import CMSCard from "../../../components/Card";
import BusinessCard from "../../../components/BusinessCard";
import { CEDAccordionItems, CEDBusinessCardData } from "../links";
import pic from "../Images/crs.png";
import { useNavigate } from "react-router-dom";

function CED({ selectedSublink }) {
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
          College of {selectedSublink}
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      <Introduction
        src={pic}
        content="The College of Education was formed out of reorganization and merging of colleges that were approved by the Board of Regents on June 4, 2015. It aspires to be one of the country's centers of excellence in Teacher Education. It is committed to produce globally empowered quality graduates who are proactive and catalysts of social transformation."
      />
      <div style={{ padding: "1rem" }}>
        <CMSAccordion items={CEDAccordionItems} />
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
            height="80vh"
            content={
              <Text
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                To be a leading institution of education and pedagogical
                innovation, dedicated to shaping future educators, promoting
                educational equity, and advancing the field of education through
                research and community engagement.
              </Text>
            }
          />
        </Grid.Col>
        <Space w="xl" />
        <Grid.Col span={11}>
          <CMSCard
            title="MISSION"
            bgColor="color.2"
            height="80vh"
            content={
              <List type="ordered">
                <List.Item>
                  <Text>
                    Gain recognition as an excellent pre-service
                    teacher-training institution;
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Ensure a consistently higher than national average
                    performance on the Licensure Examination for Teachers (LET);
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Provide students with effective and relevant instruction
                    that will equip them with skills required of educational
                    institution here and abroad;
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Contribute to research efforts that will help improve the
                    overall quality of education in the country;
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Imbibe a culture of excellence, integrity and
                    responsibility.
                  </Text>
                </List.Item>
              </List>
            }
          />
        </Grid.Col>
      </Grid>
      <div>
        <BusinessCard {...CEDBusinessCardData} />
      </div>
    </Box>
  );
}

export default CED;
