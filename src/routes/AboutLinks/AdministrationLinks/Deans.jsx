import React from "react";
import { List, Text, Box, Divider, Grid, Image, Card, Space } from "@mantine/core";
import DUMMY from "../Images/DUMMY.png";
import JA_Cruz from "../Images/JA_Cruz.jpg";
import J_Romero from "../Images/J_Romero.jpg";
import J_Tallara from "../Images/J_Tallara.jpg";
import D_Cortez from "../Images/D_Cortez.jpg";
import M_SDomingo from "../Images/M_SDomingo.jpg";
import JH_Hofilena from "../Images/JH_Hofilena.jpg";
import DP_Ramos from "../Images/DP_Ramos.jpg";
import A_Magpantay from "../Images/A_Magpantay.jpg";
import A_Atienza from "../Images/A_Atienza.jpg";
import N_Gocuyo from "../Images/N_Gocuyo.jpg";
import P_Rio from "../Images/P_Rio.jpg";

function Deans({ selectedSublink }) {
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
      
      <div>
        <Text fz="4vh" fw="bold" p="md" color="#A31920">
        College of Architecture and Urban Planning</Text>
      </div>
      
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >

      <Grid.Col span={10}>
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={JA_Cruz}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '100%', // Set the height to 100%
            objectFit: 'cover',
            paddingLeft: '1.5rem', // Crop the image to cover the container
          }}
        />
      </Card.Section>
      </Grid.Col>

      <Grid.Col span={20}>
      <div>
          <Text fw={"bold"} size="4vh" mt="md" color="#006699">
          Arch. Jared Aaron R. Cruz
          </Text>

          <Text mt="xs" size="xl" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
          DEAN
          </Text>

          <Space h="lg" />

          <List size="md">
          <List.Item>
            <Text>Master of Engineering Management with specialization in Construction</Text>
          </List.Item>
          <List.Item>
            <Text>Management, Pamantasan ng Lungsod ng Maynila</Text>
          </List.Item>
          <List.Item>
            <Text>Bachelor of Science in Architecture, Pamantasan ng Lungsod ng Maynila</Text>
          </List.Item>
          <List.Item>
            <Text>Registered and Licensed Architect</Text>
          </List.Item>
          <List.Item>
            <Text>4th Place, June 2010 Architect Licensure Exam</Text>
          </List.Item>
        </List>
        </div>
        </Grid.Col>
      </Grid>
    </Card>

    <div>
        <Text fz="4vh" fw="bold" p="md" color="#A31920">
        College of Education</Text>
      </div>
      
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >

      <Grid.Col span={10}>
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={J_Romero}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '100%', // Set the height to 100%
            objectFit: 'cover',
            paddingLeft: '1.5rem', // Crop the image to cover the container
          }}
        />
      </Card.Section>
      </Grid.Col>

      <Grid.Col span={20}>
      <div>
          <Text fw={"bold"} size="4vh" mt="md" color="#006699">
          Dr. Jimmy M. Romero
          </Text>

          <Text mt="xs" size="xl" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
          DEAN
          </Text>

          <Space h="lg" />

          <List size="md">
          <List.Item>
            <Text>Doctor of Education in Educational Administration, Pamantasan ng Lungsod ng Maynila</Text>
          </List.Item>
          <List.Item>
            <Text>Master of Science in Mathematics Education, Pamantasan ng Lungsod ng Maynila</Text>
          </List.Item>
          <List.Item>
            <Text>Chairman, Philippine Association for Teachers and Educators-NCR Chapter (PAFTE-NCR) for 2018-2020 and 2020-2022</Text>
          </List.Item>
          <List.Item>
            <Text>Licensed Professional Teacher</Text>
          </List.Item>
        </List>
        </div>
        </Grid.Col>
      </Grid>
    </Card>

    <div>
        <Text fz="4vh" fw="bold" p="md" color="#A31920">
        College of Engineering</Text>
      </div>
      
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >

      <Grid.Col span={10}>
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={J_Tallara}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '100%', // Set the height to 100%
            objectFit: 'cover',
            paddingLeft: '1.5rem', // Crop the image to cover the container
          }}
        />
      </Card.Section>
      </Grid.Col>

      <Grid.Col span={20}>
      <div>
          <Text fw={"bold"} size="4vh" mt="md" color="#006699">
          Engr. Juan C. Tallara, Jr.
          </Text>

          <Text mt="xs" size="xl" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
          DEAN
          </Text>

          <Space h="lg" />

          <List size="md">
          <List.Item>
            <Text>Doctor of Business Administration (ongoing), Pamantasan ng Lungsod ng Maynila</Text>
          </List.Item>
          <List.Item>
            <Text>Master of Engineering with specialization in Manufacturing Engineering, Pamantasan ng Lungsod ng Maynila</Text>
          </List.Item>
          <List.Item>
            <Text>Bachelor of Science in Mechanical Engineering, Pamantasan ng Lungsod ng Maynila</Text>
          </List.Item>
          <List.Item>
            <Text>Licensed Mechanical Engineer</Text>
          </List.Item>
        </List>
        </div>
        </Grid.Col>
      </Grid>
    </Card>

    <div>
        <Text fz="4vh" fw="bold" p="md" color="#A31920">
        College of Humanities, Arts, and Social Sciences</Text>
      </div>
      
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >

      <Grid.Col span={10}>
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={D_Cortez}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '100%', // Set the height to 100%
            objectFit: 'cover',
            paddingLeft: '1.5rem', // Crop the image to cover the container
          }}
        />
      </Card.Section>
      </Grid.Col>

      <Grid.Col span={20}>
      <div>
          <Text fw={"bold"} size="4vh" mt="md" color="#006699">
          Danilo S. Cortez, Jr.
          </Text>

          <Text mt="xs" size="xl" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
          DEAN
          </Text>

          <Space h="lg" />

          <List size="md">
          <List.Item>
            <Text>Master of Arts in Philippine Studies (Philippine Foreign Relations), University of the Philippines-Diliman</Text>
          </List.Item>
          <List.Item>
            <Text>Bachelor of Arts in Political Science (magna cum laude), Far Eastern University-Manila</Text>
          </List.Item>
          <List.Item>
            <Text>Executive Course on Remote Teaching and Learning, University of the Philippines-Open University</Text>
          </List.Item>
          <List.Item>
            <Text>Auditor, ASEAN Studies Association of the Philippines</Text>
          </List.Item>
        </List>
        </div>
        </Grid.Col>
      </Grid>
    </Card>

    <div>
        <Text fz="4vh" fw="bold" p="md" color="#A31920">
        College of Law</Text>
      </div>
      
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >

      <Grid.Col span={10}>
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={DUMMY}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '100%', // Set the height to 100%
            objectFit: 'cover',
            paddingLeft: '1.5rem', // Crop the image to cover the container
          }}
        />
      </Card.Section>
      </Grid.Col>

      <Grid.Col span={20}>
      <div>
          <Text fw={"bold"} size="4vh" mt="md" color="#006699">
          Atty. Magelio S. Arboladura
          </Text>

          <Text mt="xs" size="xl" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
          DEAN
          </Text>

          <Space h="lg" />

          <List size="md">
          <List.Item>
            <Text>Juris Doctor (JD), PLM College of Law</Text>
          </List.Item>
          <List.Item>
            <Text>Master of Laws (LLM) in Constitutional Law, Harvard Law School</Text>
          </List.Item>
          <List.Item>
            <Text>Licensed Attorney, Philippine Bar</Text>
          </List.Item>
          <List.Item>
            <Text>Former Chairperson of the Constitutional Law Department, PLM College of Law</Text>
          </List.Item>
          <List.Item>
            <Text>Legal consultant for a prominent national corporation</Text>
          </List.Item>
          <List.Item>
            <Text>Pro bono legal services for marginalized communities</Text>
          </List.Item>
          <List.Item>
            <Text>Speaker at legal awareness seminars</Text>
          </List.Item>
        </List>
        </div>
        </Grid.Col>
      </Grid>
    </Card>

    <div>
        <Text fz="4vh" fw="bold" p="md" color="#A31920">
        PLM Law Center</Text>
      </div>
      
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >

      <Grid.Col span={10}>
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={M_SDomingo}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '100%', // Set the height to 100%
            objectFit: 'cover',
            paddingLeft: '1.5rem', // Crop the image to cover the container
          }}
        />
      </Card.Section>
      </Grid.Col>

      <Grid.Col span={20}>
      <div>
          <Text fw={"bold"} size="4vh" mt="md" color="#006699">
          Atty. Mynoa Sto. Domingo
          </Text>

          <Text mt="xs" size="xl" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
          DEAN
          </Text>

          <Space h="lg" />

          <List size="md">
          <List.Item>
            <Text>Juris Doctor (JD), PLM College of Law</Text>
          </List.Item>
          <List.Item>
            <Text>Master of Laws (LLM) in International Law, Yale Law School</Text>
          </List.Item>
          <List.Item>
            <Text>Licensed Attorney, Philippine Bar</Text>
          </List.Item>
          <List.Item>
            <Text>Author of three legal treatises on international law</Text>
          </List.Item>
          <List.Item>
            <Text>Excellence in Legal Education Award, Philippine Bar Association</Text>
          </List.Item>
          <List.Item>
            <Text>Former Director of the PLM Law Center</Text>
          </List.Item>
          <List.Item>
            <Text>Legal advisor to a government agency on international legal matters</Text>
          </List.Item>
        </List>
        </div>
        </Grid.Col>
      </Grid>
    </Card>

    <div>
        <Text fz="4vh" fw="bold" p="md" color="#A31920">
        Graduate School of Law</Text>
      </div>
      
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >

      <Grid.Col span={10}>
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={JH_Hofilena}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '100%', // Set the height to 100%
            objectFit: 'cover',
            paddingLeft: '1.5rem', // Crop the image to cover the container
          }}
        />
      </Card.Section>
      </Grid.Col>

      <Grid.Col span={20}>
      <div>
          <Text fw={"bold"} size="4vh" mt="md" color="#006699">
          Justice Hector L. Hofileña (Ret.)
          </Text>

          <Text mt="xs" size="xl" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
          DEAN
          </Text>

          <Space h="lg" />

          <List size="md">
          <List.Item>
            <Text>Bachelor of Arts degree (magna cum laude), Ateneo de Manila University</Text>
          </List.Item>
          <List.Item>
            <Text>Bachelor of Laws degree (cum laude), Ateneo de Manila University</Text>
          </List.Item>
          <List.Item>
            <Text>Vice-Chairman, Department of Judicial Ethics of the Philippine Judicial Academy</Text>
          </List.Item>
          <List.Item>
            <Text>Former Associate Justice, Court of Appeals</Text>
          </List.Item>
          <List.Item>
            <Text>Former Bar Examiner for Civil Law in the 1996, 2000 and 2001 Bar Examinations</Text>
          </List.Item>
          <List.Item>
            <Text>Contributor, Benchbook for Philippine Judges</Text>
          </List.Item>
          <List.Item>
            <Text>Contributor, annotation of the New Code of Judicial Conduct for the Philippine Judiciary.</Text>
          </List.Item>
          <List.Item>
            <Text>Lecturer, Mandatory Continuing Legal Education seminars and Pre-Bar and Pre-Week lectures in Property, Legal & Judicial Ethics, and Practical Exercises</Text>
          </List.Item>
          <List.Item>
            <Text>Director of San Miguel Properties, Inc. and San Miguel Foods, Inc.</Text>
          </List.Item>
          <List.Item>
            <Text>Specialization: Succession, Legal and Judicial Ethics, Property, Persons and Family Relations, Administrative Law, and Conflict of Laws</Text>
          </List.Item>
        </List>
        </div>
        </Grid.Col>
      </Grid>
    </Card>

    <div>
        <Text fz="4vh" fw="bold" p="md" color="#A31920">
        College of Medicine</Text>
      </div>
      
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >

      <Grid.Col span={10}>
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={DUMMY}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '100%', // Set the height to 100%
            objectFit: 'cover',
            paddingLeft: '1.5rem', // Crop the image to cover the container
          }}
        />
      </Card.Section>
      </Grid.Col>

      <Grid.Col span={20}>
      <div>
          <Text fw={"bold"} size="4vh" mt="md" color="#006699">
          Dr. Rose Anna Banal
          </Text>

          <Text mt="xs" size="xl" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
          DEAN
          </Text>

          <Space h="lg" />

          <List size="md">
          <List.Item>
            <Text>Doctor of Medicine (MD), Pamantasan ng Lungsod ng Maynila</Text>
          </List.Item>
          <List.Item>
            <Text>Doctor of Philosophy (PhD) in Medical Education, University of the Philippines</Text>
          </List.Item>
          <List.Item>
            <Text>Board Certified Physician, Philippine Medical Board</Text>
          </List.Item>
          <List.Item>
            <Text>Former Chair of the Department of Medical Education, PLM College of Medicine</Text>
          </List.Item>
          <List.Item>
            <Text>Member of the Medical Board of a local hospital</Text>
          </List.Item>
        </List>
        </div>
        </Grid.Col>
      </Grid>
    </Card>

    <div>
        <Text fz="4vh" fw="bold" p="md" color="#A31920">
        College of Nursing</Text>
      </div>
      
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >

      <Grid.Col span={10}>
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={DP_Ramos}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '100%', // Set the height to 100%
            objectFit: 'cover',
            paddingLeft: '1.5rem', // Crop the image to cover the container
          }}
        />
      </Card.Section>
      </Grid.Col>

      <Grid.Col span={20}>
      <div>
          <Text fw={"bold"} size="4vh" mt="md" color="#006699">
          Dr. David Paul R. Ramos
          </Text>

          <Text mt="xs" size="xl" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
          DEAN
          </Text>

          <Space h="lg" />

          <List size="md">
          <List.Item>
            <Text>Doctor of Philosophy in Nursing Education major in Leadership and Management</Text>
          </List.Item>
          <List.Item>
            <Text>Master of Art in Nursing major in Nursing Administration</Text>
          </List.Item>
          <List.Item>
            <Text>Board of Director, Philippine Nurses Association Zone 1</Text>
          </List.Item>
          <List.Item>
            <Text>Associate member, DOST- National Research Council of the Philippines</Text>
          </List.Item>
          <List.Item>
            <Text>Former Vice President, Sigma Theta Tau Honor Society of Nursing- Phi Gamma Chapter</Text>
          </List.Item>
          <List.Item>
            <Text>Founding member, Association of Male Nurses of the Philippines</Text>
          </List.Item>
          <List.Item>
            <Text>Member, Triskelion Grand Fraternity</Text>
          </List.Item>
        </List>
        </div>
        </Grid.Col>
      </Grid>
    </Card>

    <div>
        <Text fz="4vh" fw="bold" p="md" color="#A31920">
        College of Physical Therapy</Text>
      </div>
      
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >

      <Grid.Col span={10}>
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={A_Magpantay}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '100%', // Set the height to 100%
            objectFit: 'cover',
            paddingLeft: '1.5rem', // Crop the image to cover the container
          }}
        />
      </Card.Section>
      </Grid.Col>

      <Grid.Col span={20}>
      <div>
          <Text fw={"bold"} size="4vh" mt="md" color="#006699">
          Alan P. Magpantay
          </Text>

          <Text mt="xs" size="xl" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
          DEAN
          </Text>

          <Space h="lg" />

          <List size="md">
          <List.Item>
            <Text>Master of Rehabilitation Science, University of the Philippines-Manila</Text>
          </List.Item>
          <List.Item>
            <Text>Certified Manual Therapist, University of Santo Tomas</Text>
          </List.Item>
        </List>
        </div>
        </Grid.Col>
      </Grid>
    </Card>

    <div>
        <Text fz="4vh" fw="bold" p="md" color="#A31920">
        College of Science</Text>
      </div>
      
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >

      <Grid.Col span={10}>
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={A_Atienza}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '100%', // Set the height to 100%
            objectFit: 'cover',
            paddingLeft: '1.5rem', // Crop the image to cover the container
          }}
        />
      </Card.Section>
      </Grid.Col>

      <Grid.Col span={20}>
      <div>
          <Text fw={"bold"} size="4vh" mt="md" color="#006699">
          Aileen I. Atienza, Ph.D.
          </Text>

          <Text mt="xs" size="xl" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
          DEAN
          </Text>

          <Space h="lg" />

          <List size="md">
          <List.Item>
            <Text>Doctor of Philosophy in Technology Management, Technological University of the Philippines-Manila</Text>
          </List.Item>
          <List.Item>
            <Text>Master of Engineering Management with specialization in Manufacturing Management, Pamantasan ng Lungsod ng Maynila</Text>
          </List.Item>
          <List.Item>
            <Text>Bachelor of Science in Chemical Engineering, Mapua Institute of Technology</Text>
          </List.Item>
        </List>
        </div>
        </Grid.Col>
      </Grid>
    </Card>

    <div>
        <Text fz="4vh" fw="bold" p="md" color="#A31920">
        PLM Business School</Text>
      </div>
      
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >

      <Grid.Col span={10}>
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={DUMMY}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '100%', // Set the height to 100%
            objectFit: 'cover',
            paddingLeft: '1.5rem', // Crop the image to cover the container
          }}
        />
      </Card.Section>
      </Grid.Col>

      <Grid.Col span={20}>
      <div>
          <Text fw={"bold"} size="4vh" mt="md" color="#006699">
          Bernard R. Letrero
          </Text>

          <Text mt="xs" size="xl" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
          DEAN
          </Text>

          <Space h="lg" />

          <List size="md">
          <List.Item>
            <Text>Master of Business Administration, Ateneo Graduate School of Business</Text>
          </List.Item>
          <List.Item>
            <Text>Bachelor of Science in Industrial Engineering, University of Santo Tomas</Text>
          </List.Item>
          <List.Item>
            <Text>Financial coach, Finance Boot Camp for Rustans Supercenter and Royal Subic</Text>
          </List.Item>
          <List.Item>
            <Text>Specialization: Sales management, business development, and franchising</Text>
          </List.Item>
        </List>
        </div>
        </Grid.Col>
      </Grid>
    </Card>

    <div>
        <Text fz="4vh" fw="bold" p="md" color="#A31920">
        School of Government</Text>
      </div>
      
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >

      <Grid.Col span={10}>
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={N_Gocuyo}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '100%', // Set the height to 100%
            objectFit: 'cover',
            paddingLeft: '1.5rem', // Crop the image to cover the container
          }}
        />
      </Card.Section>
      </Grid.Col>

      <Grid.Col span={20}>
      <div>
          <Text fw={"bold"} size="4vh" mt="md" color="#006699">
          Noemi C. Gocuyo
          </Text>

          <Text mt="xs" size="xl" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
          DEAN
          </Text>

          <Space h="lg" />

          <List size="md">
          <List.Item>
            <Text>Doctor of Business Administration (candidate), Pamantasan ng Lungsod ng Maynila</Text>
          </List.Item>
          <List.Item>
            <Text>Master of Government Management - Executive Special Program, Pamantasan ng Lungsod ng Maynila</Text>
          </List.Item>
          <List.Item>
            <Text>Bachelor of Science in Business Administration major in Economics, Pamantasan ng Lungsod ng Maynila</Text>
          </List.Item>
          <List.Item>
            <Text>Licensed Professional Teacher</Text>
          </List.Item>
        </List>
        </div>
        </Grid.Col>
      </Grid>
    </Card>

    <div>
        <Text fz="4vh" fw="bold" p="md" color="#A31920">
        School of Public Health</Text>
      </div>
      
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >

      <Grid.Col span={10}>
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={P_Rio}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '100%', // Set the height to 100%
            objectFit: 'cover',
            paddingLeft: '1.5rem', // Crop the image to cover the container
          }}
        />
      </Card.Section>
      </Grid.Col>

      <Grid.Col span={20}>
      <div>
          <Text fw={"bold"} size="4vh" mt="md" color="#006699">
          Dr. Phylis C. Rio
          </Text>

          <Text mt="xs" size="xl" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
          DEAN
          </Text>

          <Space h="lg" />

          <List size="md">
          <List.Item>
            <Text>Doctor in Public Administration (ongoing), Pamantasan ng Lungsod ng Maynila</Text>
          </List.Item>
          <List.Item>
            <Text>Doctor Medicine, Pamantasan ng Lungsod ng Maynila</Text>
          </List.Item>
          <List.Item>
            <Text>Master in Hospital Administration, Ateneo de Manila Professional School</Text>
          </List.Item>
          <List.Item>
            <Text>Master of Arts in Nursing, University of La Salette</Text>
          </List.Item>
          <List.Item>
            <Text>Bachelor of Science in Nursing, Dr. Yanga’s Colleges, Inc.</Text>
          </List.Item>
          <List.Item>
            <Text>Bachelor of Science in Biological Sciences, University of the Philippines-Manila</Text>
          </List.Item>
        </List>
        </div>
        </Grid.Col>
      </Grid>
    </Card>

    <div>
        <Text fz="4vh" fw="bold" p="md" color="#A31920">
        School of Social Work</Text>
      </div>
      
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >

      <Grid.Col span={10}>
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={DUMMY}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '100%', // Set the height to 100%
            objectFit: 'cover',
            paddingLeft: '1.5rem', // Crop the image to cover the container
          }}
        />
      </Card.Section>
      </Grid.Col>

      <Grid.Col span={20}>
      <div>
          <Text fw={"bold"} size="4vh" mt="md" color="#006699">
          Jeanniffer L. Muyot
          </Text>

          <Text mt="xs" size="xl" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
          DEAN
          </Text>

          <Space h="lg" />

          <List size="md">
          <List.Item>
            <Text>Master of Science in Social Work, Asian Social Institute (Academic scholar)</Text>
          </List.Item>
          <List.Item>
            <Text>Bachelor of Science in Social Work, St. Louis University (CHED scholar: NISGP)</Text>
          </List.Item>
          <List.Item>
            <Text>Registered Social Worker</Text>
          </List.Item>
        </List>
        </div>
        </Grid.Col>
      </Grid>
    </Card>
    </Box>
  );
}

export default Deans;
