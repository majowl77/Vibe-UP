import React from "react";
import { Flex, Text, Button } from "@radix-ui/themes";

export default function SideBar() {
  return (
    <div>
      <h1> MenuTabs </h1>
      <div>
        <Button>Bookmark</Button>
        <Button variant="ghost">Edit profile</Button>
      </div>
    </div>
  );
}
