import React from "react";
import { Flex, Text, Button, Box } from "@radix-ui/themes";

export default function SideBar() {
  return (
    <section className="sideBar">
      <h3> MenuTabs </h3>
      <div>
        <Flex gap="3" direction="column" align="start" justify="start">
          <Box width="9" height="9">
            <Button variant="ghost">Home</Button>
          </Box>
          <Box width="9" height="9">
            <Button variant="ghost">Explore</Button>
          </Box>
          <Box width="9" height="9">
            <Button variant="ghost">People</Button>
          </Box>
          <Box width="9" height="9">
            <Button variant="ghost">Saved</Button>
          </Box>
          <Box width="9" height="9">
            <Button variant="ghost">Create Post</Button>
          </Box>
        </Flex>
      </div>
    </section>
  );
}
