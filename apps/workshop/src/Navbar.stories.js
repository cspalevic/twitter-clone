import { jsx as _jsx } from "react/jsx-runtime";
import { Navbar } from "ui";

const Template = (args) => _jsx(Navbar, Object.assign({}, args));
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
};
