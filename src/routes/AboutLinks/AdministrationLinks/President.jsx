import React from "react";
import { Button, Text, Box, Divider, Grid, Image, Space, Card } from "@mantine/core";
import new_pres from "../Images/new_pres.png";
import univ_pres from "../Images/univ_president.jpg";
import pres_sonny from "../Images/Pres_sonny.jpg";

function President({ title }) {
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

      <Space h="xl" />
        
      <Card
        shadow="sm"
        component="a"
        target="_blank"
      >
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
          <Image
              src={new_pres}
              alt="No way!"
              style={{
                width: '100%', // Set the width to 100%
                height: '100%', // Set the height to 100%
                objectFit: 'cover', // Crop the image to cover the container
                transformOrigin: 'top left', // Set the origin of the transformation to the top
              }}
            />
            </Card.Section>
            <div>
            <Text mt="xs" size="sm" style={{fontStyle:"italic"}}>
            Atty. Domingo Reyes Jr. is the 11th duly-elected president of PLM
            </Text>
          </div>
      </Card>
      
      <div style={{ padding: "1rem" }}>
          <Text>Pamantasan ng Lungsod Maynila is proud to announce Atty. Domingo Reyes, Jr. as the new President of the university. Atty. Reyes is poised to lead PLM to new heights in the years to come with his impressive background and a commitment to excellence in higher education. He is a writer, professor, lecturer, speaker, consultant and PAASCU accreditor, among others, and committed to public service.</Text>
      </div>

      <div style={{ padding: "1rem" }}>
          <Text>President Reyes, known as “Sir Sonny” to many, will bring a wealth of experience to PLM, having served in various leadership roles within academia, including as a special assistant to the Chancellor at De La Salle College of St. Benilde and special assistant to the Vice Chancellor for Academics. He is also a Correspondent Lawyer and Psychologist, and has worked as a Human Resource Manager in various private companies. He understands the challenges and opportunities that universities are confronted with today.</Text>
      </div>

      <div style={{ padding: "1rem" }}>
          <Text>President Reyes received his Doctor of Philosophy in Higher Education Management, with Highest Academic Distinction, from Centro Escolar University, his Juris Doctor from Manuel L. Quezon University, and his Master of Laws from Pamantasan ng Lungsod ng Maynila. Sir Sonny is clearly one of our own. His vision for the future of PLM aligns perfectly with our institution's mission and values.</Text>
      </div>

      <div style={{ padding: "1rem" }}>
          <Text>As President Reyes takes the helm at PLM, together with the newly appointed Board of Regents, Dr. Joseph Berlin Juanzon, Dr. Neri Pescadera, and PLM’s new Board of Regents Chairperson Atty. Edward Serapio. With incumbent Board of Regents Wilma Galvante and Rita Riddle, they will work collaboratively with students, faculty, staff, and the broader community to continue building on the university's proud tradition of academic excellence and innovation. Their leadership will be instrumental in advancing our commitment to fostering a diverse and inclusive campus environment that embraces the full spectrum of human potential.</Text>
      </div>

      <Grid
        columns={30}
        gutter={"-3rem"}
      >

          <Grid.Col span={10}>
            <Image
                src={univ_pres}
                alt="No way!"
                style={{
                  width: '100%', // Set the width to 100%
                  height: '100%', // Set the height to 100%
                  objectFit: 'cover', // Crop the image to cover the container
                  transformOrigin: 'top left', // Set the origin of the transformation to the top
                  borderRadius: 7
                }}
              />
            </Grid.Col>

            <Grid.Col span={20}>
              <Image
                src={pres_sonny}
                alt="No way!"
                style={{
                  width: '100%', // Set the width to 100%
                  height: '100%', // Set the height to 100%
                  objectFit: 'cover', // Crop the image to cover the container
                  transformOrigin: 'top left', // Set the origin of the transformation to the top
                  borderRadius: 7
                }}
              />
          </Grid.Col>
        </Grid>

      <Divider />

      <div>
        <Text fz="xl" fw="bold" p="md">
        Past University Presidents</Text>
      </div>

      <div style={{ padding: "1rem" }}>
          <Text>Get to know the men and women whose vision and leadership shaped PLM to become the renowned and respected university 
that it is today.</Text>
      </div>

      <div style={{ padding: "1rem" }}>
        <Button
          radius="md"
          className="button"
          c="black"
          uppercase
          //onClick={}
        >
          <Text>PAST PLM PRESIDENTS (ARCHIVE)</Text>
        </Button>
      </div>

      <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >
      <Grid.Col span={10}>
        <div style={{ padding: ".5rem" }}>
          <Text fz="lg" p="xs" fw="bold">
          DR. BENITO REYES
          </Text>
        </div>
        
        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>President</Text>
        </div>

        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>Feb 23, 1996 to Jun 23, 1972</Text>
        </div>

        <div style={{ padding: ".5rem" }}>
          <Text fz="lg" p="xs" fw="bold">
          DR. JOSE D. VILLANUEVA
          </Text>
        </div>
        
        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>President</Text>
        </div>

        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>Jan 14, 1983 to Jun 30, 1989</Text>
        </div>
      </Grid.Col>
      <Grid.Col span={10}>
        <div style={{ padding: ".5rem" }}>
          <Text fz="lg" p="xs" fw="bold">
          DR. CONSUELO S. BLANCO
          </Text>
        </div>
        
        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>President</Text>
        </div>

        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>Dec 21, 1972 to May 31, 1978</Text>
        </div>

        <div style={{ padding: ".5rem" }}>
          <Text fz="lg" p="xs" fw="bold">
          DR. BENJAMIN D. TAYABAS
          </Text>
        </div>
        
        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>President</Text>
        </div>

        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>Jul 2, 1989 to Jun 24, 1996</Text>
        </div>

        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>Feb 23, 2000 to Feb 22, 2006</Text>
        </div>

        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>Jun 2, 2006 to Aug 1, 2007</Text>
        </div>
      </Grid.Col>
      <Grid.Col span={10}>
        <div style={{ padding: ".5rem" }}>
          <Text fz="lg" p="xs" fw="bold">
          HON. MAYOR RAMON BAGATSING
          </Text>
        </div>
        
        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>President</Text>
        </div>

        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>Jun 1, 1978 to Oct 27, 1982</Text>
        </div>

        <div style={{ padding: ".5rem" }}>
          <Text fz="lg" p="xs" fw="bold">
          DR. VIRSELY M. DELA CRUZ
          </Text>
        </div>
        
        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>President</Text>
        </div>

        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>Jun 25, 1996 to Apr 30, 1999</Text>
        </div>
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
        <div style={{ padding: ".5rem" }}>
          <Text fz="lg" p="xs" fw="bold">
          ATTY. JOSE M. ROY III
          </Text>
        </div>
        
        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>President</Text>
        </div>

        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>Feb 24, 2006 to Jun 1, 2006</Text>
        </div>

        <div style={{ padding: ".5rem" }}>
          <Text fz="lg" p="xs" fw="bold">
          ATTY. ADEL A. TAMANO
          </Text>
        </div>
        
        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>President</Text>
        </div>

        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>Aug 9, 2007 to Nov 31, 2009</Text>
        </div>

        <div style={{ padding: ".5rem" }}>
          <Text fz="lg" p="xs" fw="bold">
          DR. MA. LEONORA V. DE JESUS
          </Text>
        </div>
        
        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>President</Text>
        </div>

        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>Sep 2014 to Jun 2019</Text>
        </div>

      </Grid.Col>
      <Grid.Col span={10}>
        <div style={{ padding: ".5rem" }}>
          <Text fz="lg" p="xs" fw="bold">
          DR. MA. CORAZON T. VERIDIANO
          </Text>
        </div>
        
        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>President</Text>
        </div>

        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>May 1, 1999 to Dec 14, 1999</Text>
        </div>

        <div style={{ padding: ".5rem" }}>
          <Text fz="lg" p="xs" fw="bold">
          ATTY. RAFAELITO M. GARAYBAS
          </Text>
        </div>
        
        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>President</Text>
        </div>

        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>Dec 1, 2009 to Jun 30, 2013</Text>
        </div>

        <div style={{ padding: ".5rem" }}>
          <Text fz="lg" p="xs" fw="bold">
          PROF. EMMANUEL A. LEYCO
          </Text>
        </div>
        
        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>President</Text>
        </div>

        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>Jul 1, 2019 to Oct 15, 2023</Text>
        </div>

      </Grid.Col>
      <Grid.Col span={10}>
        <div style={{ padding: ".5rem" }}>
          <Text fz="lg" p="xs" fw="bold">
          ATTY. EMMANUEL R. SISON
          </Text>
        </div>
        
        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>President</Text>
        </div>

        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>Dec 15, 1999 to Feb 22, 2000</Text>
        </div>

        <div style={{ padding: ".5rem" }}>
          <Text fz="lg" p="xs" fw="bold">
          JUSTICE ARTEMIO G. TUQUERO
          </Text>
        </div>
        
        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>President</Text>
        </div>

        <div style={{ padding: "1rem", marginTop: "-2rem", color:"#848482"}}>
            <Text>Jul 3, 2013 to Sep 17, 2014</Text>
        </div>
      </Grid.Col>
      </Grid>

      
    </Box>
  );
}

export default President;
