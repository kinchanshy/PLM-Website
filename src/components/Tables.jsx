import React from "react";
import { Table, Container, Text, List } from "@mantine/core";

function Tables({ columns, data }) {
  const columnHeaders = columns.map((column) => (
    <th key={column.key}>
      <Text p="sm" ta="center">
        {column.header}
      </Text>
    </th>
  ));

  const rows = data.map((rowData) => (
    <tr key={rowData.id}>
      {columns.map((column) => (
        <td key={column.key}>
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
        </td>
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
        withBorder
        withColumnBorders
      >
        <thead>
          <tr>{columnHeaders}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Container>
  );
}

export default Tables;
