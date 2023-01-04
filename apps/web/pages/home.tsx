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

type Tweet = {
  id: string;
  content: string;
  profile: Profile;
  commentCount: AggregateCount;
  retweetCount: AggregateCount[];
  likeCount: AggregateCount[];
};

type Props = {
  timeline: Tweet[] | null;
};

export const getStaticProps = async (): Promise<{
  props: { timeline: Tweet[] | null };
}> => {
  const { data: timeline } = await supabase
    .from("tweets")
    .select<string, Tweet>(
      `
      id, 
      content, 
      profile:profileId ( 
        id, 
        createdAt, 
        bio, 
        name, 
        handle, 
        imageUrl 
      ),
      commentCount:parentId (
        count
      ),
      retweetCount:retweets (
        count
      ),
      likeCount:likes (
        count
      )
    `
    )
    .limit(100);
  return {
    props: {
      timeline,
    },
  };
};

const Home = ({ timeline }: Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.feed}>
        <StickyHeader>
          <div className={styles.header}>
            <Text text="Home" bold />
            <IconButton
              onClick={() => alert("Top Tweets")}
              iconProps={{ iconName: "TopTweet", size: "sm" }}
              style="secondary"
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
        {timeline?.map(
          ({ id, content, profile, commentCount, retweetCount, likeCount }) => (
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
              comments={commentCount.count}
              retweets={retweetCount.length ? retweetCount[0].count : 0}
              likes={likeCount.length ? likeCount[0].count : 0}
            />
          )
        )}
      </div>
      <div className={styles.sidebar}>
        <div className={styles.fixedSidebar}>
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
    </div>
  );
};

export default Home;
