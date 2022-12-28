import cx from "classnames";
import styles from "./Text.module.css";

export type TextSize = "xs" | "sm" | "md" | "lg";
export type TextColor = "primary" | "secondary" | "tertiary" | "green";

export type TextProps = {
  text: string;
  size?: TextSize;
  color?: TextColor;
  bold?: boolean;
  className?: string;
};

export const Text = ({
  text,
  size = "md",
  color = "primary",
  bold = false,
  className,
}: TextProps) => (
  <p
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
  </p>
);
