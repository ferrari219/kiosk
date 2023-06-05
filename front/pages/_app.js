import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Globals from "assets/styles/Globals";
import wrapper from "store/configureStore";

const app = ({ Component }) => {
  return (
    <>
      <Head>
        <title>KioskSimulate</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="KioskSimulate" />
        <meta name="author" content="Graham" />
        <meta keyword="KioskSimulate" />
      </Head>
      <Globals />
      <Component />
    </>
  );
};
app.proptypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(app);
