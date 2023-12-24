import React from "react";
import {
  Image,
  Text,
  SimpleGrid,
  Divider,
  Box,
  Container,
} from "@mantine/core";
import Introduction from "../../components/Intro";
import { colleges } from "./links";
import { useNavigate } from "react-router-dom";

function Colleges({ selectedLink }) {
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
          title="Quality Education meets Compassion"
          otherContent=" Whether you choose to do in the corporate work, non-government or
          government work or anything in between, you're guaranteed to possess
          both the technical skills and compassion that truly sets PLM graduates
          apart from the rest."
        />
      </div>
      <Container p="lg">
        <SimpleGrid cols={3} p="lg">
          {colleges.map((college) => (
            <div key={college.name}>
              <Image maw={500} src={college.image} />
            </div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Colleges;
