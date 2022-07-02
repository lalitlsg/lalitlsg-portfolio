import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MenuList = styled.ul``;
const MenuItem = styled.li`
  display: inline-block;
  padding: 10px;
  margin-left: 5px;
  margin-top: 5px;
`;

const MenuContent = styled.menu`
  min-height: 10%;
`;

const RouterLink = styled(NavLink).attrs(() => ({
  activeStyle: { color: "blue" }
}))`
  outline: 0;
  :link {
    color: ${({ dark }) => (dark ? "white" : "#737373")};
  }
  :visited {
    color: ${({ dark }) => (dark ? "white" : "#737373")};
  }
  :hover {
    color: ${({ dark }) => (dark ? "#4933e5" : "#0d0d0d")};
  }
`;

function Menu({ dark }) {
  return (
    <MenuContent>
      <MenuList>
        <RouterLink to="/home" dark={dark}>
          <MenuItem>Home</MenuItem>
        </RouterLink>
        <RouterLink to="/blogs" dark={dark}>
          <MenuItem>Blogs</MenuItem>
        </RouterLink>
        <RouterLink to="/work" dark={dark}>
          <MenuItem>Work</MenuItem>
        </RouterLink>
        <RouterLink to="/links" dark={dark}>
          <MenuItem>Links</MenuItem>
        </RouterLink>
      </MenuList>
    </MenuContent>
  );
}

export default Menu;
