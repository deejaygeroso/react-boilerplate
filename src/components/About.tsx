import React, { FunctionComponent, ReactElement } from "react";

import { Navigation } from "@/components";

const About: FunctionComponent = (): ReactElement => {
  return (
    <div>
      <Navigation />
      <h2>About</h2>
    </div>
  );
};

export default About;
