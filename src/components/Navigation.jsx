import cx from "clsx";
import React, { useState } from "react";
import { Box, Text, Divider, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    display: "block",
    textDecoration: " none",
    color: "#000",
    lineHeight: "2.375rem",
    fontSize: "1rem",
    height: "2.375rem",
    borderTopRightRadius: "2rem",
    borderBottomRightRadius: "2rem",
    borderLeft: "0.125rem solid gray",

    "@mixin hover": {
      backgroundColor: "#fff",
    },
  },
  linkActive: {
    fontWeight: "500px",
    color: "#d5a106",
  },
  indicator: {
    transition: "transform 150ms ease",
    border: "0.125rem solid #0087ca",
    backgroundColor: "#fff",
    height: ".625rem",
    width: ".625rem",
    borderRadius: ".625rem",
    position: "absolute",
    left: "calc((.625rem) / -2 + 0.063rem)",
  },
  subLinksContainer: {
    maxHeight: 0,
    overflow: "hidden",
    transition: "max-height 0.3s ease",
  },
}));

function Navigation({ links, onLinkClick, onSublinkClick, title }) {
  const { classes } = useStyles();
  const [active, setActive] = useState(0);
  const [activeSublink, setActiveSublink] = useState(null);

  const handleLinkClick = (index) => {
    // setActive(index);
    // setActiveSublink(null);
    // onLinkClick(links[index].label);
    const currentLink = links[index];

    if (
      !currentLink.component &&
      currentLink.subLinks &&
      currentLink.subLinks.length > 0
    ) {
      // Main link does not have a component, set the first sublink as active
      const firstSublinkLabel = currentLink.subLinks[0].label;
      setActiveSublink(firstSublinkLabel);
      onSublinkClick(firstSublinkLabel);
    } else {
      // Main link has a component or no sublinks, reset the selected sublink
      setActiveSublink(null);
    }

    setActive(index);
    onLinkClick(currentLink.label);
  };

  const handleSublinkClick = (sublinkLabel) => {
    setActiveSublink(sublinkLabel);
    onSublinkClick(sublinkLabel);
  };

  const items = links.map((item, index) => (
    <div key={item.label}>
      <Box
        component="a"
        href={item.link}
        onClick={(event) => {
          event.preventDefault();
          setActive(index);
          setActiveSublink(null);
          handleLinkClick(index);
        }}
        key={item.label}
        className={cx(classes.link, { [classes.linkActive]: active === index })}
        style={{ paddingLeft: `calc(${item.order} * 2rem)` }}
      >
        {item.label}
      </Box>
      <div
        className={cx(classes.subLinksContainer, {
          [classes.subLinksCollapsed]: active !== index,
        })}
        style={{
          maxHeight:
            active === index && item.subLinks
              ? `${item.subLinks.length * 2.375}rem`
              : 0,
        }}
      >
        {active === index &&
          item.subLinks &&
          item.subLinks.length > 0 &&
          item.subLinks.map((subLink) => (
            <Box
              component="a"
              href={subLink.link}
              key={subLink.label}
              className={cx(classes.link, classes.subLink, {
                [classes.linkActive]: activeSublink === subLink.label,
              })}
              onClick={(event) => {
                event.preventDefault();
                setActiveSublink(subLink.label);
                handleSublinkClick(subLink.label);
              }}
              style={{ paddingLeft: `calc(${item.order} * 4rem` }}
            >
              {subLink.label}
            </Box>
          ))}
      </div>
    </div>
  ));

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "20vw",
        marginLeft: "2rem",
      }}
    >
      <div className={classes.root}>
        <div style={{ marginBottom: "0.5rem" }}>
          <Text fz="xl" fw="bold" mb="sm" ff="Open Sans, sans serif">
            {title}
          </Text>
          <Divider size="lg" />
        </div>
        <div className={classes.links}>
          <div
            className={classes.indicator}
            style={{
              transform: `translateY(calc(${active} * 2.375rem + 0.875rem)`,
            }}
          />
          {items}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
