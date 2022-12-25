import cx from "classnames";
import styles from "./Text.module.css";

type TextSize = "sm" | "md" | "lg";
type TextColor = "primary" | "secondary";

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
