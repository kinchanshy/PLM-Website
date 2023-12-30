import React, { useRef } from "react";
import { Text, Box, Divider, Button } from "@mantine/core";
import PDF from "../../../components/PDF";

function Charter({ selectedSublink }) {
  //const title = selectedSublink.toUpperCase();
  const pdfIframeRef = useRef(null);

  const download = () => {
    const iframe = pdfIframeRef.current;
    if (iframe) {
      const pdfURL = iframe.getAttribute("src");
      const anchor = document.createElement("a");
      anchor.href = pdfURL;
      anchor.download = "University_Calendar_SY_2022-2023.pdf";
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
          {selectedSublink}
        </Text>
      </div>
      <Divider c="#eeee" size="md" />

      <div style={{ padding: ".5rem" }}>
        <Text p="xs">
          Republic Act No. 4196 or “An Act Authorizing the City of Manila to
          Establish and Operate the University of City of Manila”, which created
          the PLM, is the University Charter. It was signed into law on June 19,
          1965.
        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
        <Text>
          According to the charter, the Congress of the Philippines conferred
          upon the Board of Regents the exclusive power to govern the
          university.
        </Text>
      </div>

      <div>
        <PDF
          src="https://plm.edu.ph/images/downloads/University_Calendar_SY_2022-2023_page-0001.pdf"
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

export default Charter;
