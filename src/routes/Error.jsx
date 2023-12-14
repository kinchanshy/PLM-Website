import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Text, Button, Group } from "@mantine/core";
import { Nothing } from "../components/Nothing";
import classes from "../../src/Error.module.css";

function Error() {
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.image}></div>
        <Container className={classes.content}>
          <Title className={classes.title}>Nothing to see here</Title>
          <Text
            c="dimmed"
            size="lg"
            ta="center"
            className={classes.description}
          >
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Group justify="center">
            <Button
              size="md"
              radius="md"
              variant="subtle"
              //   style={{ backgroundColor: "#d5a106" }}
              onClick={() => navigate(-1)}
            >
              Take me back
            </Button>
          </Group>
        </Container>
      </div>
    </div>
  );
}

export default Error;
