import React from "react";
import { List, Text, Box, Divider, Grid } from "@mantine/core";

function StudentManual({ selectedLink }) {
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
        The PLM Revised Student Manual is a source of important information, including student responsibilities, obligations, and privileges. This revised version contains an updated list of academic policies and significant enhancement of other provisions relating to student discipline and student activities. These rules and regulations are designed to provide positive and constructive guidelines for student behavior and discipline, and are herein presented for ready reference.
        </Text>
      </div>

      <div>
        <Text p="xs">
        The University has initiated the revision of the 2012 Student Manual through the Student Manual Revision Committee. Existing policies and procedures were reviewed leading to the amendments/revisions of the same to address new issues and questions of the present time; revised regulations mostly on academic policies are herein corporated; henceforth, stringent implementation of the policies is to be constantly done because they are designed to create a level of consistency across the University.
        </Text>
      </div>

      <div>
        <Text p="xs">
        The basic purpose of policies and regulations, and the articulation of expected standards of student conduct is to further the mission of the University and to protect the well-being of the entire PLM community especially the students. These policies and regulations, referenced on the vision and mission of PLM, enable all the members of the University to function as a community and respond to situations accordingly. They are intended to ultimately help fulfill the goals of the University of academic excellence and social responsibility, while also furthering the core value of integrity, purposely embedded in the disciplinary policies of PLM.
        </Text>
      </div>

      <div>
        <Text p="xs">
        As the primary stakeholders of PLM, the students are the foremost consideration of the rules and regulations being implemented. Moreover, the University expands its horizons in terms of the services it offers essentially for the poor but deserving students of the City of Manila. This is because the University does not only respond to its mandate but most especially upholds the best welfare of the students.
        </Text>
      </div>
    </Box>
  );
}

export default StudentManual;
