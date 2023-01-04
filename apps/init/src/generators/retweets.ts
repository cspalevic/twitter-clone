import { Profile, Retweet, Tweet } from "types-custom";
import { randomNumber } from "../utils";
import { MAX_PROFILES } from "./profiles";

const MAX_RETWEETS_PER_TWEET = 25;

export const getRetweets = (
  tweets: Tweet[],
  profiles: Profile[]
): Partial<Retweet>[] => {
  const retweets: Partial<Retweet>[] = [];
  for (const { id: tweetId } of tweets) {
    const maxRetweets = randomNumber(MAX_RETWEETS_PER_TWEET);
    for (let i = 0; i < maxRetweets; i++) {
      const { id: profileId } = profiles[randomNumber(MAX_PROFILES - 1)];
      if (
        retweets.find(
          (retweet) =>
            retweet.tweetId === tweetId && retweet.profileId === profileId
        )
      )
        continue;
      retweets.push({ tweetId, profileId });
    }
  }
  return retweets;
};
