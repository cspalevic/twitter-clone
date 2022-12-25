import { ReactNode } from "react";
import { Header } from "./Header";
import styles from "./Layout.module.css";

export type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.layoutSpread}>
    <div className={styles.layoutContainer}>
      <Header />
      <main>{children}</main>
    </div>
  </div>
);
