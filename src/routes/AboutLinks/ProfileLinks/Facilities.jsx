import React from "react";
import { Image, Text, Box, Divider, Grid } from "@mantine/core";
import UAC from "../Images/UAC.jpg";
import Lib from "../Images/library.jpg";
import Lib1 from "../Images/library1.png";
import ComLab from "../Images/comlab.jpg";
import TBayan from "../Images/tbayan.jpg";
import JAA from "../Images/jaa.jpg";


function Facilities({ title }) {
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

      <div style={{ padding: ".5rem" }}>
        <Text p="xs">
        Visit our historic campus and be among the few privileged to study in the heritage capital of the Philippines.
        </Text>
      </div>
      
      <Grid
        columns={40}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid.Col span={20}>
       <Image src={UAC} p="md" />
      </Grid.Col>
        <Grid.Col span={20}>
      <div>
        <Text fz="xl" fw="bold" p="md">
        University Activity Center
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
          <Text>The University Activity Center at Pamantasan ng Lungsod ng Maynila (PLM) is a dynamic and versatile facility designed to host a wide range of events and activities on the university campus. It serves as a hub for various student and academic functions, cultural and social events, seminars, workshops, and more. This multi-purpose venue is at the heart of the university's campus life, fostering a vibrant and engaging environment for students and the entire PLM community.</Text>
      </div>
      </Grid.Col>
      
      
      </Grid>

      <div style={{ padding: "1rem" }}>
          <Text>Whether it's hosting academic conferences, cultural performances, or extracurricular activities, the University Activity Center plays a pivotal role in enhancing the overall educational and cultural experience at PLM.</Text>
      </div>

      <Grid
        columns={40}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid.Col span={20}>
      <div>
        <Text fz="xl" fw="bold" p="md">
        School Library
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
          <Text>The School Library of Pamantasan ng Lungsod ng Maynila (PLM) is an essential academic resource dedicated to facilitating research, learning, and intellectual growth within the university community. The library features an extensive collection of books, journals, digital resources, and multimedia materials that support various fields of study. With its welcoming and conducive atmosphere, it provides students and faculty with a space for quiet study, research, and collaborative work.</Text>
      </div>
      </Grid.Col>
      <Grid.Col span={20}>
       <Image src={Lib} p="md" />
      </Grid.Col>
      </Grid>

      <Grid
        columns={40}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid.Col span={20}>
       <Image src={Lib1} p="md" />
      </Grid.Col>
        <Grid.Col span={20}>
      <div style={{ padding: "1rem" }}>
          <Text>The PLM School Library is not only a repository of knowledge but also a hub for academic development. It regularly organizes workshops, seminars, and other educational events to enhance information literacy, research skills, and the overall learning experience of its users. As a cornerstone of academic excellence at PLM, the library plays a pivotal role in nurturing the intellectual pursuits of students and faculty members.</Text>
      </div>
      </Grid.Col>
      </Grid>
      
      <Grid
        columns={40}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid.Col span={20}>
       <Image src={ComLab} p="md" />
      </Grid.Col>
        <Grid.Col span={20}>
      <div>
        <Text fz="xl" fw="bold" p="md">
        Computer Laboratory
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
          <Text>The Computer Laboratories at Pamantasan ng Lungsod ng Maynila (PLM) are state-of-the-art facilities designed to cater to the technological needs of students, faculty, and staff. These labs are equipped with modern computer systems and software applications, providing a dynamic environment for research, learning, and skill development. It offer a wide range of resources, from basic software programs to specialized tools used in various academic disciplines.</Text>
      </div>
      </Grid.Col>
      </Grid>

      <div style={{ padding: "1rem" }}>
          <Text>They support the academic curriculum and research activities of the university by providing access to digital resources, internet connectivity, and a productive setting for tasks such as data analysis, programming, and multimedia production.
In addition to academic use, these labs are often utilized for workshops, training sessions, and seminars to enhance computer literacy and skills among PLM's students and staff. The computer laboratories play a crucial role in promoting technological proficiency and supporting the digital education landscape at Pamantasan ng Lungsod ng Maynila.</Text>
      </div>

      <Grid
        columns={40}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid.Col span={20}>
      <div>
        <Text fz="xl" fw="bold" p="md">
        Tanghalang Bayan and University Field
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
          <Text>Tanghalang Bayan at Pamantasan ng Lungsod ng Maynila (PLM) is a cultural and performance venue that serves as a vibrant center for artistic and creative expression within the university community. This multipurpose theater plays a pivotal role in fostering the performing arts, cultural activities, and entertainment at PLM. hosts a variety of events, including theatrical productions, musical performances, dance recitals, lectures, and conferences.</Text>
      </div>
      </Grid.Col>
      <Grid.Col span={20}>
       <Image src={TBayan} p="md" />
      </Grid.Col>
      </Grid>

      <div style={{ padding: "1rem" }}>
          <Text>It provides a platform for students, faculty, and external artists to showcase their talents and engage with diverse audiences. The theater's modern amenities, including sound and lighting systems, make it a versatile space suitable for a wide range of artistic and academic endeavors.</Text>
      </div>

      <div style={{ padding: "1rem" }}>
          <Text>The Field at PLM serves as a multi-purpose open space for various outdoor activities. It is a versatile area used for sports and recreational events, outdoor gatherings, and physical education classes. The Field offers students and the university community an opportunity for physical fitness, sports competitions, and leisure. It plays a pivotal role in promoting a healthy and active lifestyle among students and fostering a sense of community through outdoor events and activities.</Text>
      </div>

      <Grid
        columns={40}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid.Col span={20}>
       <Image src={JAA} p="md" />
      </Grid.Col>
        <Grid.Col span={20}>
      <div>
        <Text fz="xl" fw="bold" p="md">
        Justo Albert Auditorium
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
          <Text>The Justo Albert Auditorium at Pamantasan ng Lungsod ng Maynila (PLM) is a prestigious and well-appointed venue known for its significance in hosting a wide range of academic, cultural, and community events. Named after Justo Alberto, a prominent figure in Philippine law, the auditorium is a reflection of PLM's commitment to excellence and the advancement of education.</Text>
      </div>
      </Grid.Col>
      </Grid>

      <div style={{ padding: "1rem" }}>
          <Text>This auditorium is equipped with modern audiovisual facilities and can accommodate a significant number of attendees, making it ideal for academic conferences, seminars, lectures, and special ceremonies. It is also a preferred location for cultural events, including music performances, theater productions, and art exhibitions, serving as a platform for showcasing the talents and creativity of the PLM community.</Text>
      </div>

      <div style={{ padding: "1rem" }}>
          <Text>Beyond the academic and cultural spheres, the Justo Alberto Auditorium is often used to host community-oriented activities, further strengthening the university's ties with the surrounding community.</Text>
      </div>
    </Box>
  );
}

export default Facilities;

