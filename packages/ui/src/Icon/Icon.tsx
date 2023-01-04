import cx from "classnames";
import { ForwardedRef, forwardRef } from "react";
import styles from "./Icon.module.css";
import * as svgs from "./svgs";

export type IconName = keyof typeof svgs;
export type IconSize = "xs" | "sm" | "md" | "lg";
export type IconColor = "primary" | "secondary" | "tertiary" | "green";

export type IconProps = {
  iconName: IconName;
  className?: string;
  size?: IconSize;
  color?: IconColor;
};

export const Icon = forwardRef(
  (
    { iconName, className, size = "md", color = "primary" }: IconProps,
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
        className={cx(
          styles.iconContainer,
          styles[`iconSize-${size}`],
          styles[`iconColor-${color}`],
          className
        )}
      >
        <Component />
      </div>
    );
  }
);

Icon.displayName = "icon";
