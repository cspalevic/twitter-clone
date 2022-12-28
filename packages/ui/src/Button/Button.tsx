import cx from "classnames";
import { ForwardedRef, MouseEventHandler, forwardRef } from "react";
import { Icon, IconProps, Text } from "ui";
import styles from "./Button.module.css";

export type ButtonProps = {
  disabled?: boolean;
  size?: "sm" | "md";
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export type IconButtonProps = Omit<ButtonProps, "text"> & {
  iconProps: IconProps;
};

export const IconButton = ({
  disabled,
  onClick,
  iconProps: { size = "md", ...rest },
}: IconButtonProps) => (
  <button
    className={cx(styles.iconButton)}
    disabled={disabled}
    onClick={onClick}
  >
    <Icon size={size} {...rest} />
  </button>
);

export const Button = forwardRef(
  (
    { disabled, text, onClick, size = "md" }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => (
    <button
      ref={ref}
      className={cx(styles.button, styles[`buttonSize-${size}`])}
      disabled={disabled}
      onClick={onClick}
    >
      <Text text={text} size={size} />
    </button>
  )
);

Button.displayName = "button";
