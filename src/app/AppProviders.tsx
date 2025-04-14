"use client";
import TanstackProvider from "@/providers/tanstack-provider";
import { SessionProvider } from "next-auth/react";
import React from "react";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SessionProvider>
        <TanstackProvider>{children}</TanstackProvider>
      </SessionProvider>
    </>
  );
};

export default AppProviders;
