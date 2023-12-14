import React, { useState, useEffect, useRef } from "react";
import { Menu, Button, Text } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useNavigate, useLocation } from "react-router-dom";
import { menuItems } from "./links";

function Menus({ color, fsize }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [MenuOpen, setMenuOpen] = useState(Array(menuItems.length).fill(false));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Find the index of the current route in menuItems
    const currentIndex = menuItems.findIndex(
      (item) => item.link === location.pathname
    );
  }, [location.pathname, menuItems]);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const toggleMenu = (index) => {
    if (menuItems[index].items) {
      const updatedMenuOpen = MenuOpen.map((state, i) => i === index);
      setMenuOpen(updatedMenuOpen);
    } else {
      // If it doesn't have submenu items, navigate to its link
      navigate(menuItems[index].link);
    }
  };

  useEffect(() => {
    const closeMenus = () => {
      setMenuOpen(Array(menuItems.length).fill(false));
    };

    document.addEventListener("click", closeMenus);

    return () => {
      document.removeEventListener("click", closeMenus);
    };
  }, []);

  return (
    <div>
      {menuItems.map((menuItem, index) => (
        <Menu key={index}>
          <Menu.Target>
            <Button
              variant="transparent"
              c={color}
              rightSection={
                menuItems[index].items ? (
                  MenuOpen[index] ? (
                    <IconChevronUp size="1rem" />
                  ) : (
                    <IconChevronDown size="1rem" />
                  )
                ) : null
              }
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu(index);
              }}
            >
              <Text ff="lato" fz={fsize} fw="bold">
                {menuItem.text}
              </Text>
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            {menuItem.items &&
              menuItem.items.map((item, itemIndex) => (
                <Menu.Item
                  key={itemIndex}
                  onClick={() => {
                    navigate(item.link);
                  }}
                >
                  <Text
                    className={hoveredItem === itemIndex ? "item" : "item-out"}
                    onMouseEnter={() => handleMouseEnter(itemIndex)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.text}
                  </Text>
                </Menu.Item>
              ))}
          </Menu.Dropdown>
        </Menu>
      ))}
    </div>
  );
}

export default Menus;
