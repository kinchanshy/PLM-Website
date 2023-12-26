import React from "react";
import Picture from "../../components/Picture";
import { linksData, collegeIntro } from "./links";
import { Divider, SimpleGrid, Text } from "@mantine/core";
import Intro from "../../components/Intro";

function Colleges({ title }) {
  return (
    <div>
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
      <Intro links={collegeIntro} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
        }}
      >
        <Picture links={linksData} maw={250} height="45svh" color="#006699" />
      </div>
    </div>
  );
}

export default Colleges;
