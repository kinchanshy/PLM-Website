import React from "react";
import { Table, Text, List, Box, Divider } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const elements = [
  { date: "February 15, 2020",  cos: 
        <Text>Rondalla Festival (10 AM to 12 PM)</Text>
    },
  { date: "February 22, 2020",  cos: 
      <Text>PLM Alumni Association, Inc.'s General Assembly and Elections</Text>
     },
  { date: "February 28, 2020",  cos: 
     <Text>PLM Batch '70 Golden Jubilee Alumni Homecoming</Text>
    },
];

function Events() {

  const rows = elements.map((element) => (
    <Table.Tr key={element.cos}>
      <Table.Td style={{textAlign:'center',  fontFamily: "Open Sans, sans-serif"}}>{element.date}</Table.Td>
      <Table.Td>{element.cos}</Table.Td>
    </Table.Tr>
  ));

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
          EVENTS
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
    <div
      style={{
        display: "flex",     
        flexDirection: "column",
        justifyContent: "center",
    
      }}
    >
      <div style={{padding: '1.5rem 0 1.5rem 0'}}>
         <Text p="xs" fz={'1.25rem'}>
        Below are the activities and events scheduled in February 2020.
        </Text>
      </div>

      <div style={{padding: '1.5rem 0 1.5rem 0'}}>
        <Text p="xs" fz={'1.25rem'}>
        If you would like to add events to our calendar, please contact us.
        </Text>
      </div>

      
      
      <Table
        verticalSpacing="xl"
        p="md"
        fontSize="lg"
        highlightOnHover
        withTableBorder
        withColumnBorders
      >
        <Table.Thead style={{backgroundColor:'#006699'}}>
        <Table.Tr>
          <Table.Th style={{color:'#FFFFFF', textAlign:'center',  fontFamily: "Open Sans, sans-serif"}}>DATE</Table.Th>
          <Table.Th style={{color:'#FFFFFF', textAlign:'center',  fontFamily: "Open Sans, sans-serif"}}>EVENT</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>

      </Table>
    </div>
    </Box>
  );
}

export default Events;
