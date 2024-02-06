/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { ReactElement } from "react";
import { SerializedStyles } from "@emotion/react";

export interface ComponentProps {
  clsx?: SerializedStyles;
}

export interface HeaderProps extends ComponentProps {
  children?: ReactElement;
}

const Header = (props: HeaderProps) => {
  const { children } = props;

  return (
    <header
      css={css`
        display: flex;
        align-items: center;
        width: 100%;
        padding: 20px;
        border-bottom: 0.75px solid;

        color: #690909;
      `}>
      <h1
        css={css`
          flex: 1 1 auto;
          color: #690909;
          margin: 0;
        `}>
        Header is here
      </h1>
      <div>{children}</div>
    </header>
  );
};

export { Header };
