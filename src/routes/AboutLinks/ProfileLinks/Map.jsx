import React from "react";
import { Image, Text, Box, Divider, Grid, Space } from "@mantine/core";
import map1 from "../Images/map1.jpg";
import map2 from "../Images/map2.jpg";


function Map({ title }) {
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
        columns={20}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >

      <Grid.Col span={10}>
        <Image
            src={map1}
            alt="No way!"
            style={{
              width: '100%', // Set the width to 100%
              height: '100%', // Set the height to 100%
              objectFit: 'cover', // Crop the image to cover the container
              transformOrigin: 'top left', // Set the origin of the transformation to the top
            }}
          />
        </Grid.Col>

        <Grid.Col span={10}>
          <Image
            src={map2}
            alt="No way!"
            style={{
              width: '100%', // Set the width to 100%
              height: '100%', // Set the height to 100%
              objectFit: 'cover', // Crop the image to cover the container
              transformOrigin: 'top left', // Set the origin of the transformation to the top
            }}
          />
      </Grid.Col>
    </Grid>

    <Space h="lg" />

      <div>
        <Text fz="xl" fw="bold" p="md">
        VICINITY MAP
        </Text>
      </div>

      
      <div>
        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style={{borderRadius:"1rem"}} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Pamantasan%20ng%20Lungsod%20ng%20Maynila%20General%20Luna,%20corner%20Muralla%20St,%20Intramuros,%20Manila,%201002%20Metro%20Manila+(Pamantasan%20ng%20Lungsod%20ng%20Maynila)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">PLM</a></iframe>
      </div>
    </Box>
  );
}

export default Map;