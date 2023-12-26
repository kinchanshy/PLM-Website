import React from "react";
import { Space, Text, Box, Divider, List } from "@mantine/core";
import Introduction from "../../../components/Intro";
import CMSAccordion from "../../../components/Accordions";
import BusinessCard from "../../../components/BusinessCard";
import { CHASSAccordionItems, CHASSBusinessCardData } from "../links";
import pic from "../Images/crs.png";
import { useNavigate } from "react-router-dom";

function CHASS({ selectedSublink }) {
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
        content="The College of Humanities, Arts, and Social Sciences (CHASS) emerged through the reorganization/merging of the College of Liberal Arts (CLA) and the College of Mass Communication (CMC), as recommended by the PLM University Council and approved by the Board of Regents on the latter's special meeting on June 4, 2015."
        otherContent="By virtue of the reorganization, the Bachelor of Science in Social Work from the College of Human Development (CHD) and the Master of Arts in Communication Management from the Graduate School of Arts, Science, and Education (GSASE) also became part of CHASS. The merging was also based on the vertical articulation prescribed by the Commission on Higher Education’s Education Reform Agenda."
      />
      <div style={{ padding: "1rem" }}>
        <CMSAccordion items={CHASSAccordionItems} />
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
        <BusinessCard {...CHASSBusinessCardData} />
      </div>
    </Box>
  );
}

export default CHASS;
