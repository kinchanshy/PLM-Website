import React from "react";
import { Text, Divider, Container, List } from "@mantine/core";
import { admissionBusinessCard, scholarshipAccordion } from "./links";
import BusinessCard from "../../components/BusinessCardAdmission";
import Accordions from "../../components/AccordionsAdmission";



function Scholarship() {
  return (
    <Container style={{ fontFamily: "Open Sans, sans serif" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Text size="1.5rem" fw="bold" p="xs">
          Scholarships and Financial Aid
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      
      

        <div style={{ padding: "0rem 1rem 1rem 1rem" }}>
          <Text>
          PLM partners with foundations and generous individuals to provide poor but deserving students the fighting chance that they deserve. Depending on the partners, scholars receive monthly stipends, book allowances, and even a year-end bonus.
          </Text>
        </div>

        <Divider c="#eeee" size="md" />

        <Text size="1.5rem" fw="bold" p="xs">
          AY 2022-2023 Scholarship partners
        </Text>

        <div style={{ padding: "0rem 1rem 1rem 1rem" }}>
          <Text>
          For the Academic Year 2022-2023, 24 scholarship partners provide PLM students with not only financial assistance but also training and opportunities for exposure. Out of the 24, 21 are group sponsors and three are individual providers.
          </Text>
        </div>

        <div style={{ padding: "0rem 1rem 1rem 1rem" }}>
          <Text>
          The following are the group scholarship providers:
          </Text>
        </div>
        
        <div style={{ padding: "0rem 1rem 1rem 2rem" }}>
          <List>
            <List.Item>AMY Foundation</List.Item>
            <List.Item>Alfonso Yuchengco Foundation</List.Item>
            <List.Item>Buddhist Tzu Chi Foundation</List.Item>
            <List.Item>Cebuana Lhuillier Foundation</List.Item>
            <List.Item>Charity First Foundation</List.Item>
            <List.Item>Chinese Filipino Business Club</List.Item>
            <List.Item>DBP Foundation</List.Item>
            <List.Item>Evangeline Barrios Fletcher-Shepherd Scholarship Grant</List.Item>
            <List.Item>Fil-Am Society of Masters and Past Masters in California Masonry</List.Item>
            <List.Item>Gokongwei Brothers Foundation, Inc.</List.Item>
            <List.Item>International Container Terminal Services, Inc.</List.Item>
            <List.Item>Landbank North NCRBG</List.Item>
            <List.Item>Lingap Adhikain Foundation</List.Item>
            <List.Item>Luis Co Chi Kiat Foundation</List.Item>
            <List.Item>Manila Mt. Lebanon</List.Item>
            <List.Item>Master Rui Miao Foundation</List.Item>
            <List.Item>Megawide Foundation</List.Item>
            <List.Item>Megaworld Foundation</List.Item>
            <List.Item>Miami Foundation (Fain Foundation)</List.Item>
            <List.Item>PLM-Scholarship Foundation, Inc.</List.Item>
            <List.Item>Security Bank Foundation</List.Item>
            <List.Item>Simplicio Gamboa, Sr. Foundation</List.Item>
            <List.Item>SM Foundation</List.Item>
          </List>
        </div>

        <div style={{ padding: "0rem 1rem 1rem 1rem" }}>
          <Text>The following are the three (3) individual providers/sponsors who are mostly PLM officials, alumni, philanthropists, and friends of PLM:</Text>
        </div>

        <div style={{ padding: "0rem 1rem 1rem 2rem" }}>
          <List>
            <List.Item>Ambassador and former Regent Ramon Bagatsing, Jr.</List.Item>
            <List.Item>Mr. Marc Gorospe</List.Item>
            <List.Item>Mr. Russel Tena</List.Item>
          </List>
        </div>

        <Divider c="#eeee" size="md" />

        <div style={{ padding: "1rem" }}>
          <Accordions items={scholarshipAccordion} />
        </div>

        <div>
          <BusinessCard {...admissionBusinessCard} />
        </div>
    </Container>
  );
}

export default Scholarship;
