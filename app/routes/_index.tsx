import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import BrowserSearch from "~/components/browser-search";
import Clock from "~/components/clock";
import FreeTodaySection from "~/components/free-today";
import { GiveawaysSortedByValue } from "~/services/api/giveaways";
import { Giveaway } from "~/types";

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

export async function loader() {
  const popular: Giveaway[] = await GiveawaysSortedByValue();
  return { popular: popular };
}

export default function Index() {
  const { popular } = useLoaderData<typeof loader>();

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-16">
      <Clock />
      <BrowserSearch />
      <FreeTodaySection popular={popular} />
    </main>
  );
}
