import React, { useRef } from "react";
import { Text, Box, Divider, Button } from "@mantine/core";
import PDF from "../../../components/PDF";



function Code({ title }) {
  //const title = selectedSublink.toUpperCase();
  const pdfIframeRef = useRef(null);

  const download = () => {
    const iframe = pdfIframeRef.current;
    if (iframe) {
      const pdfURL = iframe.getAttribute("src");
      const anchor = document.createElement("a");
      anchor.href = pdfURL;
      anchor.download = "PLM-University-Code-Of-2005.pdf";
      anchor.click();
    }
  };
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
        The University Code of 2005 was approved by the Board of Regents under Resolution No. 2823 during its 379th regular meeting 
held on October 28, 2005.
        </Text>
      </div>
      
      <div style={{ padding: "1rem" }}>
          <Text>Pursuant to Board Resolution No. 3697 which the Board has approved on 09 October 2014, the University Code of 2005 shall be 
adopted as the continuing, operative University Code and that said Code is, in itself, the implementing guideline.</Text>
      </div>

      <div>
        <PDF
          src="https://www.plm.edu.ph/images/downloads/plm-university-code-of-2005.pdf"
          title="PDF Viewer"
          ref={pdfIframeRef}
        />
      </div>
      <div style={{ padding: "1rem" }}>
        <Button
          radius="md"
          className="button"
          c="black"
          uppercase
          onClick={download}
        >
          <Text>Download</Text>
        </Button>
      </div>
    </Box>
  );
}

export default Code;
