// import React from "react";
// import { Image, Text, Box, Divider, Button } from "@mantine/core";
// import Introduction from "../../../components/Intro";
// import CMSAccordion from "../../../components/Accordions";
// import BusinessCard from "../../../components/BusinessCard";
// import { PHAccordionItems, PHBusinessCardData } from "../links";
// import pic from "../Images/crs.png";
// import { useNavigate } from "react-router-dom";

// function PH({ selectedSublink }) {
//   const navigate = useNavigate();
//   return (
//     <Box style={{ fontFamily: "Open Sans, sans serif" }}>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "start",
//         }}
//       >
//         <Text size="1.5rem" fw="bold" p="xs">
//           {selectedSublink}
//         </Text>
//       </div>
//       <Divider c="#eeee" size="md" />
//       <Introduction
//         src={pic}
//         content="The Pamantasan ng Lungsod ng Maynila School of Public Health is envisioned as a recognized leader in public health education both locally and internationally. It strives to nurture ethical, professional, forward-looking leaders in health care who will confidently blend knowledge and practice to bring real-world solutions to ensure health for all."
//       />
//       <div style={{ padding: "1rem" }}>
//         <CMSAccordion items={PHAccordionItems} />
//       </div>
//       <div>
//         <BusinessCard {...PHBusinessCardData} />
//       </div>
//     </Box>
//   );
// }

// export default PH;
import React from "react";
import { Text, Divider, Container } from "@mantine/core";
import Intro from "../../../components/Intro";
import Accordions from "../../../components/Accordions";
import BusinessCard from "../../../components/BusinessCard";
import { phAccordion, phBusinessCard, sphIntro } from "../links";

function SPH({ title }) {
  return (
    <Container>
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
      <Intro links={sphIntro} />
      <div style={{ padding: "1rem" }}>
        <Accordions items={phAccordion} />
      </div>
      <div>
        <BusinessCard {...phBusinessCard} />
      </div>
    </Container>
  );
}

export default SPH;
