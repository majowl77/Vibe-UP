/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export default function BasicCheckbox() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Checkbox.Root
        css={css`
          background-color: white;
          width: 25px;
          height: 25px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);

          &:hover {
            background-color: #291f43;
          }
          &:focus {
            box-shadow: 0 0 0 2px black;
          }
        `}
        defaultChecked
        id="c1">
        <Checkbox.Indicator
          css={css`
            color: #baa7ff;
          `}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label
        css={css`
          color: rgb(122, 61, 144);
          padding-left: 15px;
          font-size: 15px;
          line-height: 1;
        `}
        htmlFor="c1">
        Accept terms and conditions.
      </label>
    </div>
  );
}
