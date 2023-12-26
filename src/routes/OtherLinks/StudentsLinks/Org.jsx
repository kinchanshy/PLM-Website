import React from "react";
import {
  Image,
  Text,
  SimpleGrid,
  Divider,
  Box,
  Container,
} from "@mantine/core";
import Introduction from "../../../components/Intro";
import { orgs } from "./links";
import { useNavigate } from "react-router-dom";

function Org({ selectedLink }) {
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
          {selectedLink}
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      <div>
        <Introduction
          otherContent=" PLM student organizations are groups of students who come together to share their interests, pursue their goals, and make a difference in the community. There are over 100 student organizations at PLM, covering a wide range of interests, including academics, arts and culture, community service, sports, and more."
        />
      </div>
      <Container p="lg">
        <SimpleGrid cols={3} p="lg">
          {orgs.map((orgs) => (
            <div key={orgs.name}>
              <Image maw={500} src={orgs.image} />
            </div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Org;
