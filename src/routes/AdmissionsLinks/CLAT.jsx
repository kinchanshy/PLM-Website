import React from "react";
import { Text, Divider, Container } from "@mantine/core";
import { admissionBusinessCard, clatAccordion } from "./links";
import BusinessCard from "../../components/BusinessCardAdmission";
import Accordions from "../../components/AccordionsAdmission";



function CLAT() {
  return (
    <Container style={{ fontFamily: "Open Sans, sans serif" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Text size="1.5rem" fw="bold" p="xs">
          COLLEGE OF LAW ADMISSION TEST (CLAT)
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      
      

        <div style={{ padding: "0rem 1rem 1rem 1rem" }}>
          <Text>
          The College of Law Admission Test (CLAT) is a requirement for applicants of the Juris Doctor (J.D.) program of the PLM College of Law.
          </Text>
        </div>

        <Divider c="#eeee" size="md" />

        <div style={{ padding: "1rem" }}>
          <Accordions items={clatAccordion} />
        </div>

        <div>
          <BusinessCard {...admissionBusinessCard} />
        </div>
    </Container>
  );
}

export default CLAT;
