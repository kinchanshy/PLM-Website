import React from "react";
import { Image, Text, Box, Divider, Grid } from "@mantine/core";
import pic2 from "./Images/AP_1.jpg";
import pic1 from "./Images/PLM_2.jpg";
import pic3 from "./Images/tbayan2.jpg";


function Campus() {
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
          CAMPUS
        </Text>
      </div>
      <Divider c="#eeee" size="md" />

      <div>
        <Text p="xs">
        Visit our historic campus and be among the few privileged to study in the heritage and political capital of the Philippines.
        </Text>
      </div>

      <Grid
        columns={40}
        style={{
          display: "flex",
          paddingTop: "2rem",
         
          
        }}
      >
        <Grid.Col span={20}>
            <Image src={pic1} p="md" />
      </Grid.Col>
        <Grid.Col span={20}>

      <div style={{ padding: "1rem"}}>
          <Text>PLM is a public university located in the heart of Manila, Philippines. It is one of the most prestigious universities in the country, known for its academic excellence and commitment to social responsibility.</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text>PLM offers a wide range of undergraduate and graduate programs in various disciplines, including engineering, medicine, nursing, business administration, arts and sciences, and education. </Text>
      </div>
      </Grid.Col>
      </Grid>

      <div style={{ padding: "1rem"}}>
        <Text>The university also has a strong research and innovation culture, with its faculty and students working on groundbreaking projects that address some of the most pressing challenges facing the country and the world. PLM is more than just a place of learning; it is a vibrant and inclusive community where students from all walks of life can thrive. The university prides itself on its diverse student body, which reflects the rich tapestry of Philippine culture.</Text>
      </div>

      <Grid
        columns={40}
        style={{
          display: "flex",
          paddingTop: "2rem",
         
          
        }}
      >
        <Grid.Col span={20}>
            <div style={{ padding: "1rem"}}>
            <Text>PLM students have access to a wide range of resources and opportunities to help them succeed academically and personally. The university has state-of-the-art facilities, including well-equipped libraries, laboratories, and classrooms. PLM also offers a variety of student services, such as career counseling, financial assistance, and mental health support.</Text>
            </div>
      </Grid.Col>
        <Grid.Col span={20}>
            <Image src={pic2} p="md" />
      </Grid.Col>
      </Grid>

      <Grid
        columns={40}
        style={{
          display: "flex",
          paddingTop: "2rem",
         
          
        }}
      >
        <Grid.Col span={20}>
            <Image src={pic3} p="md" />
      </Grid.Col>
        <Grid.Col span={20}>

      <div style={{ padding: "1rem"}}>
          <Text>In addition to their academic pursuits, PLM students are also encouraged to get involved in extracurricular activities. The university has a wide range of clubs and organizations, catering to different interests, such as sports, arts, culture, and community service. </Text>
      </div>
      </Grid.Col>
      </Grid>

      <div style={{ padding: "1rem"}}>
          <Text>PLM is committed to helping its students become well-rounded individuals who are prepared to make a positive impact on the world. The university's values of excellence, inclusivity, and social responsibility are reflected in everything it does.</Text>
      </div>
    </Box>
  );
}

export default Campus;
