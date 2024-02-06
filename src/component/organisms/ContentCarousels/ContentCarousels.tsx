import React from "react";
import CardContent from "../../molecules/Card/CardContent";
import { Flex } from "@radix-ui/themes";

export default function ContentCarousels() {
  return (
    <div>
      <Flex gap="3" direction="row">
        <CardContent />
        <CardContent />
        <CardContent />
      </Flex>
    </div>
  );
}
