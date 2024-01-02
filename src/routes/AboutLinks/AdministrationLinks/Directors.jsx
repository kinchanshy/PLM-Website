import React from "react";
import { Space, Text, Box, Divider, Grid, Image, Card } from "@mantine/core";
import MC_Blanco from "../Images/MC_Blanco.jpg";
import LA_Zafra from "../Images/LA_Zafra.jpg";
import AM_Bonoan from "../Images/AM_Bonoan.jpg";
import ED_Marcelo from "../Images/ED_Marcelo.jpg";
import E_Espero from "../Images/E_Espero.jpg";
import V_DCruz from "../Images/V_DCruz.jpg";
import M_Peralta from "../Images/M_Peralta.jpg";
import MJ_Bonifacio from "../Images/MJ_Bonifacio.jpg";
import HP_Galan from "../Images/HP_Galan.jpg";
import G_Mauricio from "../Images/G_Mauricio.jpg";
import C_Sarip from "../Images/C_Sarip.jpg";
import MA_Mariano from "../Images/MA_Mariano.jpg";
import N_Laurente from "../Images/N_Laurente.jpg";
import K_Mata from "../Images/K_Mata.jpg";
import DUMMY from "../Images/DUMMY.png";
import H_Nunez from "../Images/H_Nunez.jpg";

function Directors({ title }) {
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

      <div>
        <Text fz="xl" fw="bold" p="md">
        Officials reporting to the Office of the University President</Text>
      </div>

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
              <Text fw={"bold"} size="lg" mt="md" color="#006699" style={{marginBottom:"-12px", marginTop:"10px"}}>
                LAINNA PANGYARIHAN-KO
              </Text>

              <Text mt="xs" size="sm" style={{marginBottom:"-9px"}}>
                Chief, Office of Public Affairs
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
              src={MC_Blanco}
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
                MARK CHRISTOPHER R. BLANCO
              </Text>

              <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
                Chief, Information and Communication Technology Office
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
              src={AM_Bonoan}
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
                PROF. APRIL MAY S. BONOAN
              </Text>

              <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
                In-Charge of Sports Programs Presidential Committee on Arts, Culture, and Sports
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

          <Grid.Col span={10} />
          <Grid.Col span={10}>
            <Card
            shadow="sm"
            padding="xl"
            component="a"
            
            target="_blank"
          >
            <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
            <Image
              src={HP_Galan}
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
                PROF. HAROLD PERFECTO R. GALAN
              </Text>

              <Text mt="xs" size="sm">
                Vice Chair for Arts and Culture Presidential Committee on Arts, Culture, and Sports
              </Text>
            </div>
            
            </Card>
          </Grid.Col>
        </Grid>

        <Divider c="#eeee" size="md" />

      <div>
        <Text fz="xl" fw="bold" p="md">
        Officials reporting to the Assistant Vice President for Academic Support</Text>
      </div>


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
              <Text fw={"bold"} size="lg" mt="md" color="#006699" style={{marginBottom:"-12px", marginTop:"10px"}}>
                KHATALYN E. MATA, DIT
              </Text>

              <Text mt="xs" size="sm" style={{marginBottom:"-9px"}}>
                University Registrar
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
              src={ED_Marcelo}
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
                ENGR. ERWIN D. MARCELO
              </Text>

              <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
                Admissions Officer
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
              src={M_Peralta}
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
                MARGIELOU B. PERALTA
              </Text>

              <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
                Director, Office of Guidance and Testing Services
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
              src={G_Mauricio}
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
                GRACE M. MAURICIO
              </Text>

              <Text mt="xs" size="sm" style={{marginBottom:"-9px"}}>
                Chief, University Library
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
              src={MJ_Bonifacio}
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
                MARK JOHN S. BONIFACIO
              </Text>

              <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
                Director, Office of National Service Training Program
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
              src={V_DCruz}
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
                VILMA A. DELA CRUZ
              </Text>

              <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
                Dean, Office of Student Development and Services
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
          <Grid.Col span={10} />
          <Grid.Col span={10}>
            <Card
            shadow="sm"
            padding="xl"
            component="a"
            
            target="_blank"
          >
            <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
            <Image
              src={LA_Zafra}
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
                LIEZEL AGLIAM ZAFRA
              </Text>

              <Text mt="xs" size="sm">
                Director, Center of University Extension Services
              </Text>
            </div>
            
            </Card>
          </Grid.Col>
        </Grid>

        <Divider c="#eeee" size="md" />

      <div>
        <Text fz="xl" fw="bold" p="md">
        Officials reporting to the VP for Administration</Text>
      </div>

      <div style={{textAlign: "center"}}>
              <Text fw={"bold"} size="lg" mt="md" color="#006699">
                CLUSTER 1
              </Text>
              </div>

      <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >
          <Grid.Col span={5} />

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
              <Text fw={"bold"} size="lg" mt="md" color="#006699" style={{marginBottom:"-12px", marginTop:"10px"}}>
                ENGR. BRYAN C. GULAPA
              </Text>

              <Text mt="xs" size="sm" style={{marginBottom:"-9px"}}>
                Chief, Property and Supplies Office
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
              src={E_Espero}
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
                EMILY E. ESPERO
              </Text>

              <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
                Chief, General Services Office
              </Text>
            </div>
            </Card>
          </Grid.Col>
        </Grid>

        <div style={{textAlign: "center"}}>
              <Text fw={"bold"} size="lg" mt="md" color="#006699">
                CLUSTER 2
              </Text>
        </div>

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
              <Text fw={"bold"} size="lg" mt="md" color="#006699" style={{marginBottom:"-12px", marginTop:"10px"}}>
                HERMINIA D. NUNEZ
              </Text>

              <Text mt="xs" size="sm" style={{marginBottom:"-9px"}}>
                Chief, Human Resource Development Office
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
              src={MA_Mariano}
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
                DR. MARIA ANA B. MARIANO
              </Text>

              <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
               Chief, University Health Services
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
              src={C_Sarip}
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
               CONSUELO T. SARIP
              </Text>

              <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
                Chief, University Security Office
              </Text>
            </div>
            </Card>
          </Grid.Col>
        </Grid>

        <Divider c="#eeee" size="md" />

      <div>
        <Text fz="xl" fw="bold" p="md">
        Officials reporting to the VP for Finance</Text>
      </div>

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
              src={N_Laurente}
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
              NANETTE E. LAURENTE
              </Text>

              <Text mt="xs" size="sm" style={{marginBottom:"-9px"}}>
              Treasurer of the University
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
              LUZVIMINDA E. OROZCO
              </Text>

              <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
              Chief, Accounting Office
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
              MARIBETH P. SOLQUIO
              </Text>

              <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
              OIC, Budget Office
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
          <Grid.Col span={10} />
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
              GILBERT S. DADOR
              </Text>

              <Text mt="xs" size="sm">
              OIC, Procurement Office
              </Text>
            </div>
            
            </Card>
          </Grid.Col>
        </Grid>
    </Box>
  );
}

export default Directors;
