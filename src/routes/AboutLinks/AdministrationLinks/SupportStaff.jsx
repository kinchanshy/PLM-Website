import React from "react";
import { Space, Text, Box, Divider, Grid, Image, Card } from "@mantine/core";
import R_J_S_C from "../Images/R_J_S_C.jpg";
import DUMMY from "../Images/DUMMY.png";

function SupportStaff({ title }) {
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

      <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >

      <Grid.Col span={10}>
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={R_J_S_C}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '50%', // Set the height to 100%
            objectFit: 'cover', // Crop the image to cover the container
            transform: 'scale(1.5)', // Zoom the image permanently
            transformOrigin: 'top left', // Set the origin of the transformation to the top
          }}
        />
      </Card.Section>

      <div style={{textAlign: "center"}}>
          <Text fw={"bold"} size="lg" mt="md" color="#006699" style={{marginBottom:"-12px", marginTop:"10px"}}>
          RYAN JAY SM CRUZ
          </Text>

          <Text mt="xs" size="sm" style={{marginBottom:"-9px"}}>
          Head Executive Assistant
          </Text>
        </div>
        </Card>
      </Grid.Col>

      <Grid.Col span={10}>
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={DUMMY}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '50%', // Set the height to 100%
            objectFit: 'cover', // Crop the image to cover the container
            transform: 'scale(1.5)', // Zoom the image permanently
            transformOrigin: 'top left', // Set the origin of the transformation to the top
          }}
        />
      </Card.Section>

      <div style={{textAlign: "center"}}>
          <Text fw={"bold"} size="lg" mt="md" color="#006699">
          GIOVANNE A. CANDELARIA
          </Text>

          <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
          Executive Assistant IV
          </Text>
        </div>
        </Card>
      </Grid.Col>

      <Grid.Col span={10}>
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={DUMMY}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '50%', // Set the height to 100%
            objectFit: 'cover', // Crop the image to cover the container
            transform: 'scale(1.5)', // Zoom the image permanently
            transformOrigin: 'top left', // Set the origin of the transformation to the top
          }}
        />
      </Card.Section>

      <div style={{textAlign: "center"}}>
          <Text fw={"bold"} size="lg" mt="md" color="#006699">
          PURIFICACION C. CASONO
          </Text>

          <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
          Executive Assistant III
          </Text>
        </div>
        </Card>
      </Grid.Col>
    </Grid>
    </Box>
  );
}

export default SupportStaff;
