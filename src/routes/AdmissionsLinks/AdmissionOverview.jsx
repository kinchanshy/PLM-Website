import React from "react";
import { Image, Text, Box, Divider, Grid, BackgroundImage } from "@mantine/core";
import pic from "./Images/UnivProfile.png";
import sibuyas from "../../assets/sibuyas.png";
import {crs, crsAdmission, admissionBusinessCard} from "./links";
import PictureAdmission from "../../components/PictureAdmission";
import BusinessCard from "../../components/BusinessCardAdmission";

function AdmissionOverview() {
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
          ADMISSION OVERVIEW
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      
      <div style={{ backgroundColor: "#602D92", color: "white" }}>
        <div>
          <Text fz="md" fw="bold" p="md">
            Admission Overview
          </Text>
        </div>

        <div style={{ padding: "0rem 1rem 1rem 1rem" }}>
          <Text fz="sm">
          As a scholar's university, entrance requirements are selective, while screening for academic performance continues up to graduation.  Admission to the 
          undergraduate education is governed by the PLM Admission Test (PLMAT) for undergraduate colleges. The College of Law Admission Test (CLAT) and the 
          Medical College Admission Test (MCAT) select those who will be admitted to the professional schools. The graduate schools administer their respective 
          admission processes.
          </Text>
        </div>
      </div>
      
      <Grid
        columns={20}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid.Col span={10}>
          <div>
              <Text fz="3rem" fw="bold" p="md">
                Why PLM?
              </Text>
          </div>

          <div style={{padding: "1rem"}}>
              <Text>
              PLM upholds a strong commitment to academic excellence, boasting a distinguished faculty and rigorous programs that equip students for the challenges of tomorrow. The university's dedication to fostering diversity and inclusivity creates a vibrant multicultural environment that encourages cross-cultural understanding and appreciation.
              </Text>
          </div>

          <div style={{padding: "1rem"}}>
              <Text>
              PLM provides access to cutting-edge facilities, financial aid opportunities, and scholarships, ensuring education is both accessible and affordable. Furthermore, the institution's strong connections to successful alumni and community engagement initiatives offer students a well-rounded education that extends beyond the confines of the classroom.
              </Text>
          </div>
          
          <div style={{padding: "1rem"}}>
              <Text>
              PLM not only imparts knowledge and skills but also instills a profound sense of social responsibility, preparing students for fulfilling careers and active engagement in their communities.
              </Text>
          </div>
        </Grid.Col>

        <Grid.Col span={10}>
          <Image src={pic} p="md" height={"700rem"}/>
        </Grid.Col>
      </Grid>
      

      <BackgroundImage
        src={sibuyas}
        style={{boxShadow: "inset 0 0 0 2000px rgb( 0, 0, 0, 0.50"}}
        
      >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
        }}
      >

        <PictureAdmission
          links={crs}
          maw={250}
          overlay="true"
          opacity={0.8}
          height="30svh"
          size="2rem"
          col="3"
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
        }}
      >

        <PictureAdmission
            links={crsAdmission}
            maw={250}
            overlay="true"
            opacity={0.8}
            height="30svh"
            size="2rem"
            col="2"
          />
        </div>
        </BackgroundImage>

        <div>
          <BusinessCard {...admissionBusinessCard} />
        </div>
    </Box>
  );
}

export default AdmissionOverview;
