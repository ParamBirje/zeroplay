import { Button, Card, Chip, Input, Kbd, Link } from "@nextui-org/react";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ArrowUpRightIcon, SearchIcon } from "lucide-react";
import React from "react";
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
  const [value, setValue] = React.useState("");

  function handleBrowserSearch() {
    const search = value.trim().toLowerCase();
    if (search) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
        value
      )}`;
    }
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-5 flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <div>
          <Kbd className="w-fit mr-2" keys={["command"]}>
            Ctrl + L
          </Kbd>
          <span>to focus the browser's URL bar.</span>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleBrowserSearch();
          }}
        >
          <Input
            autoFocus
            startContent={<SearchIcon size={20} />}
            label="Quick Browser Search"
            value={value}
            onValueChange={setValue}
            size="lg"
          />
        </form>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-extrabold">// New</h1>
          <Button as={Link} color="primary" radius="sm" href="/new">
            View all
          </Button>
        </div>

        <div className="grid gap-x-1 gap-y-1 grid-cols-2 md:grid-cols-3">
          {popular.map((giveaway) => {
            const description = getDescription(giveaway.description);

            return (
              <Card
                radius="none"
                className="relative border-none group w-full aspect-video"
              >
                <img
                  alt="Woman listing to music"
                  className="object-cover h-full w-full"
                  src={giveaway.image}
                />

                <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-between bg-background backdrop-blur-sm bg-opacity-70 duration-200 opacity-0 group-hover:opacity-100 px-6 py-4 gap-3">
                  <p className="text-sm">{description}</p>

                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-bold">$2.30</p>
                    {giveaway.platforms.split(",").map((platform) => (
                      <Chip size="sm" key={platform}>
                        {platform.trim()}
                      </Chip>
                    ))}
                  </div>

                  <Button
                    as={Link}
                    isExternal
                    endContent={<ArrowUpRightIcon />}
                    color="secondary"
                    radius="sm"
                    size="sm"
                    className="w-fit"
                    href={giveaway.open_giveaway}
                  >
                    Get it for free!
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
}

// Helper function to get the description of the giveaway

function getDescription(description: string) {
  const maxDescriptionLength = 100;
  return description.split("!")[1].length > maxDescriptionLength
    ? `${description.split("!")[1].slice(0, maxDescriptionLength)}...`
    : description.split("!")[1];
}
