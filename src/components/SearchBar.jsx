import React, { useEffect, useRef, useState } from "react";
import { ActionIcon, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

function SearchBar({ c }) {
  const [isSearchVisible, setSearchVisible] = useState(false);
  // This is for the effect of the search icon on the header
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSearchVisible &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        closeSearch();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchVisible]);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const closeSearch = () => {
    setSearchVisible(false);
  };

  const searchInputRef = useRef(null);

  return (
    <div>
      <div>
        {isSearchVisible ? null : (
          <ActionIcon variant="subtle" onClick={toggleSearch} c={c}>
            <IconSearch size="1.125rem" />
          </ActionIcon>
        )}
      </div>
      {isSearchVisible ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextInput
            c="black"
            radius="lg"
            placeholder="Search"
            style={{
              marginLeft: "-1rem",
              borderBlock: "black",
            }}
            ref={searchInputRef}
          />
        </div>
      ) : null}
    </div>
  );
}

export default SearchBar;
