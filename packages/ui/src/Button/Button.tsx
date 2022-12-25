import { ForwardedRef, MouseEventHandler, forwardRef } from "react";
import { Icon, IconProps } from "../Icon/Icon";
import { Text } from "../Text/Text";
import styles from "./Button.module.css";

export type ButtonProps = {
  disabled?: boolean;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export type IconButtonProps = Omit<ButtonProps, "text"> & {
  iconProps: IconProps;
};

export const IconButton = ({
  disabled,
  onClick,
  iconProps,
}: IconButtonProps) => (
  <button className={styles.iconButton} disabled={disabled} onClick={onClick}>
    <Icon {...iconProps} />
  </button>
);

export const Button = forwardRef(
  (
    { disabled, text, onClick }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => (
    <button
      ref={ref}
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
    >
      <Text text={text} />
    </button>
  )
);

Button.displayName = "button";
