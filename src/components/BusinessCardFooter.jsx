import React from "react";
import { Text, ActionIcon, Paper, SimpleGrid, Space, Button } from "@mantine/core";
import {
  IconMinus,
  IconMapPin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

function BusinessCard() {
  return (
    <div style={{ padding: "1rem 20rem 1rem 20rem" }}>
      <Paper radius="md" shadow="md" p="lg" bg="#f7f7f7">
        <SimpleGrid cols={2}>
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
                We value your feedback. Please do not hesitate to get in touch with us for suggestions, concerns, and/or complaints.
              </Text>
            </div>
            <div style={{ padding: "1rem" }}>
          <Button
            radius="md"
            className="buttons"
            c="white"
            uppercase
            onClick={() => { window.location.href = "/contact-us"; } }
          >
            <Text>CLICK HERE TO SUBMIT FEEDBACK</Text>
          </Button>
        </div>
          </div>

          <div>
            <div style={{ display: "flex" }}>
              <div>
                <ActionIcon c="#A31920" variant="subtle">
                  <IconMapPin size="1.125rem" />
                </ActionIcon>
              </div>
              <Space w="xs" />
              <div>
                <Text>Location</Text>
                <Text c="dimmed">Gen. Luna corner Muralla Streets, Intramuros Manila, Philippine 1002</Text>
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
                <Text>Email</Text>
                <Text c="dimmed">email@plm.edu.ph</Text>
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
                <Text>Contact Numbers</Text>
                <Text c="dimmed">00000</Text>
              </div>
            </div>
          </div>
        </SimpleGrid>
      </Paper>
    </div>
  );
}

export default BusinessCard;
