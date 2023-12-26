import React, { useRef } from "react";
import { Text, Box, Divider, Button } from "@mantine/core";
import PDF from "../../components/PDF";
import Download from "../../components/Download";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";

function Calendar({ title }) {
  const navigate = useNavigate();
  const pdfIframeRef = useRef(null);

  const download = () => {
    // Get the PDF source URL
    const pdfSrc =
      "https://plm.edu.ph/images/downloads/University_Calendar_SY_2022-2023_page-0001.pdf";

    // Trigger download using file-saver
    saveAs(pdfSrc, "University_Calendar_SY_2022-2023.pdf");
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
      <div>
        <Text p="xs">
          View or download our academic calendar for Academic Year 2023-2024.
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
        <Download onClick={download} />
      </div>
    </Box>
  );
}

export default Calendar;
