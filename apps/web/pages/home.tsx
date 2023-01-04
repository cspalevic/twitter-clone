import Image from "next/image";
import { Profile } from "types-custom";
import {
  IconButton,
  List,
  Post,
  PostInput,
  RecommendedFollow,
  Searchbar,
  StickyHeader,
  Text,
  TrendingItem,
} from "ui";
import supabase from "../utils/supabase";
import styles from "./home.module.css";

type AggregateCount = {
  count: number;
};

type TweetFeed = {
  id: string;
  content: string;
  profile: Profile;
  comments: AggregateCount;
  retweets: AggregateCount[];
  likes: AggregateCount[];
};

type Props = {
  tweets: TweetFeed[] | null;
};

export const getStaticProps = async (): Promise<{
  props: { tweets: TweetFeed[] | null };
}> => {
  const { data: tweets } = await supabase
    .from("tweets")
    .select<string, TweetFeed>(
      `id, content, profile:profileId ( id, createdAt, bio, name, handle, imageUrl ), parentId ( count ), retweets ( count ), likes ( count )`
    )
    .limit(100);
  return {
    props: {
      tweets,
    },
  };
};

const Home = ({ tweets }: Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.feed}>
        <StickyHeader>
          <div className={styles.header}>
            <Text text="Home" bold />
            <IconButton
              onClick={() => alert("Top Tweets")}
              iconProps={{ iconName: "TopTweet", size: "sm" }}
            />
          </div>
        </StickyHeader>
        <PostInput
          avatarImage={
            <Image
              alt="Person Avatar"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg"
              width={50}
              height={50}
            />
          }
        />
        {tweets?.map(({ id, content, profile, comments, retweets, likes }) => (
          <Post
            key={id}
            avatarImage={
              <Image
                alt={profile?.name}
                src={profile?.imageUrl}
                width={50}
                height={50}
              />
            }
            profile={profile}
            text={content}
            comments={comments?.count ?? 0}
            retweets={retweets.length ? retweets[0].count : 0}
            likes={likes.length ? likes[0].count : 0}
          />
        ))}
      </div>
      <div className={styles.sidebar}>
        <Searchbar
          onSearch={() =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve([1, 2, 3]);
              }, 1500);
            })
          }
        />
        <List title="What's happening">
          {[
            { name: "Steelers at Ravens" },
            { name: "VSCode" },
            { name: "Jeremy Renner" },
            { name: "Outback Bowl" },
            { name: "Brock Purdy" },
          ].map(({ name }, index) => (
            <TrendingItem name={name} key={index} />
          ))}
        </List>
        <List title="Who to follow">
          {[
            {
              avatarImage: (
                <Image
                  alt="Person Avatar"
                  src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg"
                  width={50}
                  height={50}
                />
              ),
              name: "Charllie Spalevic",
              handle: "@cspalevic",
            },
          ].map(({ avatarImage, name, handle }, index) => (
            <RecommendedFollow
              avatarImage={avatarImage}
              name={name}
              handle={handle}
              key={index}
            />
          ))}
        </List>
      </div>
    </div>
  );
};

export default Home;
