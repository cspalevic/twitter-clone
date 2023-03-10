import { PostInputState } from "./state";

export type PostInputStatusActions = "SET_ACTIVE";
export type PostInputAudienceActions = "UPDATE_AUDIENCE";
export type PostInputInteracteesActions = "UPDATE_INTERACTEES";
export type PostInputTweetActions = "UPDATE_TWEET";

type Action = {
  type:
    | PostInputStatusActions
    | PostInputAudienceActions
    | PostInputInteracteesActions
    | PostInputTweetActions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
};

export const reducer = (
  state: PostInputState,
  { type, payload }: Action
): PostInputState => {
  switch (type) {
    case "SET_ACTIVE":
      return {
        ...state,
        status: "active",
      };
    case "UPDATE_AUDIENCE":
      return {
        ...state,
        audience: payload?.audience,
      };
    case "UPDATE_INTERACTEES":
      return {
        ...state,
        interactees: payload?.interactees,
      };
    case "UPDATE_TWEET":
      return {
        ...state,
        tweet: payload?.tweet,
      };
    default:
      return state;
  }
};
