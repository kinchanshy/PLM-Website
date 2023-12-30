import React from "react";
import { Text, ActionIcon, Paper, SimpleGrid, Space } from "@mantine/core";
import {
  IconMinus,
  IconMapPin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

function BusinessCard({
  collegeName,
  deanName,
  deanTitle,
  contactInfo: { text, location, email, phone },
}) {
  return (
    <div style={{ padding: "1rem" }}>
      <Paper radius="md" shadow="md" p="lg" bg="#f7f7f7">
        <SimpleGrid cols={2}>
          <div>
            <Text fz="xl" fw="bold">
              {collegeName}
            </Text>
            <Text fw="bold">{deanName}</Text>
            <Text fz="xs" c="dimmed">
              {deanTitle}
            </Text>
          </div>
          <div>
            <div style={{ display: "flex" }}>
              <ActionIcon c="#A31920" variant="subtle">
                <IconMinus size="1.125rem" />
              </ActionIcon>
              <Space w="xs" />
              <Text fz="lg" fw="bold">
                GET IN TOUCH
              </Text>
            </div>
            <div>
              <Text fz="lg" fw="bold" p="sm">
                {text}
              </Text>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <ActionIcon c="#A31920" variant="subtle">
                  <IconMapPin size="1.125rem" />
                </ActionIcon>
              </div>
              <Space w="xs" />
              <div>
                <Text>{location.title}</Text>
                <Text c="dimmed">{location.text}</Text>
              </div>
            </div>
            <Space h="xs" />
            <div style={{ display: "flex" }}>
              <div>
                <ActionIcon c="#A31920" variant="subtle">
                  <IconMail size="1.125rem" />
                </ActionIcon>
              </div>
              <Space w="xs" />
              <div>
                <Text>{email.title}</Text>
                <Text c="dimmed">{email.text}</Text>
              </div>
            </div>
            <Space h="xs" />
            <div style={{ display: "flex" }}>
              <div>
                <ActionIcon c="#A31920" variant="subtle">
                  <IconPhone size="1.125rem" />
                </ActionIcon>
              </div>
              <Space w="xs" />
              <div>
                <Text>{phone.title}</Text>
                <Text c="dimmed">{phone.text}</Text>
              </div>
            </div>
          </div>
        </SimpleGrid>
      </Paper>
    </div>
  );
}

export default BusinessCard;
