import cx from "classnames";
import { ChangeEventHandler, useRef, useState } from "react";
import { useOutsideClick } from "rooks";
import { Icon, LoadingIndicator, Text } from "ui";
import styles from "./Searchbar.module.css";

const USER_TYPING_THRESHOLD = 200;

export type SearchbarProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSearch: (searchText: string) => Promise<any[]>;
};

export const Searchbar = ({ onSearch }: SearchbarProps) => {
  const container = useRef(null);
  const userTyping = useRef<number | null>();
  const [isActive, setIsActive] = useState(false);
  const [isFetchingResults, setIsFetchingResults] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [results, setResults] = useState<any[]>([]);
  useOutsideClick(container, () => setIsActive(false));

  const search = async (searchText: string) => {
    setResults([]);
    setIsFetchingResults(true);
    const results = await onSearch(searchText);
    setResults(results);
    setIsFetchingResults(false);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (userTyping.current) clearTimeout(userTyping.current);
    const id = setTimeout(() => {
      search(event.target.value);
    }, USER_TYPING_THRESHOLD);
    userTyping.current = id as unknown as number;
  };

  return (
    <div ref={container}>
      <div
        className={cx(styles.searchbar, {
          [styles.searchbarActive]: isActive,
        })}
        onFocus={(e) => e.stopPropagation()}
      >
        <Icon
          iconName="Search"
          color={isActive ? "tertiary" : "secondary"}
          size="xs"
        />
        <input
          className={styles.input}
          placeholder="Search Twitter"
          onChange={handleChange}
          onFocus={() => setIsActive(true)}
        />
      </div>
      <div
        className={cx(styles.searchResultsContainer, {
          [styles.searchResultsContainerActive]: isActive,
        })}
      >
        {isFetchingResults && <LoadingIndicator />}
        <div className={styles.searchResults}>
          {!results.length && (
            <Text
              text="Try searching for people, topics, or keywords"
              color="secondary"
              size="sm"
            />
          )}
          {results.map((item) => (
            <div>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
