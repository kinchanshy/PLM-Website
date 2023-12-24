import React from "react";
import { Text, Box, Divider, Grid, Image, Card, Space } from "@mantine/core";
import C_Rondaris from "../Images/C_Rondaris.jpg";
import AS_Malunes from "../Images/AS_Malunes.jpg";
import K_Leyson from "../Images/K_Leyson.jpg";
import PJ_Glido from "../Images/PJ_Glido.jpg";
import DM_Cortez from "../Images/DM_Cortez.jpg";
import D_Mendez from "../Images/D_Mendez.jpg";
import K_Mata from "../Images/K_Mata.jpg";
import H_Nunez from "../Images/H_Nunez.jpg";
import R_Moral from "../Images/R_Moral.jpg";
import N_Gocuyo from "../Images/N_Gocuyo.jpg";
import DUMMY from "../Images/DUMMY.png";


function VP({ selectedSublink }) {
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

      <Space h="lg" />
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
          src={C_Rondaris}
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
          <Text  fw={"bold"} size="lg" mt="md" color="#006699">
            CLYDELLE M. RONDARIS, PH.D.
          </Text>

          <Text mt="xs" size="sm">
            Executive Vice President
          </Text>
        </div>
        
        </Card>
      </Grid.Col>
    </Grid>

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
          src={N_Gocuyo}
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
          NOEMI C. GOCUYO
          </Text>

          <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
            OIC, Vice President for Academic Affairs
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
          src={AS_Malunes}
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
            ANDREA SOLOMON-MALUNES
          </Text>

          <Text mt="xs" size="sm">
            Vice President for Finance
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
          src={K_Leyson}
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
            KAREN L. LEYSON
          </Text>

          <Text mt="xs" size="sm">
            Vice President for Administration
          </Text>
        </div>
        </Card>
      </Grid.Col>
    </Grid>

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
          src={DM_Cortez}
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
            DAN MICHAEL A. CORTEZ, DIT
          </Text>

          <Text mt="xs" size="sm" style={{marginBottom:"-9px"}}>
            Assistant Vice President for University Priorities
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
          src={R_Moral}
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
            ATTY. RELSON P. MORAL
          </Text>

          <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
            Assistant Vice President for Legal Affairs 
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
          src={H_Nunez}
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
            HERMINIA D. NUNEZ
          </Text>

          <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
            Assistant Vice President for Second Administrative Group
          </Text>
        </div>
        </Card>
      </Grid.Col>
    </Grid>

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
          src={PJ_Glido}
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
            PENIEL JEAN A. GILDO
          </Text>

          <Text mt="xs" size="sm" style={{marginBottom:"-9px"}}>
            Assistant Vice President for Academic Affairs
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
          src={K_Mata}
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
            KHATALYN E. MATA, DIT
          </Text>

          <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
            Assistant Vice President for Academic Support Units
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
          src={D_Mendez}
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
            DINA C. MENDEZ
          </Text>

          <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
            Assistant Vice President for Public Affairs
          </Text>
        </div>
        </Card>
      </Grid.Col>
    </Grid>

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
          <Text  fw={"bold"} size="lg" mt="md" color="#006699">
            VINA G. MUNDALA
          </Text>

          <Text mt="xs" size="sm">
            Assistant Vice President for Administration
          </Text>
        </div>
        
        </Card>
      </Grid.Col>
    </Grid>

    </Box>
  );
}

export default VP;
