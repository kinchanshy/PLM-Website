import React from "react";
import { Accordion, Text } from "@mantine/core";

function ExtraAccordion({ title, content, children }) {
  return (
    <Accordion variant="default" p="md">
      <Accordion.Item value={title}>
        <Accordion.Control>
          <Text fw="bold">{title}</Text>
        </Accordion.Control>
        <Accordion.Panel style={{ display: "flex", flexDirection: "column" }}>
          <Text p="md" ta="justify">
            {content}
          </Text>
          {children}
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
export default ExtraAccordion;
