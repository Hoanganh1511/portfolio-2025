"use client";
import TanstackProvider from "@/providers/tanstack-provider";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import React from "react";
import store from "@/redux/configure-store";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <TanstackProvider>{children}</TanstackProvider>
      </Provider>
    </SessionProvider>
  );
};

export default AppProviders;
