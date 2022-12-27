import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Navbar } from "ui";

type NavbarType = typeof Navbar;
type NavbarStory = ComponentStory<NavbarType>;
type NavbarMeta = ComponentMeta<NavbarType>;

const Template: NavbarStory = (args) => (
  <div
    style={{
      width: "500px",
      height: "500px",
      display: "flex",
      alignItems: "flex-end",
    }}
  >
    <Navbar {...args} />
  </div>
);

export const SampleNavbar = Template.bind({});
SampleNavbar.args = {
  items: [
    {
      iconName: "Home",
      text: "Home",
      onClick: () => alert("You clicked Home!"),
    },
    {
      iconName: "Hashtag",
      text: "Explore",
      onClick: () => alert("You clicked Explore!"),
    },
  ],
};

export const NestedNavbar = Template.bind({});
NestedNavbar.args = {
  items: [
    {
      iconName: "Home",
      text: "Home",
      onClick: () => alert("You clicked Home!"),
    },
    {
      iconName: "Hashtag",
      text: "Explore",
      onClick: () => alert("You clicked Explore!"),
    },
    {
      text: "Creator Studio",
      items: [
        {
          iconName: "Heart",
          text: "Newsletters",
        },
        {
          iconName: "Analytics",
          text: "Analytics",
        },
      ],
    },

    {
      text: "Professional Studios",
      items: [
        {
          iconName: "Emoji",
          text: "Professional Home",
        },
        {
          iconName: "Email",
          text: "Twitter Ads",
        },
      ],
    },
  ],
};

export default {
  title: "Navbar",
  component: Navbar,
} as NavbarMeta;
