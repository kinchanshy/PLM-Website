import React from "react";
import { Space, Text, Box, Divider, Button } from "@mantine/core";
import Introduction from "../../../components/Intro";
import CMSAccordion from "../../../components/Accordions";
import BusinessCard from "../../../components/BusinessCard";
import CustomTable from "../../../components/Tables";
import ExtraAccordion from "../../../components/ExtraAccordion";
import {
  CSAccordionItems,
  CSBusinessCardData,
  CScolumns,
  CSelements,
} from "../links";
import pic from "../Images/crs.png";
import { useNavigate } from "react-router-dom";

function CS({ selectedSublink }) {
  const navigate = useNavigate();

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
        content="The College of Science is one of the esteemed colleges of the university which has produced board topnotchers, leaders in the national and international levels. It used to be part of the College of Arts and Science, until the Board of Regents approved its 
proposed separation in 2002. By 2015, it offered the programs BS Psychology, MA Psychology, 
and MS in Mathematics Education."
        otherContent="It used to be part of the College of Arts and Science, until the Board of Regents approved its 
proposed separation in 2002. By 2015, it offered the programs BS Psychology, MA Psychology, 
and MS in Mathematics Education."
      />
      <div style={{ padding: "1rem", marginBottom: "-2rem" }}>
        <CMSAccordion items={CSAccordionItems} />
      </div>
      <div>
        <ExtraAccordion
          title="Outstanding Alumni"
          content="Graduates from the College of Science have made a name for themselves in their respective fields.
          Here are some of them:"
        >
          <CustomTable columns={CScolumns} data={CSelements} />
        </ExtraAccordion>
      </div>
      <div>
        <BusinessCard {...CSBusinessCardData} />
      </div>
    </Box>
  );
}

export default CS;
