import { Button, Card, Chip, Link } from "@nextui-org/react";
import { ArrowUpRightIcon } from "lucide-react";
import { Giveaway } from "~/types";

export default function FreeTodaySection({ popular }: { popular: Giveaway[] }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold uppercase">
          <span className="text-secondary mr-2">//</span> Free Today
        </h1>
        {/* <Button as={Link} color="primary" radius="sm" href="/new">
            View all
          </Button> */}
      </div>

      <div className="grid gap-x-1 gap-y-1 grid-cols-2 md:grid-cols-3">
        {popular.map((giveaway) => {
          const description = getDescription(giveaway.description);

          return (
            <Card
              key={giveaway.id}
              radius="none"
              className="relative border-none group w-full aspect-[16/8]"
            >
              <img
                alt="Woman listing to music"
                className="object-fill h-full w-full"
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
  );
}

// Helper function to get the description of the giveaway

function getDescription(description: string) {
  const maxDescriptionLength = 70;
  return description.split("!")[1].length > maxDescriptionLength
    ? `${description.split("!")[1].slice(0, maxDescriptionLength)}...`
    : description.split("!")[1];
}
