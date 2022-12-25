import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type Audience = "everyone" | "twitter-circle";
type Interactees = "everyone" | "following" | "mentions";

type PostInputValues = {
  audience: [Audience, Dispatch<SetStateAction<Audience>>];
  interactees: [Interactees, Dispatch<SetStateAction<Interactees>>];
};

const PostInputContext = createContext<PostInputValues | undefined>(undefined);

export type PostInputProviderProps = {
  children: JSX.Element;
};

export const PostInputProvider = ({ children }: PostInputProviderProps) => {
  const audience = useState<Audience>("everyone");
  const interactees = useState<Interactees>("everyone");

  return (
    <PostInputContext.Provider value={{ audience, interactees }}>
      {children}
    </PostInputContext.Provider>
  );
};

export const usePostInput = () => {
  const context = useContext<PostInputValues | undefined>(PostInputContext);
  if (context === undefined) {
    throw new Error("You can only usePostInput inside a PostInputProvider");
  }

  return context;
};
