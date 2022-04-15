import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Home from './Contents/Home';
import Loading from './Contents/Loading';

const Blogs = lazy(() => import('./Contents/Blogs'));
const Work = lazy(() => import('./Contents/Work'));
const Links = lazy(() => import('./Contents/Links'));

const MainContent = styled.main`
  flex: 1 1 70%;
`;

export const Main = () => {
  return (
    <MainContent>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/home" exact component={Home} />
        <Suspense
          fallback={
            <div>
              <Loading />
            </div>
          }
        >
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/work" exact component={Work} />
          <Route path="/links" exact component={Links} />
        </Suspense>
      </Switch>
    </MainContent>
  );
};
