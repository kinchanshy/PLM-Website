import React from "react";
import { Image, Text, Box, Divider, Button } from "@mantine/core";
import Introduction from "../../../components/Intro";
import CMSAccordion from "../../../components/Accordions";
import BusinessCard from "../../../components/BusinessCard";
import { CLAccordionItems, CLBusinessCardData } from "../links";
import pic from "../Images/crs.png";
import { useNavigate } from "react-router-dom";

function CL({ selectedSublink }) {
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
        content="The College of Law is among the the top 10 law schools based on the 2018 bar examination. It received a 51.61% passing rate in 2018 bar exams, which is higher than the 22.07% national passing rate."
        otherContent={
          "The PLM's Graduate School of Law provides legal education to lawyers and non-lawyers who have obtained their first law degree in any college or university in the country offering either a Bachelor of Laws or Juris Doctor program. It aims to attract in its fold both lawyers and non-lawyers, including judges, prosecutors, practitioners, and those employed in the government and private service."
        }
      />
      <div style={{ padding: "1rem" }}>
        <CMSAccordion items={CLAccordionItems} />
      </div>
      <div>
        <BusinessCard {...CLBusinessCardData} />
      </div>
    </Box>
  );
}

export default CL;
