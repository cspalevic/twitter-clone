import { ComponentMeta } from "@storybook/react";
import { useRef, useState } from "react";
import { Button, Popup, PopupProps } from "ui";
import styles from "./Popup.module.css";

type PopupType = typeof Popup;
type PopupMeta = ComponentMeta<PopupType>;

export const SamplePopup = ({
  placement = "left",
  inverse = false,
  showArrow = false,
}: Pick<PopupProps, "showArrow" | "inverse" | "placement">) => {
  const container = useRef<HTMLDivElement>(null);
  const anchorEl = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div ref={container} className={styles.container}>
      {isOpen && (
        <Popup
          onClose={() => setIsOpen(false)}
          showArrow={showArrow}
          inverse={inverse}
          placement={placement}
          anchorEl={anchorEl}
        >
          <h1>Hi!</h1>
        </Popup>
      )}
      <Button
        disabled={isOpen}
        ref={anchorEl}
        text="Click me"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default {
  title: "Popup",
  component: Popup,
  argTypes: {
    placement: {
      control: "select",
      options: [
        "topLeft",
        "top",
        "topRight",
        "right",
        "bottomRight",
        "bottom",
        "bottomLeft",
        "left",
      ],
    },
    inverse: {
      control: "boolean",
    },
    showArrow: {
      control: "boolean",
    },
  },
} as PopupMeta;
