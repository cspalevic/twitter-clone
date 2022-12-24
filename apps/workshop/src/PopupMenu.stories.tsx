import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useRef, useState } from "react";
import { Button, PopupMenu, PopupMenuProps } from "ui";
import styles from "./PopupMenu.module.css";

type PopupMenuType = typeof PopupMenu;
type PopupMenuMeta = ComponentMeta<PopupMenuType>;

export const SamplePopupMenu = ({
  placement = "left",
  inverse = false,
  showArrow = false,
}: Pick<PopupMenuProps, "showArrow" | "inverse" | "placement">) => {
  const container = useRef<HTMLDivElement>(null);
  const anchorEl = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div ref={container} className={styles.container}>
      {isOpen && (
        <PopupMenu
          showArrow={showArrow}
          inverse={inverse}
          placement={placement}
          anchorEl={anchorEl}
        >
          <h1>Hi!</h1>
        </PopupMenu>
      )}
      <Button
        ref={anchorEl}
        text="Click me"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default {
  title: "Popup Menu",
  component: PopupMenu,
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
} as PopupMenuMeta;
