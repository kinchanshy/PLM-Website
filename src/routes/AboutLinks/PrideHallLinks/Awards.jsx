import React from "react";
import {
  Space,
  Text,
  Box,
  Divider,
  SimpleGrid,
  Image,
  ScrollArea,
} from "@mantine/core";
import award from "../Images/awards.png";
import awardnews from "../Images/awardnews.png";
import awardnews1 from "../Images/awardsnews1.png";
import News from "../../../components/News";
import { newsLinks } from "../links";

function Awards({ selectedSublink }) {
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
      <div style={{ padding: "1rem" }}>
        <Text fz="lg" ta="justify">
          PLM is a consistent top-performing university that has produced board
          topnotchers, and exemplary leaders in the business and public sectors.
          But don’t just take it from us. We’ll let our awards do the talking.
        </Text>
      </div>
      <Space h="xl" />
      <div>
        <SimpleGrid cols={2} spacing="xl">
          {/* left side */}
          <div style={{ padding: "1rem" }}>
            <Image maw={500} src={award} />
            <Space h="xl" />
            <div>
              <Text fz="lg" fw="bold" ta="justify" c="#313131">
                2 PLM ALUMNI CONFERRED WITH ORDER OF LAPU-LAPU FOR ACT OF
                HEROISM
              </Text>
              <Space h="xl" />
              <Text fz="lg" ta="justify">
                Alumni of the Pamantasan ng Lungsod ng Maynila were recognized
                by President Rodrigo Duterte for their heroic act in responding
                to a fire that erupted inside the Philippine General Hospital
                last month.
              </Text>
            </div>
            <Space h="3rem" />
            <SimpleGrid cols={2}>
              <div>
                <Image maw={500} src={awardnews} />
                <Text p="xs" fz="lg" c="#313131" ta="justify">
                  PLM IS 6TH BEST PERFORMING LAW SCHOOL IN 2019 BAR EXAMS
                </Text>
              </div>
              <div>
                <Image maw={500} src={awardnews1} />
                <Text p="xs" fz="lg" c="#313131" ta="justify">
                  PLM COLLEGE OF LAW BAGS 3 AWARDS, ALUMNA APPOINTED RTC JUDGE
                </Text>
              </div>
            </SimpleGrid>
          </div>
          {/* right side */}
          <div style={{ padding: "1rem" }}>
            <News item={newsLinks} />
          </div>
        </SimpleGrid>
      </div>
    </Box>
  );
}

export default Awards;
