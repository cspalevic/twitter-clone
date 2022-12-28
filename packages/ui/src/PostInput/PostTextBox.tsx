import { usePostInputActions, usePostInputState } from "./PostInputProvider";
import styles from "./PostTextBox.module.css";

export type PostTextBoxProps = {
  placeholder: string;
  lines?: number;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const PostTextBox = ({ placeholder, lines = 1 }: PostTextBoxProps) => {
  const { status } = usePostInputState();
  const { setActive } = usePostInputActions();

  const onFocus = () => {
    if (status === "inactive") {
      setActive();
    }
  };

  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      onFocus={onFocus}
    />
  );
};
