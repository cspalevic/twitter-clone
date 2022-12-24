import cx from "classnames";
import { RefObject, useMemo, useRef } from "react";
import {
  useBoundingclientrect as useBoundingClientRect,
  useOutsideClick,
} from "rooks";
import styles from "./Popup.module.css";
import { getPosition } from "./utils";

const ARROW_HEIGHT = 7;

export type Placement =
  | "topLeft"
  | "top"
  | "topRight"
  | "right"
  | "bottomRight"
  | "bottom"
  | "bottomLeft"
  | "left";
type PlacementArrowSupport = "top" | "right" | "bottom" | "left";

const oppositePlacements: Record<PlacementArrowSupport, PlacementArrowSupport> =
  {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right",
  };

const placementStylesMap: Record<PlacementArrowSupport, string> = {
  top: styles.arrowTop,
  right: styles.arrowRight,
  bottom: styles.arrowBottom,
  left: styles.arrowLeft,
};

export type PopupProps = {
  anchorEl: RefObject<HTMLElement>;
  onClose: () => void;
  placement?: Placement;
  inverse?: boolean;
  showArrow?: boolean;
  children?: JSX.Element;
};

export const Popup = ({
  anchorEl,
  onClose,
  placement = "top",
  inverse = false,
  showArrow = false,
  children,
}: PopupProps) => {
  const popupMenuRef = useRef<HTMLDivElement>(null);
  const popupMenuRect = useBoundingClientRect(popupMenuRef);
  const anchorRect = useBoundingClientRect(anchorEl);
  useOutsideClick(popupMenuRef, onClose);

  const position = useMemo(() => {
    return getPosition(placement, popupMenuRect, anchorRect, {
      inverse,
      padding: showArrow ? ARROW_HEIGHT : 0,
    });
  }, [placement, popupMenuRect, anchorRect, inverse, showArrow]);

  return (
    <div
      ref={popupMenuRef}
      className={styles.container}
      style={{ ...(position ?? {}) }}
    >
      {showArrow &&
        placement in oppositePlacements &&
        placement in placementStylesMap && (
          <div
            className={cx({
              [styles.arrow]: showArrow,
              [placementStylesMap[
                !inverse
                  ? oppositePlacements[placement as PlacementArrowSupport]
                  : (placement as PlacementArrowSupport)
              ]]: true,
            })}
          />
        )}
      <div
        className={cx(styles.popup, {
          [styles.popupVisible]: !!position,
        })}
      >
        {children}
      </div>
    </div>
  );
};
