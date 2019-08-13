/** @jsx jsx */
import jsx from "../../jsx";
import React, { lazy, Suspense } from "react";
import theme from "../../theme";
import { Div } from "../../elements";
import Flex from "../../components/Flex";
import MinimalHeader from "../../containers/MinimalHeader";
import { importMDX } from "mdx.macro";
const Content = lazy(() => importMDX("./Bio.mdx"));

function Bio({ ...props }) {
  return (
    <>
      <MinimalHeader />
      <Flex
        dir="rtl"
        justifyConent="center"
        maxWidth={900}
        px={5}
        py={2}
        mx='auto'
        fontFamily={theme.typefaces.helvetica}
      >
        <Suspense fallback={<Div>Loading...</Div>}>
          <Content />
        </Suspense>
      </Flex>
    </>
  );
}

export default Bio;