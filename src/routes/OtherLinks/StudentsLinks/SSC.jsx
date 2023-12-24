import React from "react";
import { Card, Text, Box, Divider, Grid, Image, Group, ActionIcon, } from "@mantine/core";
import pic from "./Images/CRS.png";
import { IconMail, IconBrandFacebook } from '@tabler/icons-react';
import SCAccordion from "../../../components/Accordions";
import { accordionItems } from "./links";


function SSC({ selectedLink }) {
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

      <div>
        <Text fz="xl" fw="bold" p="md">
        PLM Supreme Student Council
        </Text>
      </div>

      <Grid
        columns={40}
        style={{
          display: "flex",
         
          
        }}
      >
        <Grid.Col span={20}>
       <Image src={pic} p="md" />
      </Grid.Col>
        <Grid.Col span={20}>

      <div style={{ padding: "1rem"}}>
          <Text>The PLM Supreme Student Council is the highest duly constituted student government of the university which initiates student activities geared towards the holistic development of its student members.</Text>
      </div>
      </Grid.Col>
      </Grid>

      <div style={{ padding: "1rem"}}>
          <Text>As the highest student government in PLM, the Supreme Student Council is at the forefront of promoting and advancing student rights and welfare. It has slated a range of programs, initiatives and advocacies that do not merely redound to the welfare of the PLM scholars, but would also impact to the overall well-being of the community and the society in general.</Text>
      </div>

      <Grid
        columns={40}
        style={{
          display: "flex",
          padding: "2rem 0 2rem 0",
        }}
      >
        <Grid.Col span={20} style={{paddingLeft: "6rem"}}>
          <Card shadow="sm" radius="md" withBorder style={{ width: 'fit-content', height: 'fit-content'}}>

              <Group mt="xxs" mb="xs">
              
                <ActionIcon c="color.4">
                  <IconMail size="1.125rem" />
                </ActionIcon>
                    
                <Text weight={500}>Email</Text>
            
              </Group>

              <Text size="sm" color="dimmed" style={{paddingLeft:"2.75rem"}}>
              theplm.ssc@gmail.com
              </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={20} style={{paddingRight: "6rem"}}>
          <Card shadow="sm" radius="md" withBorder style={{ width: 'fit-content', height: 'fit-content'}}>

              <Group mt="xxs" mb="xs">
              
                <ActionIcon c="#150094">
                  <IconBrandFacebook size="1.125rem" />
                </ActionIcon>
                    
                <Text weight={500}>Facebook</Text>
            
              </Group>

              <Text size="sm" color="dimmed" style={{paddingLeft:"2.75rem"}}>
              https://www.facebook.com/pg/plmssc
              </Text>
          </Card>
        </Grid.Col>
      </Grid>
      
      <div style={{ padding: "1rem"}}>
          <Text>The PLM Supreme Student Council works closely with the student councils of all the colleges and school to promote student welfare. Below are their contact details:</Text>
      </div>

      <div style={{ padding: "1rem" }}>
        <SCAccordion items={accordionItems} />
      </div>

    </Box>
  );
}

export default SSC;
