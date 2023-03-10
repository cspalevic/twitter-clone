import { ComponentMeta } from "@storybook/react";
import { ProfileButton } from "ui";

type ProfileButtonType = typeof ProfileButton;
type ProfileButtonMeta = ComponentMeta<ProfileButtonType>;

export const SampleProfileButton = () => (
  <div
    style={{
      width: "500px",
      height: "500px",
      display: "flex",
      alignItems: "flex-end",
    }}
  >
    <ProfileButton
      avatarImage={
        <img
          alt="Person Avatar"
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg"
          width={50}
          height={50}
        />
      }
      name="Charllie Spalevic"
      handle="@cspalevic"
    />
  </div>
);

export default {
  title: "Profile Button",
  component: ProfileButton,
} as ProfileButtonMeta;
