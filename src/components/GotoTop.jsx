import React from "react";
import { ActionIcon, Affix, Transition, rem } from "@mantine/core";
import { IconArrowBigUpLinesFilled } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";

function GotoTop() {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <div>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" duration={100} mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <ActionIcon
              c="#fff"
              color="black"
              size="lg"
              radius="lg"
              variant="filled"
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              <IconArrowBigUpLinesFilled size="1rem" />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </div>
  );
}

export default GotoTop;
