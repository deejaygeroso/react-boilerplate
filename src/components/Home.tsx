import React, { FunctionComponent, ReactElement } from "react";

import { Navigation } from "@/components";

const Home: FunctionComponent = (): ReactElement => {
  return (
    <div>
      <Navigation />
      <h2>HomePage</h2>
    </div>
  );
};

export default Home;
