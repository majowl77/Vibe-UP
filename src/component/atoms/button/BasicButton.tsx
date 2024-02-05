import { Button } from "@radix-ui/themes";
import { css } from "@emotion/react";

type Prop = {
  name: string;
};

// const buttonStyles = css`
//   /* Your custom styles go here */
//   padding: 10px;
//   background-color: lightblue;
//   color: navy;
//   border: 1px solid navy;

//   &:hover {
//     background-color: lightcyan;
//   }
// `;

export default function BasicButton(prop: Prop) {
  return (
    <Button
      variant="ghost"
      css={css`
        padding: 10px;
        background-color: lightblue;
        color: navy;
        border: 1px solid navy;

        &:hover {
          background-color: lightcyan;
        }
        color: #690909;
      `}>
      {prop.name}
    </Button>
  );
}
