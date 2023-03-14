import React from "react";
import "../Styles/NavBar.css";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

/*
Home
Recipes
History
Contact
About MealPrep
 */

const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        position: "sticky",
        justifyContent: "space-between",
        top: 0,
        width: "100%",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>
          <a className="logo" href="/">
            MealPrep
          </a>
        </h1>
      </Link>
      <Link style={{ color: "#000", textDecoration: "none" }}>Home</Link>
      <Link style={{ color: "#ee6258", textDecoration: "none" }}>Recipe</Link>
      <Link style={{ color: "#000", textDecoration: "none" }}>History</Link>
      <Link style={{ color: "#000", textDecoration: "none" }}>Contact</Link>
      <Link style={{ color: "#000", textDecoration: "none" }}>About</Link>
      <div className="search-box">
        <input className="search-bar" type="search" placeholder="Search" />
        <i>
          <SearchIcon sx={{ width: "30px", height: "50px" }} />
        </i>
      </div>
    </Stack>
  );
};

export default NavBar;
