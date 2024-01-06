import React from "react";
import { Text, Box, Divider } from "@mantine/core";

function Services() {;
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
          STUDENT SERVICES
        </Text>
      </div>
      <Divider c="#eeee" size="md" />

      <div>
        <Text p="xs">
        As a caring university, PLM provides a myriad of scholarly services to support the scholars in their academic, non-academic and research pursuits. Most services, which are common among various universities or colleges, have been institutionalized since time immemorial
        </Text>
      </div>

      <div>
        <Text p="xs">
        Other well-meaning student services have been developed over the long years of PLM's existence. Yet, a few others were recent additions as among the overarching "Benefits Enhancement Program", the same having covered the faculty, staff and scholars, as well as alumni and other important stakeholders. These are innovative undertakings that are patterned along the benefits accorded by Ivy League universities, most of which are IT-based and the premium of which is pertinent to the enhancement of the competitiveness of the Pamantasan scholars in the industry and worldwide community.
        </Text>
      </div>

      <div>
        <Text p="xs">
        Taking primacy and the highest precedence among the benefits of the PLM scholars is the scholarship program, either on full-scholarship or a highly-subsidized scholarship. This is the hallmark of PLM education which served as the "PLM phenomenon" that goaded other local government units to replicate such a noble purpose.
        </Text>
      </div>

    </Box>
  );
}

export default Services;
