"use client";

import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import FontWrapper from "./FontProvider";
import AOSProvider from "./AOSProvider";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AOSProvider>
          <FontWrapper />
          {children}
        </AOSProvider>
      </PersistGate>
    </Provider>
  );
}
