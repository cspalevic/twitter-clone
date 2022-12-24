import { ComponentMeta } from "@storybook/react";
import { Menu, MenuItem } from "ui";

type MenuType = typeof Menu;
type MenuMeta = ComponentMeta<MenuType>;

export const SampleMenu = () => (
  <Menu title="Choose audience">
    <>
      <MenuItem onClick={() => alert("Everyone selected!")}>
        <p>Everyone</p>
      </MenuItem>
      <MenuItem onClick={() => alert("Twitter Circle selected!")}>
        <p>Twitter Circle</p>
      </MenuItem>
    </>
  </Menu>
);

export default {
  title: "Menu",
  component: Menu,
} as MenuMeta;
