import { useCallback, useReducer } from "react";
import { reducer } from "../state/postInputReducer";
import {
  PostInputAudience,
  PostInputInteractees,
  initialState,
} from "../state/state";

export const usePostInputReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setActive = useCallback(() => {
    dispatch({ type: "SET_ACTIVE" });
  }, [dispatch]);

  const updateAudience = useCallback(
    (audience: PostInputAudience) => {
      dispatch({ type: "UPDATE_AUDIENCE", payload: { audience } });
    },
    [dispatch]
  );

  const updateInteractees = useCallback(
    (interactees: PostInputInteractees) => {
      dispatch({ type: "UPDATE_INTERACTEES", payload: { interactees } });
    },
    [dispatch]
  );

  const updateTweet = useCallback(
    (tweet: string) => {
      dispatch({ type: "UPDATE_TWEET", payload: { tweet } });
    },
    [dispatch]
  );

  return {
    state,
    actions: {
      setActive,
      updateAudience,
      updateInteractees,
      updateTweet,
    },
  };
};
