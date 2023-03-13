import React from "react";
import { CiSearch } from "react-icons/ci";
// import {Search} from "react-feather";
import  TextInput  from "./TextInput";
import "./search.css";

export default function SearchBar(props) {
  const {
    placeholder = "Search",
    filterText = "",
    onFilterTextChange = (f) => f,
    _ref = null,
  } = props;

  const handleFilterTextChange = (e) => {
    onFilterTextChange(e.target.value);
  };

  return (
    <div className="form-group has-search">
      <span className="form-control-feedback mt-4 bg-success color-white"  >
        <CiSearch color="white" size={20}/>
      </span>
      <TextInput
        ref={_ref}
        name="filterText"
        value={filterText}
        onChange={handleFilterTextChange}
        type="text"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
