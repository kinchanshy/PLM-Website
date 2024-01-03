import React from "react";
import { Text, Box, Divider } from "@mantine/core";

function Tuition() {
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
          TUITION AND OTHER FEES
        </Text>
      </div>
      <Divider c="#eeee" size="md" />

      <div>
        <Text fz="1.5rem" p="xs">
        We believe education is a great equalizer.
        </Text>
      </div>

      <div>
        <Text p="xs">
        For the undergraduate programs, PLM does not charge for courses, course materials, or annual enrollment so people, regardless of their financial status, can secure the education and future they deserve.
        </Text>
      </div>

      <div>
        <Text p="xs">
        The Philippine Government and the City Government of Manila pay for the education. They ask so little in return — serve the people and enable financially-challenged but deserving students like them to have quality education.
        </Text>
      </div>

    </Box>
  );
}

export default Tuition;
