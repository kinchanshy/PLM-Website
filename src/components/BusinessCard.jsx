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
    <div style={{ padding: "2rem" }}>
      <Paper radius="md" shadow="md" p="lg" bg="color.2">
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
              <ActionIcon c="color.4">
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
                <ActionIcon c="color.4">
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
                <ActionIcon c="color.4">
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
                <ActionIcon c="color.4">
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
