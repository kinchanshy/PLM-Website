import React from "react";
import { Image, Text, SimpleGrid } from "@mantine/core";

function Intro({ description, content, otherContent, title, src }) {
  return (
    <>
      {title && (
        <Text p="xs" fz="lg" fw="bold">
          {title}
        </Text>
      )}
      {description && (
        <Text p="xs" ta="justify">
          {description}
        </Text>
      )}
      {src && (
        <SimpleGrid cols={2}>
          <div>
            <Image maw={500} src={src} p="md" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {content && (
              <Text p="md" ta="justify">
                {content}
              </Text>
            )}
          </div>
        </SimpleGrid>
      )}
      {otherContent && (
        <div>
          {Array.isArray(otherContent) ? (
            otherContent.map((paragraph, index) => (
              <Text key={index} p="xs" ta="justify">
                {paragraph}
              </Text>
            ))
          ) : (
            <Text p="xs" ta="justify">
              {otherContent}
            </Text>
          )}
        </div>
      )}
    </>
  );
}

export default Intro;
