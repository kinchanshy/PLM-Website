import React from "react";
import { Space, Text, Divider } from "@mantine/core";

const News = ({ item }) => {
  return (
    <div style={{ padding: "1rem" }}>
      <Text c="#006699" fw="bold" fz="lg">
        THE LATEST
      </Text>
      <Space h="lg" />

      {/* Display the manually managed news items */}
      {item.map((item) => (
        <>
          <Divider c="dimmed" size="md" />
          <Space h="lg" />
          <div key={item.id}>
            <Text fz="xs" c="dimmed">
              PUBLISHED: {item.published}
            </Text>
            <Space h="lg" />
            <Text fz="lg" fw="bold">
              {item.title}
            </Text>
            <Space h="lg" />
          </div>
        </>
      ))}
    </div>
  );
};

export default News;
