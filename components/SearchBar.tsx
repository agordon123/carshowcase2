"use client"
import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import { SearchManufacturerProps } from "@/types";
import { Combobox,Transition } from "@headlessui/react";
const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar