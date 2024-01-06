import React from "react";
import { Text, Divider, Button, Container } from "@mantine/core";
import { admissionBusinessCard, plmatAccordion } from "./links";
import BusinessCard from "../../components/BusinessCardAdmission";
import Accordions from "../../components/AccordionsAdmission";



function PLMAT() {
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
          PLM ADMISSION TEST
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      
      

        <div style={{ padding: "0rem 1rem 1rem 1rem" }}>
          <Text>
            Those who would like to study at Pamantasan ng Lungsod ng Maynila must apply for the Pamantasan ng Lungsod ng Maynila Admission Test (PLMAT).
          </Text>
        </div>

        <div style={{ padding: "0rem 1rem 1rem 1rem" }}>
          <Text>
            For Academic Year (AY) 2023-2024, in lieu of PLMAT, applicants will be evaluated using the PLM Admission Ranking.
          </Text>
        </div>

        <div style={{ padding: "1rem" }}>
          <Button
            radius="md"
            className="button"
            c="black"
            uppercase
            onClick={() => { window.location.href = "https://www.plm.edu.ph/admissions/plmat"; } }
          >
            <Text>APPLY ONLINE AT PLMAT WEBSITE</Text>
          </Button>
        </div>

        <Divider c="#eeee" size="md" />

        <div style={{ padding: "1rem" }}>
          <Accordions items={plmatAccordion} />
        </div>

        <div>
          <BusinessCard {...admissionBusinessCard} />
        </div>
    </Container>
  );
}

export default PLMAT;
