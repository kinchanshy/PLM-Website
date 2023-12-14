import cx from "clsx";
import React, { useState, useEffect, useRef } from "react";
import { Box, Text, Divider } from "@mantine/core";
import { useNavigate, useLocation } from "react-router-dom";
import classes from "../../src/App.module.css";

function Sidebar({ links, onLinkClick, onSublinkClick, title, currentRoute }) {
  const [active, setActive] = useState(null);
  const [activeSublink, setActiveSublink] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const sublinkClickedRef = useRef(false);

  useEffect(() => {
    // Find the index of the current route in links
    const currentIndex = links.findIndex((link) => link.link === currentRoute);

    // If the current route is found, activate the corresponding link
    if (currentIndex !== -1) {
      setActive(currentIndex);
      onLinkClick(links[currentIndex].label);
    }
  }, [currentRoute, links, onLinkClick]);

  const handleLinkClick = (index) => {
    setActive((prevActive) => (prevActive === index ? null : index));
    setActiveSublink(null);

    const currentLink = links[index];
    if (active !== index) {
      onLinkClick(currentLink.label);
      navigate(currentLink.link);
    }
  };

  const handleSublinkClick = (sublinkLabel, sublinkLink) => {
    setActiveSublink(sublinkLabel);
    onSublinkClick(sublinkLabel);
    navigate(sublinkLink);
    sublinkClickedRef.current = true;
  };

  useEffect(() => {
    // Reset active sublink when location.pathname changes, but only if a sublink wasn't just clicked
    if (!sublinkClickedRef.current) {
      setActiveSublink(null);
    }

    // Reset the ref after the useEffect runs
    sublinkClickedRef.current = false;
  }, [location.pathname]);

  const items = links.map((item, index) => (
    <div key={item.label}>
      <Box
        component="a"
        href={item.link}
        onClick={(event) => {
          event.preventDefault();
          handleLinkClick(index);
        }}
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
                handleSublinkClick(subLink.label, subLink.link);
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
        width: "20vw",
        marginLeft: "2rem",
      }}
    >
      <div className={classes.root}>
        <div style={{ marginBottom: "0.5rem" }}>
          <Text fz="xl" fw="bold" mb="sm" ff="Open Sans, sans serif">
            {title}
          </Text>
          <Divider size="lg" color="#FFC60B" />
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

export default Sidebar;
