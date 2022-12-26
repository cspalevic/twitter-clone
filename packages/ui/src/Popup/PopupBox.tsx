import cx from "classnames";
import { useRef } from "react";
import { useOutsideClick } from "rooks";
import { PopupProps } from "./Popup";
import styles from "./PopupBox.module.css";
import { usePosition } from "./hooks/usePosition";

const ARROW_HEIGHT = 7;

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

export const PopupBox = ({
  anchorEl,
  onClose,
  className,
  placement = "top",
  inverse = false,
  showArrow = false,
  children,
}: PopupProps) => {
  const popupMenuRef = useRef(null);
  const position = usePosition(anchorEl, popupMenuRef, {
    placement,
    inverse,
    padding: showArrow ? ARROW_HEIGHT : 0,
  });
  useOutsideClick(popupMenuRef, onClose);

  return (
    <div
      ref={popupMenuRef}
      className={styles.container}
      style={{ ...position }}
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
        className={cx(styles.popup, className, {
          [styles.popupVisible]: !!position,
        })}
      >
        {children}
      </div>
    </div>
  );
};
