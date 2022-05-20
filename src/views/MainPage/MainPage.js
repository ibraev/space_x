import React, { Fragment } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Launches from '../../components/Launches/Launches';

const MainPage = () => {
  return (
    <Fragment>
      <Navigation/>
      <main style={{marginTop: "80px"}}>
        <div style={{display: "flex"}}>
          <Launches title={"Past Launches"}/>
          <Launches title={"Launches"}/>
          <Launches title={"My launchesAction"}/>
        </div>
      </main>
    </Fragment>
  );
};

export default MainPage;