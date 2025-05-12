import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "D479 PA Prototype" },
    { name: "D479 PA Prototype", content: "D479 PA Prototype" },
  ];
};

export default function Index() {
  return(
    <>
      <Navbar />
    </>
  )
}
