import React from "react";
import { Text, ActionIcon, Paper, SimpleGrid, Space } from "@mantine/core";
import {
  IconMinus,
  IconMapPin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

function BusinessCard({
  contactInfo: { text, location, email, phone },
}) {
  return (
    <div style={{ padding: "1rem" }}>
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

          <div>
            <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style={{borderRadius:"1rem"}} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Pamantasan%20ng%20Lungsod%20ng%20Maynila%20General%20Luna,%20corner%20Muralla%20St,%20Intramuros,%20Manila,%201002%20Metro%20Manila+(Pamantasan%20ng%20Lungsod%20ng%20Maynila)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">PLM</a></iframe>
          </div>
        </SimpleGrid>
      </Paper>
    </div>
  );
}

export default BusinessCard;
