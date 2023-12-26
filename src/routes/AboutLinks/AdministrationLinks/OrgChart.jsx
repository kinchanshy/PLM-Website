import React from "react";
import { Image, Text, Box, Divider, Grid, List } from "@mantine/core";
import plmorg from "../Images/orgchart.jpg";

function OrgChart({ selectedSublink }) {
  //const title = selectedSublink.toUpperCase();
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
          {selectedSublink}
        </Text>
      </div>
      <Divider c="#eeee" size="md" />

      <div>
      <Image src={plmorg} p="md" />
      </div>
    </Box>
  );
}

export default OrgChart;
