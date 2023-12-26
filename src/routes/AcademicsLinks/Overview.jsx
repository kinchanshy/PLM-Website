import React from "react";
import { Image, Text, Box, Divider } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { texts } from "./links";
import pic from "../../assets/Overview.png";

function Overview({ title }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Text size="1.5rem" fw="bold" p="xs">
          {title}
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      <div>
        <Image maw={1000} src={pic} p="md" />
        {texts.map((text, index) => (
          <Text key={index} p="md" size="lg" ta="justify" c="#313131">
            {text.content}
          </Text>
        ))}
      </div>
    </>
  );
}

export default Overview;
