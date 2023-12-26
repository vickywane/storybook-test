import React from "react";
import { Heading1 } from "./Headings";
import Tabs from "./Tab";
import Container from "./Container";

const Banner = () => {
  return (
    <Container>
      <div className="my-12">
        <Heading1> Page Title </Heading1>
      </div>

      <Tabs
        items={[
          { id: 1, name: "Tab One" },
          { id: 2, name: "Tab Two" },
          { id: 3, name: "Tab Three" },
        ]}
      />
    </Container>
  );
};

export default Banner;
