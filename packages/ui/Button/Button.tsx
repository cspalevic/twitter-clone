import { ChangeEventHandler } from "react";
import styles from "./Button.module.css";

export type ButtonProps = {
  disabled?: boolean;
  text: string;
  onClick: ChangeEventHandler<HTMLButtonElement>;
};

export const Button = ({ disabled, text, onClick }: ButtonProps) => (
  <button className={styles.button} disabled={disabled} onClick={onClick}>
    {text}
  </button>
);
