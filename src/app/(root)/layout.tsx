"use client";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import React, { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Suspense>
        <article id="article">{children}</article>
      </Suspense>
    </>
  );
};

export default Layout;
