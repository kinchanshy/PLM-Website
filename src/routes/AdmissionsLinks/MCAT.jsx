import React from "react";
import { Text, Divider, Button, Container } from "@mantine/core";
import { admissionBusinessCard, mcatAccordion } from "./links";
import BusinessCard from "../../components/BusinessCardAdmission";
import Accordions from "../../components/AccordionsAdmission";



function MCAT() {
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
          MEDICAL COLLEGE ADMISSION TEST (MCAT)
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      
      

        <div style={{ padding: "0rem 1rem 1rem 1rem" }}>
          <Text>
          The Pamantasan ng Lungsod ng Maynila (PLM) College of Medicine accepts applicants for the Medical College Admission Test (MCAT).
          </Text>
        </div>

        <div style={{ padding: "0rem 1rem 1rem 1rem" }}>
          <Text>
          The MCAT is a mandatory entrance exam for those who would like to pursue a medical degree at the PLM College of Medicine. It is a two-hour examination consisting of sub-tests in general information, academic evaluation, logical reasoning, and personality tests. It is administered at a test center.
          </Text>
        </div>

        <div style={{ padding: "0rem 1rem 1rem 1rem" }}>
          <Text>
          MCAT passers will be admitted to the PLM College of Medicine. It is a professional school committed to excellence in community-oriented medical education, training, research and service. It has repeatedly garnered a 100% passing rate in the Physician board exam. The Professional Regulation Commission named PLM College of Medicine as the top performing school in the November 2021 Physician Licensure Exam.
          </Text>
        </div>

        <div style={{ padding: "1rem" }}>
          <Button
            radius="md"
            className="button"
            c="black"
            uppercase
            onClick={() => { window.location.href = "https://web1.plm.edu.ph/crs/mcat/"; } }
          >
            <Text>APPLY ONLINE AT MCAT WEBSITE</Text>
          </Button>
        </div>

        <Divider c="#eeee" size="md" />

        <div style={{ padding: "1rem" }}>
          <Accordions items={mcatAccordion} />
        </div>

        <div>
          <BusinessCard {...admissionBusinessCard} />
        </div>
    </Container>
  );
}

export default MCAT;
