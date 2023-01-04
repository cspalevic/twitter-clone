import { createClient } from "@supabase/supabase-js";
import { load } from "dotenv-mono";
import { Profile, Tweet } from "types-custom";
import { getFollows } from "./generators/follows";
import { getLikes } from "./generators/likes";
import { getProfiles } from "./generators/profiles";
import { getRetweets } from "./generators/retweets";
import { getComments, getTweets } from "./generators/tweets";

load();

const { SUPABASE_PROJECT_URL, SUPABASE_PROJECT_KEY } = process.env;

if (!SUPABASE_PROJECT_URL || !SUPABASE_PROJECT_KEY) {
  console.error(
    "You must add SUPABASE_PROJECT_URL and SUPABASE_PROJECT_KEY to the root .env file in order to seed data into Supabase."
  );
  process.exit(1);
}

const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_PROJECT_KEY);

const run = async () => {
  const { data: profiles, error: profilesError } = await supabase
    .from("profiles")
    .insert(getProfiles())
    .select<"*", Profile>();
  if (profilesError) {
    console.error("Error occurred while adding profiles:", profilesError);
    process.exit(1);
  }

  const { error: followsError } = await supabase
    .from("follows")
    .insert(getFollows(profiles));
  if (followsError) {
    console.error("Error occurred while adding follows:", followsError);
    process.exit(1);
  }

  const { data: tweets, error: tweetsError } = await supabase
    .from("tweets")
    .insert(getTweets(profiles))
    .select<"*", Tweet>();
  if (tweetsError) {
    console.error("Error occurred while adding tweets:", tweetsError);
    process.exit(1);
  }

  const { data: comments, error: commentsError } = await supabase
    .from("tweets")
    .insert(getComments(tweets, profiles))
    .select<"*", Tweet>();
  if (commentsError) {
    console.error("Error occurred while adding comments:", commentsError);
    process.exit(1);
  }

  const { error: tweetLikesError } = await supabase
    .from("likes")
    .insert(getLikes(tweets, profiles))
    .select();
  if (tweetLikesError) {
    console.error("Error occurred while adding tweet likes:", tweetLikesError);
    process.exit(1);
  }

  const { error: commentLikesError } = await supabase
    .from("likes")
    .insert(getLikes(comments, profiles))
    .select();
  if (commentLikesError) {
    console.error(
      "Error occurred while adding tweet comment likes:",
      commentLikesError
    );
    process.exit(1);
  }

  const { error: tweetRetweetsError } = await supabase
    .from("retweets")
    .insert(getRetweets(tweets, profiles))
    .select();
  if (tweetRetweetsError) {
    console.error(
      "Error occurred while adding tweet retweets:",
      tweetRetweetsError
    );
    process.exit(1);
  }

  const { error: commentRetweetsError } = await supabase
    .from("retweets")
    .insert(getRetweets(comments, profiles))
    .select();
  if (commentRetweetsError) {
    console.error(
      "Error occurred while adding comment retweets:",
      commentRetweetsError
    );
    process.exit(1);
  }

  console.log("Seeding complete.");
};

run();
