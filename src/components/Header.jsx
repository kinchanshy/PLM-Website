import React from "react";
import { Text, Image, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo/PLMLogoText.png";
import Menus from "./Menus";
import SearchBar from "./SearchBar";
import { Items } from "./links";

function Header({
  topStyle,
  botStyle,
  menuColor,
  searchColor,
  isHeaderBotVisible,
}) {
  const navigate = useNavigate();

  return (
    // This is the main Header
    <>
      <nav
        style={{
          position: "fixed",
          width: "100%",
          margin: "auto",
          zIndex: "3",
        }}
      >
        {/* This is the container of the header */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "#fff",
              height: "100%",
              paddingRight: "3rem",
              cursor: "pointer",
              ...topStyle,
            }}
          >
            <div style={{ display: "flex", marginLeft: "2rem" }}>
              <>
                {/* Logo  */}
                <Image
                  maw={300}
                  p="0.5rem"
                  src={logo}
                  onClick={() => navigate("/")}
                />
              </>
            </div>
            <div style={{ display: "flex" }}>
              <div
                className="menu"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* This is a custom links for the menus on the top header */}
                <Menus color={menuColor} />
                {/* Search icon */}
                <div style={{ paddingLeft: "1rem" }}>
                  <SearchBar
                    c={searchColor}
                    //  navBackgroundTop === "HeaderSolidTop" ? "#000" : "#fff"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* This links will vanish when the scroll condition is triggered */}
          {isHeaderBotVisible && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                cursor: "pointer",
                zIndex: "1",
                gap: "0rem",
                ...botStyle,
              }}
            >
              {Items.map((Item, index) => (
                <Button
                  className="text"
                  key={index}
                  variant="transparent"
                  onClick={() => {
                    // navigate(Item.path);
                    if (Item.onClick) {
                      // If the item has an onClick function, execute it
                      Item.onClick();
                    } else {
                      // Otherwise, navigate to the specified path
                      navigate(Item.path);
                    }
                  }}
                >
                  <Text fz="md" fw="bold">
                    {Item.label}
                  </Text>
                </Button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
