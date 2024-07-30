import { App } from "./app";

export function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page() {
  return <App />;
}
