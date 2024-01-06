import React from "react";
import { Divider, Space, Text } from "@mantine/core";
import Tables from "../../components/Tables";
import { thesesCols, thesesData } from "./links";

function Theses({ title }) {
  return (
    <>
      <div>
        <Text size="1.5rem" fw="bold" p="xs">
          {title}
        </Text>
        <Divider c="#eeee" size="md" />
        <Space h="xl" />
        <Tables columns={thesesCols} data={thesesData} />
      </div>
    </>
  );
}

export default Theses;
