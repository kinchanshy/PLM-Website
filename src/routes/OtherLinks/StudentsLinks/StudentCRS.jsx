import React from "react";
import {
  Text,
  Box,
  Divider,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { crs } from "./links";
import Picture from "../../../components/Picture";

function StudentCRS() {
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
          COMPUTERIZED REGISTRATION SYSTEM
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      <div>
        <Text p="xs">
          Pamantasan ng Lungsod ng Maynila students may register online and
          access their student records using the links below:
        </Text>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
        }}
      >
        <Picture
          links={crs}
          maw={250}
          overlay="true"
          opacity={0.8}
          height="30svh"
          size="2rem"
        />
      </div>
    </Box>
  );
}

export default StudentCRS;
