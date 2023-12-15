import { Button, Container, Image, Text } from "@mantine/core";
import topview from "../../assets/topview.png";
import { useNavigate } from "react-router-dom";
import React from "react";

function HomeArchive() {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#fff", zIndex: "1" }}>
      <Container p="xl" size="xl" className="archive-container">
        <div className="archive-content">
          <Text fz="2rem" fw="bold" ta="center">
            Looking for more info?
          </Text>
          <Button
            className="archive-button"
            onClick={() => {
              navigate("/archive");
            }}
            radius="md"
          >
            <Text p="lg"> Check our archive here</Text>
          </Button>
        </div>
        <Image maw={600} radius="md" src={topview} />
      </Container>
    </div>
  );
}

export default HomeArchive;
