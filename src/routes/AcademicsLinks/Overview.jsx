import React from "react";
import { Image, Text, Box, Divider } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { texts } from "./links";
import pic from "./Images/Overview.png";

function Overview({ selectedLink }) {
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
        {texts.map((text, index) => (
          <Text key={index} p="xs" ta="justify">
            {text.content}
          </Text>
        ))}
      </div>
    </Box>
  );
}

export default Overview;
