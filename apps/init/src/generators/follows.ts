import { Follow, Profile } from "types-custom";
import { randomNumber } from "../utils";
import { MAX_PROFILES } from "./profiles";

export const getFollows = (profiles: Profile[]): Partial<Follow>[] => {
  const follows: Partial<Follow>[] = [];
  for (const { id: sourceId } of profiles) {
    const maxFollowing = randomNumber(MAX_PROFILES - 1);
    for (let j = 0; j < maxFollowing; j++) {
      const { id: destinationId } = profiles[randomNumber(MAX_PROFILES - 1)];

      if (
        sourceId === destinationId ||
        follows.find(
          (follow) =>
            follow.sourceId === sourceId &&
            follow.destinationId === destinationId
        )
      )
        continue;
      follows.push({
        sourceId,
        destinationId,
      });
    }
  }
  return follows;
};
