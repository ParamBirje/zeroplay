import { useEffect, useState } from "react";
import { Button, Link } from "@nextui-org/react";
import { ArrowRightIcon, XIcon } from "lucide-react";

export default function Banner() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
    window.localStorage.setItem("isBannerClosed", "true");
  }

  useEffect(() => {
    const isBannerClosed = window.localStorage.getItem("isBannerClosed");
    if (!isBannerClosed) {
      setIsMenuOpen(true);
    }
  }, []);

  return (
    <div
      className={`${
        isMenuOpen ? "flex" : "hidden"
      } w-full items-center gap-x-3 border-b-1 border-divider bg-background/[0.15] px-6 py-2 backdrop-blur-xl sm:px-3.5 sm:before:flex-1`}
    >
      <p className="text-small text-foreground">
        <Link className="text-inherit" href="#">
          This page is designed to be your browser's homepage. Set it now!
        </Link>
      </p>
      <Button
        isExternal
        as={Link}
        className="group relative h-9 overflow-hidden bg-transparent text-small font-normal"
        color="default"
        endContent={
          <ArrowRightIcon
            className="flex-none outline-none transition-transform group-data-[hover=true]:translate-x-0.5 [&>path]:stroke-[2]"
            width={16}
          />
        }
        href="https://www.androidpolice.com/google-chrome-change-homepage/"
        style={{
          border: "solid 2px transparent",
          backgroundImage: `linear-gradient(hsl(var(--nextui-background)), hsl(var(--nextui-background))), linear-gradient(to right, #1895de, #9353D3)`,
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
        variant="bordered"
      >
        Learn how to
      </Button>
      <div className="flex flex-1 justify-end">
        <Button
          onClick={closeMenu}
          isIconOnly
          className="-m-1"
          size="sm"
          variant="light"
        >
          <span className="sr-only">Close Banner</span>
          <XIcon className="text-default-500" width={20} />
        </Button>
      </div>
    </div>
  );
}
