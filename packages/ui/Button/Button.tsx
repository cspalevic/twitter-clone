import { ForwardedRef, MouseEventHandler, forwardRef } from "react";
import styles from "./Button.module.css";

export type ButtonProps = {
  disabled?: boolean;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

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
      {text}
    </button>
  )
);

Button.displayName = "button";
