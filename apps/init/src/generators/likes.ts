import { Like, Profile, Tweet } from "types-custom";
import { randomNumber } from "../utils";
import { MAX_PROFILES } from "./profiles";

const MAX_LIKES_PER_TWEET = 25;

export const getLikes = (
  tweets: Tweet[],
  profiles: Profile[]
): Partial<Like>[] => {
  const likes: Partial<Like>[] = [];
  for (const { id: tweetId } of tweets) {
    const maxLikes = randomNumber(MAX_LIKES_PER_TWEET);
    for (let i = 0; i < maxLikes; i++) {
      const { id: profileId } = profiles[randomNumber(MAX_PROFILES - 1)];
      if (
        likes.find(
          (like) => like.tweetId === tweetId && like.profileId === profileId
        )
      )
        continue;
      likes.push({ tweetId, profileId });
    }
  }
  return likes;
};
