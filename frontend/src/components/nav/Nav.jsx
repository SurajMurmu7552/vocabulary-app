import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { removeSearch, setSearch } from "../../redux/searchSlice.js";

//import icons
import { Search, Close } from "@mui/icons-material";

//import css
import "./Nav.css";

export default function Nav() {
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 0) {
      dispatch(setSearch(e.target.value));
    } else {
      dispatch(removeSearch());
    }
  };

  const handleClick = () => {
    setToggle(!toggle);
    dispatch(removeSearch());
  };

  return (
    <div className="nav">
      <div className="nav-heading">
        {toggle ? (
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search ..."
            onChange={handleChange}
          />
        ) : (
          <h2>Vocab</h2>
        )}
      </div>
      <div className="nav-icon" onClick={handleClick}>
        {toggle ? <Close fontSize="large" /> : <Search fontSize="large" />}
      </div>
    </div>
  );
}
