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
  );
}
