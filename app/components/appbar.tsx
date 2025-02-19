import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { GamepadIcon, StarIcon } from "lucide-react";
import { ThemeSwitch } from "./theme-switch";

export default function Appbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      label: "All Platforms",
      href: "/",
    },
  ];

  return (
    <Navbar className="bg-background/10" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <GamepadIcon size={24} />
          <p className="font-bold text-inherit ml-2">ZERO // PLAY</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.label}-${index}`}>
            <Link color="foreground" href={item.href}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem> */}
        {/*   <ThemeSwitch /> */}
        {/* </NavbarItem> */}
        <NavbarItem>
          <Button
            startContent={
              <StarIcon fill="yellow" className="text-yellow-300" size={16} />
            }
            as={Link}
            color="primary"
            href="https://github.com/parambirje/zeroplay"
            variant="flat"
            radius="sm"
            isExternal
          >
            Star
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color={"foreground"}
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
