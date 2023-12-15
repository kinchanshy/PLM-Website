import React from "react";
import { SimpleGrid, Container, Text, Divider } from "@mantine/core";
import { HomeCard, PressCard } from "../Cards";
import CardHolder from "../CardHolder";

function HomeNews() {
  return (
    <div>
      <SimpleGrid
        cols={2}
        p="lg"
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Open Sans, sans-serif",
        }}
      >
        <Container>
          <div>
            <Text p="lg" fz="lg" fw="bold">
              ANNOUNCEMENTS
            </Text>
            <Divider
              color="#FFC60B"
              size="lg"
              p="lg"
              style={{ marginRight: "1rem", marginLeft: "1rem" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <CardHolder links={HomeCard} />
            <CardHolder links={HomeCard} />
          </div>
        </Container>
        <div>
          <div>
            <Text p="lg" fz="lg" fw="bold">
              PRESS RELEASES
            </Text>
            <Divider
              color="#FFC60B"
              size="lg"
              p="lg"
              style={{ marginRight: "1rem", marginLeft: "1rem" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <CardHolder links={PressCard} />
            <CardHolder links={PressCard} />
          </div>
        </div>
      </SimpleGrid>
    </div>
  );
}

export default HomeNews;
