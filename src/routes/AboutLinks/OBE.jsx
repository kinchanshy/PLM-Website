import React from "react";
import { Image, Text, Box, Divider } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import DownloadButton from "../../components/DownloadButton";
import { texts } from "./links";
import pic from "./Images/UnivProfile.png";

function OBE({ selectedLink }) {
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
        <Image maw={1000} src={pic} p="md" />
      </div>
      <div></div>
    </Box>
  );
}

export default OBE;
