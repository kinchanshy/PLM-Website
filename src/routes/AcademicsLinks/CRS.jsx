import React from "react";
import {
  Image,
  Text,
  Box,
  Divider,
  SimpleGrid,
  List,
  Space,
  Tooltip,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import pic from "./Images/CRS.png";

function CRS({ selectedLink }) {
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
      <div>
        <Text p="xs">
          Undergraduate students who are permanent residents of Manila may
          upload documentary requirements for Manila City's Social Amelioration
          Program (SAP) via CRS. Go to your student profile to upload the
          documents.
        </Text>
      </div>
      <div>
        <Text p="xs">
          For concerns or inquiries, please contact the following:
        </Text>
        <List p="md">
          <List.Item>
            <div style={{ display: "flex" }}>
              <Text fw="bold"> On confirmation of passers: </Text>
              <Space w="xs" />
              <Tooltip label="Send Email">
                <Text
                  className="email"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open("mailto:admission@plm.edu.ph", "_blank");
                  }}
                >
                  admission@plm.edu.ph
                </Text>
              </Tooltip>
            </div>
          </List.Item>
          <List.Item>
            <div style={{ display: "flex" }}>
              <Text fw="bold"> On online enrollment: </Text>
              <Space w="xs" />
              <Tooltip label="Send Email">
                <Text
                  className="email"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open("mailto:registrar@plm.edu.ph", "_blank");
                  }}
                >
                  registrar@plm.edu.ph
                </Text>
              </Tooltip>
            </div>
          </List.Item>
          <List.Item>
            <div style={{ display: "flex" }}>
              <Text fw="bold">
                Problems on CRS or graduate student registration access:
              </Text>
              <Space w="xs" />
              <Tooltip label="Send Email">
                <Text
                  className="email"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open("mailto:ithelp@plm.edu.ph", "_blank");
                  }}
                >
                  ithelp@plm.edu.ph
                </Text>
              </Tooltip>
            </div>
          </List.Item>
        </List>
      </div>
    </Box>
  );
}

export default CRS;
