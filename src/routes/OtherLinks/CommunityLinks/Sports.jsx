import React from "react";
import { Image, Text, Box, Divider, Grid } from "@mantine/core";
import pic from "./Images/CRS.png";

function Sports({ selectedLink }) {
  //const title = selectedLink.toUpperCase();
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

      <Grid
        columns={40}
        style={{
          display: "flex",
          paddingTop: "2rem",
         
          
        }}
      >
        <Grid.Col span={20}>
            <Image src={pic} p="md" />
      </Grid.Col>
        <Grid.Col span={20}>

      <div style={{ padding: "5rem 1rem 1rem 1rem"}}>
          <Text>In 1996, the Association of Local Colleges and Universities (ALCU) was established, and its national headquarter was situated in PLM.</Text>
      </div>

      </Grid.Col>
      </Grid>

      <div style={{ padding: "1rem"}}>
        <Text> The University is a member of ALCUlympics, a s ports organization composed of 18 local colleges and universities nationwide. Volleyball, basketball, table tennis, taekwondo, arnis, and track & field are among the featured sports in the said competition.</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text>The association fosters camaraderie among universities that share the commitment to providing quality education. The PLM remained an active member of ACLU, bagging both medals and recognition.</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text>Additionally, the PLM community regularly organizes inter-university invitational games and dual meets in major sporting events, participates in the Manila Youth Games and Manila Marathon, and conducts its very own Student Intramural Games that is usually participated in by the college teams.</Text>
      </div>

      
    </Box>
  );
}

export default Sports;
