/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import BlockLinkGrow from "../components/BlockLinkGrow";
import { Div } from "../elements";

import {
  FaTwitter as Twitter,
  FaGithub as GitHub,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin
} from "react-icons/fa";

function Connect() {
  return (
    <Div
      ml="auto"
      px="auto"
      display="flex"
      borderTop="0.5px solid"
      borderColor="currentcolor"
      py={4}
    >
      <BlockLinkGrow
        color="black"
        py={1}
        mr={2}
        fontWeight={700}
        href="https://github.com/syncatallah"
        title="Syncatallah"
      >
        <GitHub size={24} />
      </BlockLinkGrow>
      <BlockLinkGrow
        color="black"
        py={1}
        mr={2}
        fontWeight={700}
        href="https://twitter.com/ahmadatallah"
        title="ahmadatallah"
      >
        <Twitter size={24} />
      </BlockLinkGrow>
      <BlockLinkGrow
        color="black"
        py={1}
        mr={2}
        fontWeight={700}
        href="https://www.instagram.com/ahmad.atallah"
        title="ahmad.atallah"
      >
        <Instagram size={24} />
      </BlockLinkGrow>
      <BlockLinkGrow
        color="black"
        py={1}
        mr={2}
        fontWeight={700}
        href="https://www.linkedin.com/in/ahmad-atallah/"
        title="ahmad.atallah"
      >
        <Linkedin size={24} />
      </BlockLinkGrow>
    </Div>
  );
}

export default Connect;