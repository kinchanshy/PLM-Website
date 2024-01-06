import React from "react";
import { Image, Text, Box, Divider } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import DownloadButton from "../../components/DownloadButton";
import { texts } from "./links";
import OBE1 from "./Images/OBE1.jpg";
import OBE2 from "./Images/OBE2.jpg";

function OBE() {
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
        Outcomes-Based Education (OBE)
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      <div>
        <Image maw={1000} src={OBE1} p="md" />
      </div>
      <div>
        <div>
          <Image maw={1000} src={OBE2} p="md" />
        </div>
      </div>
    </Box>
  );
}

export default OBE;
