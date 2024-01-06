import React from "react";
import { Text, Box, Divider, List } from "@mantine/core";


function AcadThrusts({ title }) {
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
          {title}
        </Text>
      </div>
      <Divider c="#eeee" size="md" />

      <div>
        <Text p="xs">
        PLM strives to fulfill the following to ensure that its students, faculty, and staff are among the best, 
brightest, and most compassionate:
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
        <List type="ordered">
          <List.Item>
            <Text>Education is a right and an equalizer</Text>
          </List.Item>
          <List.Item>
            <Text>Quality education upheld</Text>
          </List.Item>
          <List.Item>
            <Text>Catalyst and resource for good governance</Text>
          </List.Item>
          <List.Item>
            <Text>Mobilizing resources efficiently</Text>
          </List.Item>
          <List.Item>
            <Text>Keeping academic freedom, creative thinking, and collective action alive</Text>
          </List.Item>
          <List.Item>
            <Text>Continuous faculty and staff development</Text>
          </List.Item>
        </List>
      </div>
    </Box>
  );
}

export default AcadThrusts;
