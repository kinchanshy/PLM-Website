import React from "react";
import { Table, Text, List, Box, Divider } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const elements = [
  { date: "January 3-4, 2022",  cos: 
    <List >
      <List.Item>
        <Text>College of Architecture and Urban Planning (CAUP)</Text>
      </List.Item>
      <List.Item>
        <Text>College of Education (CED)</Text>
      </List.Item>
      <List.Item>
        <Text>College of Humanities, Arts, and Social Sciences (CHASS)</Text>
      </List.Item>
      <List.Item>
        <Text>College of Nursing (CN)</Text>
      </List.Item>
      <List.Item>
        <Text>College of Physical Therapy (CPT)</Text>
      </List.Item>
      <List.Item>
        <Text>College of Science (CS)</Text>
      </List.Item>
      <List.Item>
        <Text>College of Law (CL)</Text>
      </List.Item>
      <List.Item>
        <Text>School of Government (SOG)</Text>
      </List.Item>
      <br />
        <Text>(Undergraduate, graduate, postgraduate, and professional programs)</Text>
      
    </List>},
  { date: "January 15-23, 2022",  cos: <List >
    <List.Item>
      <Text>College of Engineering and Technology (CET)</Text>
    </List.Item>
    <List.Item>
      <Text>PLM Business School (PLMBS)</Text>
    </List.Item>   
    <br />
      <Text>(Undergraduate programs)</Text>
    
  </List> },
];

function Evaluation({ selectedLink }) {
  //const title = selectedLink.toUpperCase();

  const rows = elements.map((element) => (
    <tr key={element.cos}>
      <td style={{textAlign:'center',  fontFamily: "Open Sans, sans-serif"}}>{element.date}</td>
      <td>{element.cos}</td>
    </tr>
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
          {selectedLink}
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
      Students can now evaluate their faculty online. Check your evaluation schedule below.
        </Text>
        </div>

      
      
      <Table
        verticalSpacing="xl"
        p="md"
        fontSize="lg"
        highlightOnHover
        withBorder
        withColumnBorders
      >
        <thead style={{backgroundColor:'#006699'}}>
        <tr>
          <th style={{color:'#FFFFFF', textAlign:'center',  fontFamily: "Open Sans, sans-serif"}}>DATE</th>
          <th style={{color:'#FFFFFF', textAlign:'center',  fontFamily: "Open Sans, sans-serif"}}>COLLEGE/SCHOOL</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>

      </Table>
    </div>
    </Box>
  );
}

export default Evaluation;
