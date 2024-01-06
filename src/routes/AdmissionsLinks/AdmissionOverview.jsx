import React from "react";
import { Container, Text, Divider, Space } from "@mantine/core";
import Intro from "../../components/Intro";
import { admissionIntro } from "./links";

function AdmissionOverview({ title }) {
  return (
    <div>
      <Text size="1.5rem" fw="bold" p="xs">
        {title}
      </Text>
      <Divider c="#eeee" size="md" />
      <Space h="md" />
      <div style={{ backgroundColor: "#602D92", borderRadius: "0.5rem" }}>
        <Container p="sm">
          <Intro links={admissionIntro} desColor="#fff" />
        </Container>
      </div>
    </div>
  );
}

export default AdmissionOverview;
