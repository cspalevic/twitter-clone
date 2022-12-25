import cx from "classnames";
import { ForwardedRef, forwardRef } from "react";
import styles from "./Icon.module.css";
import * as svgs from "./svgs";

export type IconName = keyof typeof svgs;

export type IconProps = {
  iconName: IconName;
  className?: string;
  size?: "sm" | "md" | "lg";
};

export const Icon = forwardRef(
  (
    { iconName, className, size = "md" }: IconProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const exists = iconName in svgs;
    if (!exists) {
      console.warn(`${iconName} does not exist`);
    }
    const Component = exists ? svgs[iconName] : svgs.Blank;
    return (
      <div
        ref={ref}
        className={cx(styles.iconContainer, styles[size], className)}
      >
        <Component />
      </div>
    );
  }
);

Icon.displayName = "icon";