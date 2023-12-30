import React from "react";
import { Image, Text, Box, Divider } from "@mantine/core";
import { texts } from "./links";
import pic from "./Images/UnivProfile.png";

function Profile() {
  return (
    <Box style={{ fontFamily: "Open Sans, sans serif" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Text size="1.5rem" fw="bold" p="xs">
          PAMANTASAN NG LUNGSOD NG MAYNILA
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      <div>
        <Image maw={1000} src={pic} p="md" />
        {texts.map((text, index) => (
          <Text key={index} p="xs" ta="justify">
            {text.content}
          </Text>
        ))}
      </div>
    </Box>
  );
}

export default Profile;
