'use client'

import store,{ persistor } from "@/reducer/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

const isClient = () => typeof window !== "undefined";

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      
        <PersistGate loading={<>loading</>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}