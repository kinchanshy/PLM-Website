import React from "react";
import { Text, Button, Container } from "@mantine/core";
import { IconHandClick } from "@tabler/icons-react";

function HomeText({ Program, Explore }) {
  return (
    <div>
      <div style={{ alignItems: "center" }}>
        <Container id="myContainer" style={{ marginLeft: "-0.5rem" }}>
          <Text
            fz="4rem"
            fw="bold"
            p="3rem"
            c="#fff"
            style={{
              fontFamily: "Open Sans, sans-serif",
              marginBottom: "-5rem",
            }}
          >
            Study at Pamantasan ng Lungsod ng Maynila
          </Text>
          <Text
            fz="1.9rem"
            p="3rem"
            c="#fff"
            style={{
              fontFamily: "Open Sans, sans-serif",
              marginBottom: "-2rem",
            }}
          >
            The Philippines' first and only chartered autonomous local
            university.
          </Text>
          <div style={{ display: "flex", gap: "2rem" }}>
            <div style={{ paddingLeft: "3rem" }}>
              <Button
                radius="lg"
                style={{ backgroundColor: "#d5a106", zIndex: "0" }}
                onClick={Program}
              >
                <Text fz="lg" fw="bold" c="#010101">
                  CHECK OUR PROGRAM
                </Text>
              </Button>
            </div>
            {/* Explore more button to quickly scroll the page on the contents */}
            <div
              style={{
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Button
                c="#022f76"
                radius="lg"
                rightSection={<IconHandClick size="1.5rem" />}
                onClick={Explore}
                style={{ backgroundColor: "#f9f8f8" }}
              >
                <Text fw="bold" fz="lg">
                  EXPLORE MORE
                </Text>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default HomeText;
