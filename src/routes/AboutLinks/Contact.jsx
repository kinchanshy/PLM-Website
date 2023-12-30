import React from "react";
import { Text, Box, Divider } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import ExtraAccordion from "../../components/Extra";
import CustomTable from "../../components/Tables";
import {
  administrativeTable,
  collegesTable,
  officesTable,
  administrativeElements,
  collegesElements,
  officesElements,
} from "./links";

function Contacts({ selectedLink }) {
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
        <Text p="xs" fz="lg" ta="justify">
          We highly prioritize transparent communication with our students,
          parents, and the broader community. If you have any inquiries, issues,
          or would like to gain further insight into our school, please feel
          free to contact us. You can easily reach out to us by utilizing the
          contact details supplied below.
        </Text>
      </div>
      <div>
        <div>
          <ExtraAccordion title="Administrative Offices">
            <CustomTable
              columns={administrativeTable}
              data={administrativeElements}
            />
          </ExtraAccordion>
        </div>
        <div style={{ marginTop: "-2rem" }}>
          <ExtraAccordion title="Colleges">
            <CustomTable columns={collegesTable} data={collegesElements} />
          </ExtraAccordion>
        </div>
        <div style={{ marginTop: "-2rem" }}>
          <ExtraAccordion title="University Offices">
            <CustomTable columns={officesTable} data={officesElements} />
          </ExtraAccordion>
        </div>
      </div>
    </Box>
  );
}

export default Contacts;
