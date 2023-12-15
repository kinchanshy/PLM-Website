import React from "react";
import { Container, Text, Image } from "@mantine/core";
import seal from "../../assets/seal.png";
import { useNavigate } from "react-router-dom";

function HomeSeal() {
  const navigate = useNavigate();
  return (
    <div>
      <Container
        p="xl"
        size="xl"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        {/* Logo of the seal */}
        <Image maw={250} src={seal} p="md" />
        {/* Text about the seal */}
        <Text fz="lg" p="md" c="#fff" ta="justify">
          PLM is compliant with the Anti-Red Tape Act (ARTA), as validated by
          the Civil Service Commission-Malacañan Palace. Pursuant to the
          Philippine Government’s Transparency Principle, our Transparency
          Coordinating Council, created through Administrative Order No.
          2013-12. Read our {""}
          <Text
            span
            fw="bold"
            onClick={() => {
              navigate("/citizens-charter");
            }}
            style={{ cursor: "pointer" }}
          >
            Citizen's Charter here.
          </Text>
          {""} In case of complaints, please submit proof or any supporting
          documents through this {""}
          <Text span fw="bold" style={{ cursor: "pointer" }}>
            link
          </Text>
          .
        </Text>
      </Container>
    </div>
  );
}

export default HomeSeal;
