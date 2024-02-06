/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Button } from "@radix-ui/themes";

type Prop = {
  name: string;
};

export default function BasicButton(prop: Prop) {
  return (
    <Button
      css={css`
        margin: 10px;
        padding: 20px;
        background-color: #fcd7d7;
        color: navy;
        border: 1px solid #690909;
        color: #690909;

        &:hover {
          background-color: #690909;
          color: #fcd7d7;
        }
      `}>
      {prop.name}
    </Button>
  );
}
