import Head from "next/head";
import React from "react";
import { titlecomponent } from "../../types/components";

function TitleComponent({ title }: titlecomponent) {
  return (
    <>
      <Head>
        <title> {title} | Gateway ITI</title>
      </Head>
    </>
  );
}

export default TitleComponent;
