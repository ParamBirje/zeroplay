import { Navbar } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { HeartIcon, MonitorIcon, SunIcon } from "lucide-react";

export default function Footer() {
  return (
    <Navbar
      className="py-4 px-4 bg-default-100"
      maxWidth="lg"
      position="static"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-3">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-bold text-inherit md:text-2xl">
            ZERO // PLAY
          </Link>

          <div className="flex flex-col">
            <Link className="text-xs" isExternal href="https://gamerpower.com">
              Powered by GamerPower
            </Link>
            <span className="text-default-500 text-xs">© 2024</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          Made with <HeartIcon fill="red" size={16} /> by{" "}
          <Link isExternal href="https://parameater.co">
            Param Birje.
          </Link>
        </div>
      </div>
    </Navbar>
  );
}
