import React from "react";
import {
  Text,
  ActionIcon,
  Group,
  Image,
  Divider,
  Box,
  Tooltip,
} from "@mantine/core";
import {
  IconBrandFacebookFilled,
  IconBrandLinkedin,
  IconMailFilled,
  IconBrandX,
} from "@tabler/icons-react";
import logo from "../assets/logo/PLMLogoText1.png";
import { useWindowScroll } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import { data, footerLinks } from "./links";

function Footer() {
  const { y: scrollY } = useWindowScroll();

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const navigate = useNavigate();
  const footerLinkElements = footerLinks.map((link, index) => (
    <Text
      as="a"
      c="#fff"
      key={index}
      className="footlinks"
      style={{
        display: "block",
        color: "#fff",
        fontSize: "1rem",
        padding: "0.5rem",
        paddingTop: "0.19rem",
        paddingBottom: "0.19rem",
        cursor: "pointer",
      }}
      href={link.link}
      onClick={(event) => {
        event.preventDefault();
        navigate(link.link);
      }}
    >
      {link.label}
    </Text>
  ));
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        as="a"
        key={index}
        className="link"
        style={{
          display: "block",
          color: "#fff",
          fontSize: "1rem",
          paddingTop: "0.19rem",
          paddingBottom: "0.19rem",
          cursor: "pointer",
        }}
        href={link.link}
        onClick={(event) => {
          event.preventDefault();
          if (link.onClick) {
            link.onClick();
          } else {
            navigate(link.link);
          }
          scrollToTop();
        }}
      >
        {link.label}
      </Text>
    ));

    return (
      <div style={{ width: "17rem", marginBottom: "1.5rem" }} key={group.title}>
        <Text
          style={{
            fontSize: "1.3rem",
            fontWeight: "1000",
            fontFamily: "OpenSans",
            marginBottom: "calc(var(--mantine-spacing-xs) / 2)",
            color: "#fff",
          }}
        >
          {group.title}
        </Text>
        {links}
      </div>
    );
  });

  return (
    <div className="footerContainer">
      <footer
        style={{
          marginTop: "7.5",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          backgroundColor:
            "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))",
          borderTop:
            "rem(1px) solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5))",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <Image maw={350} src={logo} p="md" />
        </div>

        <div style={{ marginLeft: "5rem", marginRight: "5rem" }}>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",

              "@media (maxWidth: $mantineBreakpointSm)": {
                flexDirection: "column",
                alignItems: "center",
              },
            }}
          >
            <div
              style={{
                maxWidth: "12.5rem",
                "@media (maxWidth: $mantineBreakpointSm)": {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                },
              }}
            >
              <Text
                size="lg"
                fw="bold"
                ff="Open Sans"
                c="#fff"
                style={{ marginBottom: "1rem", marginTop: "0.5rem" }}
              >
                Get in Touch
              </Text>
              <Text
                size="xs"
                c="#fff"
                style={{
                  marginTop: "0.313",

                  "@media (maxWidth: $mantineBreakpointSm)": {
                    marginTop: "var(--mantine-spacing-xs)",
                    textAlign: "center",
                  },
                }}
              >
                Gen. Luna corner Muralla St., Intramuros Manila, Philippines
                1002
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",

                "@media (maxWidth: $mantineBreakpointSm)": {
                  display: "none",
                },
              }}
            >
              {groups}
            </div>
          </Box>
          <Box>
            <Divider size="md" color="#FFC60B" />
          </Box>

          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "0.5rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              borderTop:
                "rem(1px) solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4))",

              "@media (maxWidth: $mantineBreakpointSm)": {
                flexDirection: "column",
              },
            }}
          >
            <div>
              <Text c="#fff" size="sm">
                © 1967 - 2023 Pamantasan ng Lungsod
              </Text>
              <Text c="#fff" size="sm">
                ng Maynila. All Rights Reserved.
              </Text>
            </div>

            <div style={{ display: "flex" }}>{footerLinkElements}</div>

            <Group
              gap={0}
              style={{
                "@media (maxWidth: $mantineBreakpointSm)": {
                  marginTop: "var(--mantine-spacing-xs)",
                },
              }}
              justify="flex-end"
              wrap="nowrap"
            >
              <ActionIcon
                variant="transparent"
                c="#fff"
                size="sm"
                onClick={() => {
                  window.open("https://www.facebook.com/PLM.Haribon", "_blank");
                }}
              >
                <Tooltip label="Facebook Page" withArrow>
                  <IconBrandFacebookFilled />
                </Tooltip>
              </ActionIcon>
              <ActionIcon
                variant="transparent"
                c="#fff"
                size="sm"
                onClick={() => {
                  window.open("https://twitter.com/PLM_Manila", "_blank");
                }}
              >
                <Tooltip label="X Account" withArrow>
                  <IconBrandX />
                </Tooltip>
              </ActionIcon>
              <ActionIcon
                variant="transparent"
                c="#fff"
                size="sm"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A15097268&keywords=pamantasan%20ng%20lungsod%20ng%20maynila&origin=RICH_QUERY_SUGGESTION&position=0&searchId=93b8881c-843a-49c2-95b8-ea6b6f58f9ae&sid=n%3Am&spellCorrectionEnabled=false",
                    "_blank"
                  );
                }}
              >
                <Tooltip label="Linkedin Account" withArrow>
                  <IconBrandLinkedin />
                </Tooltip>
              </ActionIcon>
              <ActionIcon
                variant="transparent"
                c="#fff"
                size="sm"
                onClick={() => {
                  window.open("mailto:info@plm.edu.ph", "_blank");
                }}
              >
                <Tooltip label="Email us" withArrow>
                  <IconMailFilled />
                </Tooltip>
              </ActionIcon>
            </Group>
          </Box>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
