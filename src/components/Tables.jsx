import React from "react";
import { Table, Container, Text, List } from "@mantine/core";

function Tables({ columns, data }) {
  const column = columns.map((column) => (
    <Table.Th key={column.key}>
      <Text ta="center">{column.header}</Text>
    </Table.Th>
  ));

  const rows = data.map((rowData) => (
    <tr key={rowData.id}>
      {columns.map((column) => (
        <Table.Td key={column.key}>
          <Text p="xl" ta={column.textAlign || "center"}>
            {column.useBullets && Array.isArray(rowData[column.key]) ? (
              <List>
                {rowData[column.key].map((item, index) => (
                  <List.Item key={index}>
                    <Text fz="sm">{item}</Text>
                  </List.Item>
                ))}
              </List>
            ) : (
              rowData[column.key]
            )}
          </Text>
        </Table.Td>
      ))}
    </tr>
  ));

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Table
        verticalSpacing="xl"
        p="md"
        fontSize="sm"
        highlightOnHover
        withTableBorder
        withColumnBorders
      >
        <Table.Thead>
          <Table.Tr>{column}</Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Container>
  );
}

export default Tables;
