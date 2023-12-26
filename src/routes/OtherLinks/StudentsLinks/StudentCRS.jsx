import React from "react";
import {
  Image,
  Text,
  Box,
  Divider,
  SimpleGrid,
  Tooltip,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import pic from "./Images/CRS.png";

function StudentCRS({ selectedLink }) {
  const navigate = useNavigate();
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
          {selectedLink}
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      <div>
        <Text p="xs">
          Pamantasan ng Lungsod ng Maynila students may register online and
          access their student records using the links below:
        </Text>
      </div>
      <SimpleGrid cols={3} p="md">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image maw={250} src={pic} />
          <Tooltip label={<Text>Visit Site</Text>}>
            <Text
              className="site"
              fz="sm"
              fw="bold"
              ta="center"
              onClick={() => {
                window.open("https://plm.edu.ph/crs", "_blank");
              }}
            >
              Undergraduate and College of Law Students
            </Text>
          </Tooltip>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image maw={250} src={pic} />
          <Tooltip label={<Text>Visit Site</Text>}>
            <Text
              className="site"
              fz="sm"
              fw="bold"
              ta="center"
              onClick={() => {
                window.open("https://web3.plm.edu.ph/crscm", "_blank");
              }}
            >
              College of Medicine Students
            </Text>
          </Tooltip>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image maw={250} src={pic} />
          <Tooltip label={<Text>Visit Site</Text>}>
            <Text
              className="site"
              fz="sm"
              fw="bold"
              ta="center"
              onClick={() => {
                window.open("https://plm.edu.ph/gsp", "_blank");
              }}
            >
              Graduate Students
            </Text>
          </Tooltip>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image maw={250} src={pic} />
          <Tooltip label={<Text>Visit Site</Text>}>
            <Text
              className="site"
              fz="sm"
              fw="bold"
              ta="center"
              onClick={() => {
                window.open("https://web2.plm.edu.ph/sfe", "_blank");
              }}
            >
              Student's Faculty Evaluation System
            </Text>
          </Tooltip>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image maw={250} src={pic} />
          <Tooltip label={<Text>Visit Site</Text>}>
            <Text
              className="site"
              fz="sm"
              fw="bold"
              ta="center"
              onClick={() => {
                window.open("https://web5.plm.edu.ph/201Jacket", "_blank");
              }}
            >
              Student 201 Management System
            </Text>
          </Tooltip>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image maw={250} src={pic} />
          <Tooltip label={<Text>Visit Site</Text>}>
            <Text
              className="site"
              fz="sm"
              fw="bold"
              ta="center"
              onClick={() => {
                window.open("https://web2.plm.edu.ph/ars/login", "_blank");
              }}
            >
              Alumni Registry
            </Text>
          </Tooltip>
        </div>
      </SimpleGrid>
    </Box>
  );
}

export default StudentCRS;
