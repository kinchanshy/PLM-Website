import React from "react";
import { Image, Text, Box, Divider, Grid } from "@mantine/core";
import PLMLogo from "../../../assets/PLMLogo.png";


function Seal({ selectedSublink }) {
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
          {selectedSublink}
        </Text>
      </div>
      <Divider c="#eeee" size="md" />

      
      <Grid
        columns={40}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <Grid.Col span={20}>
      <div style={{ padding: ".5rem" }}>
        <Text p="xs">
        When a new president is inducted in the university, he or she receives two precious 
symbols of the university, namely the Mace and the Academic Collar.
        </Text>
      </div>
  
      <div>
        <Text fz="xl" fw="bold" p="md">
        Academic Collar
        </Text>
      </div>
      
      <div style={{ padding: "1rem" }}>
          <Text>The Pamantasan ng Lungsod ng Maynila shall be the premier people’s university 
pursuing public interest and national development.</Text>
      </div>

      <div>
        <Text fz="xl" fw="bold" p="md">
          Mace
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
          <Text>The Mace symbolizes the authority of the president, the source of his power to 
administer the university.</Text>
      </div>
      </Grid.Col>
      <Grid.Col span={20}>
      <Image src={PLMLogo} p="md" />
      </Grid.Col>
      </Grid>

      <div style={{ padding: "1rem" }}>
          <Text>It was presented first to Dr. Benito F. Reyes, the first PLM president, by then-Mayor  Antonio J. Villegas on February 10, 1968. It has 
been recently turned over by the Chairperson to current President Emmanuel A. Leyco.</Text>
      </div>
    </Box>
  );
}

export default Seal;

