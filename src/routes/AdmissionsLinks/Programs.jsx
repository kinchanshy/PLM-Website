import React from "react";
import { Text, Divider, Container } from "@mantine/core";
import { admissionBusinessCard, programsAccordion } from "./links";
import BusinessCard from "../../components/BusinessCardAdmission";
import Accordions from "../../components/Accordions";



function Programs() {
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
          UNDERGRADUATE PROGRAMS
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      
      

        <div style={{ padding: "0rem 1rem 1rem 1rem" }}>
          <Text>
          These undergraduate programs at Pamantasan ng Lungsod ng Maynila provide a diverse range of academic opportunities, equipping students with the knowledge and skills needed to excel in their chosen fields.
          </Text>
        </div>

        <Divider c="#eeee" size="md" />

        <div style={{ padding: "1rem" }}>
          <Accordions items={programsAccordion} />
        </div>

        <div>
          <BusinessCard {...admissionBusinessCard} />
        </div>
    </Container>
  );
}

export default Programs;
