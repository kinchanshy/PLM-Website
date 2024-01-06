import React from "react";
import { Divider, Space, Text } from "@mantine/core";
import Intro from "../../components/Intro";
import { intro, researchAccordion, researchTimeline } from "./links";
import Timelines from "../../components/Timelines";
import Accordions from "../../components/Accordions";

function Research() {
  return (
    <>
      <div>
        <Text size="1.5rem" fw="bold" p="xs">
          Research at Pamantasan ng Lungsod ng Maynila
        </Text>
        <Divider c="#eeee" size="md" />
      </div>
      <div>
        <Intro links={intro} />
        <Timelines items={researchTimeline} />
        <Space h="xl" />
        <Accordions items={researchAccordion} />
      </div>
    </>
  );
}

export default Research;
