import { faker } from "@faker-js/faker";
import { Profile } from "types-custom";

export const MAX_PROFILES = 100;

export const getProfiles = (): Partial<Profile>[] => {
  const profiles: Partial<Profile>[] = [];
  for (let i = 0; i < MAX_PROFILES; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const name = `${firstName} ${lastName}`;
    const handle = faker.internet.userName(firstName, lastName);
    const imageUrl = faker.internet.avatar();
    const bio = `${faker.word.adjective()} ${faker.name.jobTitle()}`;

    if (profiles.find((profile) => profile.handle === handle)) continue;
    profiles.push({
      name,
      handle,
      imageUrl,
      bio,
    });
  }
  return profiles;
};
