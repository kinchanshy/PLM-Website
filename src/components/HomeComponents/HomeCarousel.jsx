import React from "react";
import { Divider, SimpleGrid, Text } from "@mantine/core";
import CarouselSlides from "../CarouselSlides";
import { servicesSlides, updateSlides } from "../links";

function HomeCarousel() {
  return (
    <div>
      <SimpleGrid cols={2} spacing="md" p="lg">
        <div>
          <div>
            <Text p="lg" fz="lg" fw="bold">
              UNIVERSITY UPDATES
            </Text>
            <Divider
              color="#FFC60B"
              size="lg"
              p="lg"
              style={{ marginRight: "1rem", marginLeft: "1rem" }}
            />
            <CarouselSlides slides={updateSlides} />
          </div>
        </div>
        <div>
          <div>
            <Text p="lg" fz="lg" fw="bold">
              UNIVERSITY SERVICES
            </Text>
            <Divider
              color="#FFC60B"
              size="lg"
              p="lg"
              style={{ marginRight: "1rem", marginLeft: "1rem" }}
            />
            <CarouselSlides slides={servicesSlides} />
          </div>
        </div>
      </SimpleGrid>
    </div>
  );
}

export default HomeCarousel;
