import React from "react";
import { Text, Box, Divider, ActionIcon, Group, List } from "@mantine/core";
import { IconBrandYoutubeFilled } from '@tabler/icons-react';


function Hymn({ title }) {
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
        Music helps unite the PLM community. Every Monday and official school activity, students, faculty, and staff alike sing in unison 
the “Pamantasang Mahal”, PLM’s official hymn.
        </Text>
      </div>
  
      <div style={{ padding: ".5rem" }}>
        <Text p="xs">
        Lyrics: Gatpuno Antonio J. Villegas, Mayor of Manila (1968)</Text>
        </div> 
      
      <div style={{ padding: ".5rem", marginTop: "-2rem" }}>
        <Text p="xs">
        Lyrics presented to the Board of Regents in Maharnilad (official name of the famous Manila City Hall).</Text>
        </div> 
        
       
      
      <div style={{ padding: "1rem" }}>
          <Text>Music: Prof. Felipe Padilla de Leon</Text>
      </div>

      <div style={{ width: "100%", height: "100%", overflow: "hidden", border: "1rem solid #D9D9D9", borderRadius:".5rem" }}>
        
      <Group
              gap={10}
              wrap="nowrap"
              style={{
                background: "#D9D9D9",
                paddingBottom:".5rem"
              }}
            >
          <ActionIcon
          variant="transparent"
          c="black"
          size={"lg"}
        >
              <IconBrandYoutubeFilled />
          </ActionIcon>
          <Text fw={"bold"} fz={"1rem"}>Youtube</Text>
        </Group>
        <iframe
          src={"https://www.youtube.com/embed/yPf9vKW04cs"}
          title={"Youtube Player"}
          width="100%"
          style={{ width: "100%", height: "60vh",}}
        />
      </div>

      <div style={{padding:"2rem 1rem 1rem 1rem" }}>
        <Text fz="xl" fw="bold" >
        Pamantasang Mahal
        </Text>
      </div>


      <div style={{ fontStyle:"italic", padding: "1rem" }}>
          <Text>Official hymn of the Pamantasan ng Lungsod ng Maynila</Text>
      </div>
      
      <div style={{fontStyle:"italic", padding:"1rem"}}>
        <List listStyleType="none">
            <List.Item>Pamantasan, Pamantasang Mahal</List.Item>
            <List.Item>Nagpupugay kami't nag-aalay</List.Item>
            <List.Item>Ng Pag-ibig, taos na paggalang</List.Item>
            <List.Item>Sa patnubay ng aming isipan.</List.Item>
        </List>
        <br />
        <List listStyleType="none">
            <List.Item>Karunungang tungo'y kaunlaran</List.Item>
            <List.Item>Hinuhubog kaming kabataan</List.Item>
            <List.Item>Maging Pilipinong mero'ng dangal</List.Item>
            <List.Item>Puso'y tigib ng kadakilaan.</List.Item>
        </List>
        <br />
        <List listStyleType="none">
            <List.Item>Pamantasang Lungsod ng Maynila</List.Item>
            <List.Item>Kaming lahat dito'y iyong punla</List.Item>
            <List.Item>Tutuparin pangarap mo't nasa</List.Item>
            <List.Item>Pamantasan kami'y nanunumpa.</List.Item>
            <List.Item>Pamantasan kami'y nanunumpa.</List.Item>
        </List>
      </div>
    </Box>
  );
}

export default Hymn;

