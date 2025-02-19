import { Input, Kbd } from "@nextui-org/react";
import { SearchIcon } from "lucide-react";
import React from "react";

export default function BrowserSearch() {
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
    <div className="flex flex-col gap-4">
      <div className="z-10">
        <Kbd
          className="w-fit mr-2 bg-background/40 backdrop-blur-lg"
          keys={["command"]}
        >
          Ctrl + L
        </Kbd>
        <span>to focus the browser&apos;s URL bar.</span>
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
          radius="sm"
          classNames={{
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
        />
      </form>
    </div>
  );
}
