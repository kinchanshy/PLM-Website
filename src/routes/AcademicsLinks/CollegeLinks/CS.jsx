import React from "react";
import { Text, Divider, Container } from "@mantine/core";
import Intro from "../../../components/Intro";
import Accordions from "../../../components/Accordions";
import BusinessCard from "../../../components/BusinessCard";
import Extra from "../../../components/Extra";
import Tables from "../../../components/Tables";
import { csAccordion, csBusinessCard, csCols, csData, csIntro } from "../links";

function CS({ title }) {
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
      <Intro links={csIntro} />
      <div style={{ padding: "1rem", marginBottom: "-2rem" }}>
        <Accordions items={csAccordion} />
      </div>
      <div>
        <Extra
          title="Outstanding Alumni"
          content="Graduates from the College of Science have made a name for themselves in their respective fields. Here are some of them:"
        >
          <Tables columns={csCols} data={csData} />
        </Extra>
      </div>
      <div>
        <BusinessCard {...csBusinessCard} />
      </div>
    </Container>
  );
}

export default CS;
