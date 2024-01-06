import React from "react";
import { Image, Text, SimpleGrid } from "@mantine/core";

function Intro({ links, titleColor, desColor, conColor, pColor, otherColor }) {
  return (
    <div>
      {links.map((section, index) => (
        <div key={index}>
          {section.title && (
            <Text p="xs" fz="lg" fw="bold" c={titleColor}>
              {section.title}
            </Text>
          )}
          {section.description && (
            <Text p="xs" ta="justify" c={desColor}>
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
                  <Text p="md" ta="justify" c={conColor}>
                    {section.content}
                  </Text>
                )}
              </div>
            </SimpleGrid>
          )}
          {section.other && (
            <div>
              {Array.isArray(section.other) ? (
                section.other.map((paragraph, index) => (
                  <Text key={index} p="xs" ta="justify" c={pColor}>
                    {paragraph}
                  </Text>
                ))
              ) : (
                <Text p="xs" ta="justify" c={otherColor}>
                  {section.other}
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
