"use client";

import dynamic from "next/dynamic";

const AppComponent = dynamic(() => import("../../components/app/app"), {
  ssr: false,
});

export function App() {
  return <AppComponent />;
}
