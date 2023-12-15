import React from "react";
import { Card, Image, Text, Button, Container, Box } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function CardHolder({ links }) {
  const navigate = useNavigate();

  const handleButtonClick = (link) => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div>
      {links.map((data, index) => (
        <Container key={index} size="25rem">
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section component="a" p="sm">
              <Image
                src={data.imageUrl}
                height={160}
                alt="Norway"
                radius="md"
              />
            </Card.Section>
            <Container
              mt="md"
              style={{
                display: "flex",
                position: "absolute",
                top: 120,
                left: 5,
              }}
            >
              <div className="date">
                <Text size="xs" fw="bold">
                  {data.date}
                </Text>
                <Text size="xs" fw="bold">
                  {data.day}
                </Text>
              </div>
            </Container>
            <Container style={{ marginTop: "2rem" }}>
              <Text size="sm" c="#010101" fw="bold">
                {data.description}
              </Text>
            </Container>
            <div>
              <Button
                color={data.buttonColor}
                c={data.buttonTextColor}
                mt="md"
                radius="md"
                onClick={() => handleButtonClick(data.link)}
              >
                {data.buttonText}
              </Button>
            </div>
          </Card>
        </Container>
      ))}
    </div>
  );
}

export default CardHolder;
