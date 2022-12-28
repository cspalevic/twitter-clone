import { ReactNode, createContext, useContext, useMemo } from "react";
import { Maybe } from "types-custom";
import { usePostInputReducer } from "./hooks/usePostInputReducer";

type PostInputValues = ReturnType<typeof usePostInputReducer>;
type PostInputState = PostInputValues["state"];
type PostInputActions = PostInputValues["actions"];

const PostInputStateContext = createContext<Maybe<PostInputState>>(null);
const PostInputActionsContext = createContext<Maybe<PostInputActions>>(null);

export type PostInputProviderProps = {
  children: ReactNode;
};

export const PostInputProvider = ({ children }: PostInputProviderProps) => {
  const { state, actions } = usePostInputReducer();

  const memoizedValues = useMemo(() => state, [state]);

  return (
    <PostInputStateContext.Provider value={memoizedValues}>
      <PostInputActionsContext.Provider value={actions}>
        {children}
      </PostInputActionsContext.Provider>
    </PostInputStateContext.Provider>
  );
};

export const usePostInputState = () => {
  const context = useContext(PostInputStateContext);
  if (!context) {
    throw new Error("You can only usePostInputState inside <PostProvider />");
  }

  return context;
};

export const usePostInputActions = () => {
  const context = useContext(PostInputActionsContext);
  if (!context) {
    throw new Error("You can only usePostInputActiosn inside <PostProvider />");
  }

  return context;
};
