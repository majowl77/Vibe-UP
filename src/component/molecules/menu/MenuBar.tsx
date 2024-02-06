import { Flex, Box } from "@radix-ui/themes";
import BasicButton from "../../atoms/Button/BasicButton";

export default function MenuBar() {
  const menuTapsNames = ["Home", "Explore", "People", "Saved", "Create Post"];

  return (
    <div>
      <Flex gap="3" direction="column" align="start" justify="start">
        {menuTapsNames.map((item) => {
          return (
            <Box width="9" height="9">
              <BasicButton name={item} />
            </Box>
          );
        })}
      </Flex>
    </div>
  );
}
