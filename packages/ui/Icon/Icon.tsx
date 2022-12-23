import iconMap from "./iconMap";

type IconName = keyof typeof iconMap;

export type IconProps = {
  iconName: IconName;
};

export const Icon = ({ iconName }: IconProps) => {
  if (!(iconName in iconMap)) {
    console.error(`${iconName} does not exist`);
    return null;
  }
  const Component = iconMap[iconName];
  return <Component />;
};
