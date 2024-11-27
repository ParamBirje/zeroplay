import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "ZeroPlay - Official Free Games" },
    {
      name: "description",
      content:
        "ZeroPlay is the one-stop destination for a daily updated list of free to play/snag games across platforms like Steam, Epic Games Store, and more.",
    },
  ];
};

export default function Index() {
  return <main className=""></main>;
}