import React from "react";
import { Text, Box, Divider, List } from "@mantine/core";


function NSTP({ selectedLink }) {
  //const title = selectedLink.toUpperCase();
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
        <Text p="xs">
        PLM students may choose from the three programs under the National Service Training Program (NSTP):
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
        <List >
          <List.Item>
            <Text>Civic Welfare Training Service (CWTS)</Text>
          </List.Item>
          <List.Item>
            <Text>Literacy Training Service (LTS)</Text>
          </List.Item>
          <List.Item>
            <Text>Reserve Officer Training Corps (ROTC)</Text>
          </List.Item>
        </List>
      </div>

      <div>
        <Text p="xs">
        Under the CWTS and LTS, students work with selected partner communities in XXX hours or more. The immersion for students is designed to help instill awareness in their role in nation-building.
        </Text>
      </div>

      <div>
        <Text p="xs">
        All universities and colleges are mandated by Republic Act 9163 to give NSTP.
        </Text>
      </div>
    </Box>
  );
}

export default NSTP;
