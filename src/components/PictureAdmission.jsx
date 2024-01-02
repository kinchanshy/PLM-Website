import React from "react";
import { Card, Image, SimpleGrid, Text, Overlay } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function PictureAdmission({
  links,
  maw,
  height,
  color,
  opacity,
  size,
  overlay = false,
  col
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
      <SimpleGrid cols={col} spacing="xl">
        {links.map((link) => (
          <div key={link.id}>
            <Card
              key={link.id}
              shadow="lg"
              maw={maw}
              radius="md"
              padding="sm"
              withBorder
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
                    <Text fw="bold" size="1.5rem" ff="Poppins">
                      {link.centerText}
                    </Text>

                    <Text fw={600} size="md" mt="sm" ta="center" c={color}>
                      {link.title}
                    </Text>
                  </div>
                )}
              </Card.Section>
            </Card>
          </div>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default PictureAdmission;
