import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Home from "./Contents/Home";
import Blogs from "./Contents/Blogs";
import Work from "./Contents/Work";

const MainContent = styled.main`
  flex: 1 1 70%;
`;

export const Main = () => {
  return (
    <MainContent>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/home" exact component={Home} />
        <Route path="/blogs" exact component={Blogs} />
        <Route path="/work" exact component={Work} />
      </Switch>
    </MainContent>
  );
};
