import cx from "classnames";
import { ReactNode } from "react";
import styles from "./StickyHeader.module.css";

export type StickyHeaderProps = {
  className?: string;
  children: ReactNode;
};

export const StickyHeader = ({ className, children }: StickyHeaderProps) => (
  <div className={cx(styles.stickyHeader, className)}>{children}</div>
);
