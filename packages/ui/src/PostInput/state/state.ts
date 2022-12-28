export type PostInputStatus = "active" | "inactive";

export type PostInputAudience = "everyone" | "twitter-circle";

export type PostInputInteractees = "everyone" | "following" | "mentions";

export type PostInputState = {
  status: PostInputStatus;
  audience: PostInputAudience;
  interactees: PostInputInteractees;
};

export const initialState: PostInputState = {
  status: "inactive",
  audience: "everyone",
  interactees: "everyone",
};
