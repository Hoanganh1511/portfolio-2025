"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SyntaxHighlighterField = ({ code }: { code: any }) => {
  return (
    <SyntaxHighlighter
      language="jsx"
      className="text-[15px] !p-[18px] [&>code]:!leading-[24px] "
      style={oneDark}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default SyntaxHighlighterField;
