import React from "react";
import { Card, Image, SimpleGrid, Text, Overlay } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function Picture({
  links,
  maw,
  height,
  color,
  opacity,
  size,
  overlay = false,
}) {
  const navigate = useNavigate();

  const handleCardClick = (link) => {
    if (link.path) {
      // If path is defined, use navigate
      navigate(link.path);
    } else if (link.link) {
      // If link is defined, open in a new window
      window.open(link.link, "_blank");
    }
  };

  return (
    <div style={{ cursor: "pointer" }}>
      <SimpleGrid cols={3} spacing="xl">
        {links.map((link) => (
          <div key={link.id}>
            <Card
              key={link.id}
              shadow="lg"
              maw={maw}
              radius="md"
              padding="sm"
              withBorder
              h={height}
              // onClick={() => navigate(link.path)}
              onClick={() => handleCardClick(link)}
            >
              <Card.Section style={{ position: "relative" }}>
                <Image src={link.imageSrc} alt={link.altText} />
                {overlay && (
                  <Overlay
                    color="#fff"
                    backgroundOpacity={opacity}
                    style={{ zIndex: "1" }}
                  />
                )}
                {link.centerText && (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      textAlign: "center",
                      width: "100%",
                      zIndex: "2",
                    }}
                  >
                    <Text fw="bold" size={size} ff="Poppins">
                      {link.centerText}
                    </Text>
                  </div>
                )}
              </Card.Section>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Text fw={600} size="md" mt="sm" ta="center" c={color}>
                  {link.title}
                </Text>
              </div>
            </Card>
          </div>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default Picture;
