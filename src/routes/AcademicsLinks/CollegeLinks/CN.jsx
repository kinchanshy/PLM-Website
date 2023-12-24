import React from "react";
import { Space, Text, Box, Divider, Grid } from "@mantine/core";
import Introduction from "../../../components/Intro";
import CMSTimeline from "../../../components/Timelines";
import BusinessCard from "../../../components/BusinessCard";
import CMSCard from "../../../components/Card";
import { CNtimelineItems, CNBusinessCardData } from "../links";
import pic from "../Images/crs.png";
import { useNavigate } from "react-router-dom";

function CN({ selectedSublink }) {
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
        content="The College of Nursing program provides an intensive nursing practicum that will refine further the nursing competencies to ensure achievement of the Nursing program outcomes required of an entry level. The College of Nursing program aims to develop a professional nurse who is able to assume entry level positions in health facilities or community settings."
        otherContent="It also offers masters' of nursing program which prepares individuals for careers in health care setting through advanced education in specific areas of expertise and to expand their career options. Program's course content and practicum component will provide them with the knowledge and skills necessary to successfully perform the varied managerial role functions which today's organization requires of health care practitioners and will empower them to serve as influential leaders in the design and operation of 21st century health care delivery systems."
      />
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
                  A leader in nursing education in the ASEAN region producing
                  globally competitive nurses with excellence, integrity and
                  social responsibility
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
                  To be recognized by Philippines and ASEAN Academic accrediting
                  agencies as premier nursing school known for its quality
                  education, research and extension service
                </Text>
                <Space h="lg" />
                <Text>
                  To produce nurse leaders in the fields of clinical practice,
                  research, academe and entrepreneurship with a competitive
                  advantage for employment opportunitiesCore Values
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
        <CMSTimeline title="HISTORY" items={CNtimelineItems} />
      </div>
      <div>
        <BusinessCard {...CNBusinessCardData} />
      </div>
    </Box>
  );
}

export default CN;
