import { Input } from "@nextui-org/react";
import { Search } from "lucide-react";

export function Searchbar() {
  return (
    <Input
      label="Search"
      startContent={<Search className="size-5" />}
      isClearable
    />
  );
}
