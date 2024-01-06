import React from "react";
import {
  Text,
  Divider,
  Box,
  List,
  Button,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

function Students() {
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
          INFORMATION FOR STUDENTS
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      
      <div style={{ padding: "1rem" }}>
        <Text>
          The students are the pride of Pamantasan ng Lungsod ng Maynila.
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
        <Text>
          Explore the menu on the left to learn more about the student life at PLM and what makes the PLM community warm and inviting.
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
        <Text size="1.25rem">
          Fast facts:
        </Text>
      </div>
      
      <div style={{ padding: "1rem" }}>
        <Text>
          6,636 students enrolled as of August 2019 where:
        </Text>
      </div>

      <div style={{ paddingLeft: "2rem"}}>
        <List>
          <List.Item>3,355 are first year students</List.Item>
          <List.Item>3,281 are second to fifth year students</List.Item>
        </List>
      </div>

      <div style={{ padding: "1rem" }}>
        <Text>
          PLM is the first tertiary institution to have a Filipino official name.
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
        <Text>
        PLM is the first and only local university created by a national law. It was created by Republic Act 4196 or "An Act Authorizing the City of Manila to Establish and Operate the University of City Manila" on June 19, 1965.
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
        <Text>
          The passage of R.A. 4196 falls on the same day as national hero Dr. Jose Rizal's birthday.
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
        <Text>
          PLM stands on historic grounds. On its site once stood the Universidad de San Ignacio (1590-1798), Universidad Maximo de San Ignacio, Colegio de San Jose, and Ateneo de Municipal de Manila (1865-1901).
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
        <Button
          radius="md"
          className="button"
          c="black"
          uppercase
          onClick={() => { window.location.href = "/students/crs"; } }
        >
          <Text>GO TO CRS</Text>
        </Button>
      </div>
    </Box>
  );
}

export default Students;
