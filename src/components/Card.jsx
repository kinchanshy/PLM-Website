import React from "react";
import { Card, Text } from "@mantine/core";
import { IconQuote } from "@tabler/icons-react";

function CMSCard({ title, content, bgColor, height }) {
  return (
    <Card shadow="sm" radius="md" h={height} bg={bgColor} withBorder>
      <Card.Section
        style={{ display: "flex", alignItems: "center", position: "absolute" }}
      >
        <Text fz="xl" fw="bold" p="lg">
          {title}
        </Text>
      </Card.Section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <IconQuote
            size="2rem"
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
            }}
          />
        </div>
        <Text
          p="xl"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {content}
        </Text>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <IconQuote
            size="2rem"
            style={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
            }}
          />
        </div>
      </div>
    </Card>
  );
}

export default CMSCard;
