import React from "react";
import Intro from "../../components/Intro";
import { Text, Divider, List, Tooltip, Space } from "@mantine/core";
import { crs, crsIntro } from "./links";
import Picture from "../../components/Picture";

function CRS({ title }) {
  return (
    <div>
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
      <Intro links={crsIntro} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
        }}
      >
        <Picture
          links={crs}
          maw={250}
          overlay="true"
          opacity={0.8}
          height="30svh"
          size="2rem"
        />
      </div>
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
              <Tooltip label="Send Email" withArrow>
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
              <Tooltip label="Send Email" withArrow>
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
    </div>
  );
}

export default CRS;
