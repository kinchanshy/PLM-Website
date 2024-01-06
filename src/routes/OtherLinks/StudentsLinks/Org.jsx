import React from "react";
import {
  Image,
  Text,
  SimpleGrid,
  Divider,
  Box,
  Container,
  Card,
  Overlay,
} from "@mantine/core";
import { orgs } from "./links";
import { useNavigate } from "react-router-dom";

function Org({
  maw,
  height,
  color,
  opacity,
  size,
  overlay = false,
}) {
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
          STUDENT ORGANIZATION
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      <div>
        <Text p="xs">
        PLM student organizations are groups of students who come together to share their interests, pursue their goals, and make a difference in the community. There are over 100 student organizations at PLM, covering a wide range of interests, including academics, arts and culture, community service, sports, and more.
        </Text>
      </div>
      <Container p="lg">
        <SimpleGrid cols={3} p="lg">
          {orgs.map((orgs) => (
            <div key={orgs.name}>
              <Card
                key={orgs.name}
                shadow="lg"
                maw={maw}
                radius="md"
                padding="sm"
                withBorder
                h={height}
              >
                <Card.Section style={{ position: "relative" }}>
                  <Image src={orgs.image} />
                  {overlay && (
                    <Overlay
                      color="#fff"
                      backgroundOpacity={opacity}
                      style={{ zIndex: "1" }}
                    />
                  )}
                </Card.Section>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <Text fw={600} size="md" mt="sm" ta="center" c={color}>
                    {orgs.name}
                  </Text>
                </div>
              </Card>
            </div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Org;
