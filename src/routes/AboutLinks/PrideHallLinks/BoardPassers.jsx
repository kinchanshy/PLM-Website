import React from "react";
import { Space, Text, Box, Divider, SimpleGrid, Image } from "@mantine/core";
import news from "../Images/news.png";
import bop from "../Images/bop.png";
import news1 from "../Images/news1.png";
import News from "../../../components/News";
import { bopNewsLinks } from "../links";

function BoardPassers({ title }) {
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
      <div style={{ padding: "1rem" }}>
        <Text fz="lg" ta="justify">
          From board topnotchers to having a consistent 100% board passing rate,
          PLM graduates are confident that they won’t just pass but excel in
          licensure exams.
        </Text>
        <Space h="xl" />
        <Text fz="lg">
          Get to know some of the students who continue to make us proud.
        </Text>
      </div>
      <Space h="xl" />
      <div>
        <SimpleGrid cols={2} p="lg" spacing="xl">
          {/* left side */}
          <div>
            <Image maw={500} src={bop} />
            <Space h="xl" />
            <div>
              <Text fz="lg" fw="bold" c="#313131" ta="justify">
                PLM GRAD RANKS 6TH IN ARCHITECTURE BOARD EXAM
              </Text>
              <Space h="xl" />
              <Text fz="lg" ta="justify">
                A graduate of the Pamantasan ng Lungsod ng Maynila (PLM) emerged
                as one of the topnotchers in the recently concluded Architect
                Licensure Examination.
              </Text>
              <Space h="3rem" />
              <SimpleGrid cols={2}>
                <div>
                  <Image maw={500} src={news} />
                  <Text p="xs" fz="lg" c="#313131" ta="justify">
                    BREAKING NEWS: PLM CLINCHES 100% PASSING RATE IN 2020-2021
                    BAR EXAMS
                  </Text>
                </div>
                <div>
                  <Image maw={500} src={news1} />
                  <Text p="xs" fz="lg" c="#313131" ta="justify">
                    PLM CONGRATULATES 6 NEWLY LICENSED MECHANICAL ENGINEERS
                  </Text>
                </div>
              </SimpleGrid>
            </div>
          </div>
          {/* right side */}
          <div style={{ padding: "1rem" }}>
            <News item={bopNewsLinks} />
          </div>
        </SimpleGrid>
      </div>
    </Box>
  );
}

export default BoardPassers;
