import React from "react";
import { Text, Button } from "@mantine/core";

function DownloadButton({ onClick }) {
  return (
    <div>
      <Button
        radius="md"
        className="button"
        c="black"
        uppercase
        onClick={onClick}
      >
        <Text>Download</Text>
      </Button>
    </div>
  );
}

export default DownloadButton;
