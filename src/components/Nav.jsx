import React from "react";
import { Image } from "@mantine/core";
import Menus from "./Menus";
import SearchBar from "./SearchBar";
import logo from "../assets/PLMLogotext.png";
import { useNavigate } from "react-router-dom";

function Nav({ color, style, sColor, onResetSublink }) {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="nav" style={style}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: "2rem",
            marginRight: "3rem",
          }}
        >
          <Image
            maw={300}
            p="0.5rem"
            src={logo}
            style={{ padding: "0.5rem" }}
            onClick={() => {
              navigate("/");
            }}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <Menus color={color} fsize="md" onResetSublink={onResetSublink} />
            </div>
            <div style={{ marginLeft: "1rem" }}>
              <SearchBar c={sColor} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
