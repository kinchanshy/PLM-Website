import React from "react";
import { Text, Button } from "@mantine/core";

function Download({ onClick }) {
  return (
    <div>
      <Button
        radius="md"
        className="button"
        c="black"
        uppercase
        onClick={onClick}
      >
        <Text fw={500}>DOWNLOAD</Text>
      </Button>
    </div>
  );
}

export default Download;
