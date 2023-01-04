import cx from "classnames";
import styles from "./Text.module.css";

export type TextSize = "xs" | "sm" | "md" | "lg";
export type TextColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "green"
  | "black";

export type TextProps = {
  text: string;
  size?: TextSize;
  color?: TextColor;
  bold?: boolean;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
};

export const Text = ({
  text,
  className,
  as = "span",
  size = "md",
  color = "primary",
  bold = false,
}: TextProps) => {
  const Component = as;
  return (
    <Component
      className={cx(
        styles.text,
        styles[`textSize-${size}`],
        styles[`textColor-${color}`],
        {
          [styles.textBold]: bold,
        },
        className
      )}
    >
      {text}
    </Component>
  );
};
