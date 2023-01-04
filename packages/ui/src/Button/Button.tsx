import cx from "classnames";
import { ForwardedRef, MouseEventHandler, forwardRef } from "react";
import { Icon, IconProps, Text } from "ui";
import styles from "./Button.module.css";

export type ButtonProps = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
  size?: "sm" | "md";
  style?: "primary" | "secondary" | "tertiary";
};

export type IconButtonProps = Omit<ButtonProps, "text"> & {
  iconProps: IconProps;
};

export const IconButton = ({
  className,
  disabled,
  onClick,
  style = "primary",
  iconProps: { size = "md", ...rest },
}: IconButtonProps) => (
  <button
    className={cx(styles.iconButton, styles[`buttonStyle-${style}`], className)}
    disabled={disabled}
    onClick={onClick}
  >
    <Icon size={size} {...rest} />
  </button>
);

export const Button = forwardRef(
  (
    {
      className,
      disabled,
      text,
      onClick,
      style = "primary",
      size = "md",
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => (
    <button
      ref={ref}
      className={cx(
        styles.button,
        styles[`buttonStyle-${style}`],
        styles[`buttonSize-${size}`],
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      <Text
        text={text}
        size={size}
        color={style === "primary" ? "primary" : "black"}
      />
    </button>
  )
);

Button.displayName = "button";
