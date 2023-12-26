import React from "react";
import { Image, Text, SimpleGrid } from "@mantine/core";

function Intro({ links }) {
  return (
    <div>
      {links.map((section, index) => (
        <div key={index}>
          {section.title && (
            <Text p="xs" fz="lg" fw="bold">
              {section.title}
            </Text>
          )}
          {section.description && (
            <Text p="xs" ta="justify">
              {section.description}
            </Text>
          )}
          {section.src && (
            <SimpleGrid cols={2}>
              <div>
                <Image maw={500} src={section.src} p="md" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {section.content && (
                  <Text p="md" ta="justify">
                    {section.content}
                  </Text>
                )}
              </div>
            </SimpleGrid>
          )}
          {section.otherContent && (
            <div>
              {Array.isArray(section.otherContent) ? (
                section.otherContent.map((paragraph, index) => (
                  <Text key={index} p="xs" ta="justify">
                    {paragraph}
                  </Text>
                ))
              ) : (
                <Text p="xs" ta="justify">
                  {section.otherContent}
                </Text>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Intro;
