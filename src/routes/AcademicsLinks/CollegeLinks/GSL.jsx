import React from "react";
import { Image, Text, Box, Divider, Space } from "@mantine/core";
import Introduction from "../../../components/Intro";
import CMSAccordion from "../../../components/Accordions";
import BusinessCard from "../../../components/BusinessCard";
import { GSLAccordionItems, GSLBusinessCardData } from "../links";
import pic from "../Images/crs.png";
import { useNavigate } from "react-router-dom";

function GSL({ selectedSublink }) {
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
        content="On July 7, 2004, the Graduate School of Law was formally launched as the second graduate school of school of law in the Philippines. On July 29, 2004, the Board of Regents by virtue of BOR Resolution No. 2686 approved the offering of the graduate program of Master of Laws."
        otherContent={[
          "The PLM's Graduate School of Law provides legal education to lawyers and non-lawyers who have obtained their first law degree in any college or university in the country offering either a Bachelor of Laws or Juris Doctor program. It aims to attract in its fold both lawyers and non-lawyers, including judges, prosecutors, practitioners, and those employed in the government and private service.",

          "The institute is on a three-term academic calendar. Applying to the program involves the completion of an application form and the submission of the required documents. Enrollment in the program provides many opportunities for students to work closely with distinguished professors who are experts in domestic and international fields.",

          "The Graduate School of Law aims to (1) develop intellectual expertise in law and jurisprudence among lawyers; (2) assist in improving public service by stressing the lawyers' mission of upholding justice and truth; (3) elevating the standards of the legal profession; and (4) enhancing the administration of justice for the welfare of the Filipino people, especially the marginalized.",
        ]}
      />
      <div style={{ padding: "1rem" }}>
        <CMSAccordion items={GSLAccordionItems} />
      </div>
      <div>
        <BusinessCard {...GSLBusinessCardData} />
      </div>
    </Box>
  );
}

export default GSL;
