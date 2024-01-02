import React from "react";
import { Text, Box, Divider, List } from "@mantine/core";


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

      <div>
        <Text fz="xl" fw="bold" p="md">
          VIDEO TO HA!
        </Text>
      </div>

      <div>
        <Text fz="xl" fw="bold" p="md">
        Pamantasang Mahal
        </Text>
      </div>


      <div style={{ padding: "1rem" }}>
          <Text fs={"italic"}>Official hymn of the Pamantasan ng Lungsod ng Maynila</Text>
      </div>

      <div style={{ padding: ".5rem" }}>
        <Text p="xs" fs={"italic"}>
        Pamantasan, Pamantasang Mahal</Text>
        </div> 
      
      <div style={{ padding: ".5rem", marginTop: "-2rem" }}>
        <Text p="xs" fs={"italic"}>
        Nagpupugay kami't nag-aalay</Text>
        </div> 

      <div style={{ padding: ".5rem", marginTop: "-2rem" }}>
        <Text p="xs" fs={"italic"}>
        Ng Pag-ibig, taos na paggalang</Text>
        </div> 

      <div style={{ padding: ".5rem", marginTop: "-2rem" }}>
        <Text p="xs" fs={"italic"}>
        Sa patnubay ng aming isipan.</Text>
        </div> 


      <div style={{ padding: ".5rem" }}>
        <Text p="xs" fs={"italic"}>
        Karunungang tungo'y kaunlaran</Text>
        </div> 
      
      <div style={{ padding: ".5rem", marginTop: "-2rem" }}>
        <Text p="xs" fs={"italic"}>
        Hinuhubog kaming kabataan</Text>
        </div> 

      <div style={{ padding: ".5rem", marginTop: "-2rem" }}>
        <Text p="xs" fs={"italic"}>
        Maging Pilipinong mero'ng dangal</Text>
        </div> 

      <div style={{ padding: ".5rem", marginTop: "-2rem" }}>
        <Text p="xs" fs={"italic"}>
        Puso'y tigib ng kadakilaan.</Text>
        </div> 


      <div style={{ padding: ".5rem" }}>
        <Text p="xs" fs={"italic"}>
        Pamantasang Lungsod ng Maynila</Text>
        </div> 
      
      <div style={{ padding: ".5rem", marginTop: "-2rem" }}>
        <Text p="xs" fs={"italic"}>
        Kaming lahat dito'y iyong punla</Text>
        </div> 

      <div style={{ padding: ".5rem", marginTop: "-2rem" }}>
        <Text p="xs" fs={"italic"}>
        Tutuparin pangarap mo't nasa</Text>
        </div> 

      <div style={{ padding: ".5rem", marginTop: "-2rem" }}>
        <Text p="xs" fs={"italic"}>
        Pamantasan kami'y nanunumpa.</Text>
        </div> 

      <div style={{ padding: ".5rem", marginTop: "-2rem" }}>
        <Text p="xs" fs={"italic"}>
        Pamantasan kami'y nanunumpa.</Text>
        </div> 
    </Box>
  );
}

export default Hymn;

