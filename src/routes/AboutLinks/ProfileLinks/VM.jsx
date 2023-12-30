import React from "react";
import { Text, Box, Divider, List } from "@mantine/core";

function VM({ title }) {
  //const title = selectedSublink.toUpperCase();
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
          {title}
        </Text>
      </div>
      <Divider c="#eeee" size="md" />

      <div>
        <Text p="xs">
          The Pamantasan ng Lungsod ng Maynila (PLM), created by a National
          Charter (RA 4196, 1965), was envisioned to be Manila's premiere
          institution for higher learning. It provides superior standards of
          instructions, as well as opportunities for outstanding research in
          technology and other areas for the development of the intellect and to
          advance human knowledge.
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
        <Text>
          The Pamantasan ng Lungsod ng Maynila has adopted the policy of
          preferential option for the poor and therefore has prioritized
          education for the underprivileged but talented students of Manila.
          Committed to the highest intellectual and ethical standards, PLM
          strives to produce competent graduates with integrity who will be
          responsible citizens who can contribute effectively to local, national
          and global initiatives for the progressive and sustainable development
          of humanity.
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
        <Text>
          Guided by the values of academic excellence, integrity and social
          responsibility, PLM endeavors to be one of the leading universities in
          the ASEAN.
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      <div>
        <Text fz="xl" fw="bold" p="md">
          Vision
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
        <Text>
          The Pamantasan ng Lungsod ng Maynila shall be the premier people’s
          university pursuing public interest and national development.
        </Text>
      </div>

      <div>
        <Text fz="xl" fw="bold" p="md">
          Mission
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
        <Text>
          The Pamantasan ng Lungsod ng Maynila shall form critical-minded and
          service-oriented leaders and innovators in various disciplines through
          accessible and relevant quality education, transformative
          institutional research and extension services, and key linkages.
        </Text>
      </div>

      <div>
        <Text fz="xl" fw="bold" p="md">
          Core Values
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
        <Text>
          The Pamantasan ng Lungsod ng Maynila shall be guided by the values of
          academic excellence, integrity and social responsibility, and by the
          principles of Karunungan, Kaunlaran and Kadakilaan.
        </Text>
      </div>

      <div>
        <Text fz="xl" fw="bold" p="md">
          Goals / Key Result Areas
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
        <Text>
          LM's Goals and Objectives for the next five (5) years: RAISE PLM
        </Text>
        <List>
          <List.Item>
            <Text>Provide Relevant Quality Tertiary Education</Text>
          </List.Item>
          <List.Item>
            <Text>Generate Augmented Resources</Text>
          </List.Item>
          <List.Item>
            <Text>Sustain Institutionalized Research and Extension</Text>
          </List.Item>
          <List.Item>
            <Text>Deliver Service to the Public</Text>
          </List.Item>
          <List.Item>
            <Text>Advance Employee, Faculty and Student Welfare</Text>
          </List.Item>
          <List.Item>
            <Text>Promote Public Interest</Text>
          </List.Item>
          <List.Item>
            <Text>Establish Linkages and Partnerships</Text>
          </List.Item>
          <List.Item>
            <Text>Optimize Management of Resources</Text>
          </List.Item>
        </List>
      </div>
    </Box>
  );
}

export default VM;
