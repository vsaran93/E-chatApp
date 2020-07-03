import React, { Fragment } from "react";

import Appbar from "../partials/Appbar";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <Appbar />
      <main>{children}</main>
    </Fragment>
  );
};

export default MainLayout;