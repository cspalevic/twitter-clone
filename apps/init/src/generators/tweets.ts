import csvParser from "csv-parser";
import { createReadStream } from "fs";
import path from "path";
import { Profile, Tweet } from "types-custom";
import { randomNumber } from "../utils";
import { MAX_PROFILES } from "./profiles";

const tweetDataset: string[] = [];

createReadStream(path.join(__dirname, "favorite_tweets.csv"))
  .pipe(csvParser())
  .on("data", ({ text }: { text: string }) => {
    tweetDataset.push(text);
  });

export const MAX_TWEETS_PER_PROFILE = 50;
export const MAX_COMMENTS_PER_TWEET = 10;

export const getTweets = (profiles: Profile[]): Partial<Tweet>[] => {
  const tweets: Partial<Tweet>[] = [];
  for (const { id: profileId } of profiles) {
    const maxTweets = randomNumber(MAX_TWEETS_PER_PROFILE);
    for (let i = 0; i < maxTweets; i++) {
      const content = tweetDataset[randomNumber(tweetDataset.length)];
      tweets.push({
        profileId,
        content,
      });
    }
  }
  return tweets;
};

export const getComments = (
  tweets: Tweet[],
  profiles: Profile[]
): Partial<Tweet>[] => {
  const comments: Partial<Tweet>[] = [];
  for (const { id: parentId } of tweets) {
    const shouldAddComments = Math.random() > 0.5;
    if (!shouldAddComments) continue;

    const maxComments = randomNumber(MAX_COMMENTS_PER_TWEET);
    for (let i = 0; i < maxComments; i++) {
      const { id: profileId } = profiles[randomNumber(MAX_PROFILES - 1)];
      const content = tweetDataset[randomNumber(tweetDataset.length)];
      comments.push({
        parentId,
        profileId,
        content,
      });
    }
  }
  return comments;
};
