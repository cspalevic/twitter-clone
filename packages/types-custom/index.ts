export type Maybe<T> = T | null;
export interface Tweet {
  id: string;
  createdAt: Date;
  profileId: string;
  parentId: string;
  content: string;
}
export interface Retweet {
  id: string;
  createdAt: Date;
  tweetId: string;
  profileId: string;
}
export interface Profile {
  id: string;
  createdAt: Date;
  name: string;
  handle: string;
  bio: string;
  imageUrl: string;
}
export interface Like {
  id: string;
  createdAt: Date;
  tweetId: string;
  profileId: string;
}
export interface Follow {
  id: string;
  createdAt: Date;
  sourceId: string;
  destinationId: string;
}
