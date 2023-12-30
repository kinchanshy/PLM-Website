import React from "react";
import { Timeline, Text, Space, List } from "@mantine/core";

function Timelines({ title, items }) {
  return (
    <div>
      <Text fz="lg" fw="bold">
        {title}
      </Text>
      <Space h="xl" />
      <Timeline active={4} color="#A31920" bulletSize={20} lineWidth={2}>
        {items.map((item, index) => (
          <Timeline.Item key={index} title={item.title}>
            <Text c="#000" size="md" ta="justify">
              {item.content}
            </Text>
            {item.hasBullets && item.subcontent && (
              <List style={{ marginLeft: "1rem" }}>
                {item.subcontent.map((bullet, bulletIndex) => (
                  <List.Item key={bulletIndex}>
                    <Text c="#000" size="md" ta="justify">
                      {bullet}
                    </Text>
                  </List.Item>
                ))}
              </List>
            )}
            {!item.hasBullets && item.subcontent && (
              <div style={{ marginLeft: "1rem" }}>
                <Text c="#000" size="md" ta="justify">
                  {item.subcontent}
                </Text>
              </div>
            )}
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
}

export default Timelines;
