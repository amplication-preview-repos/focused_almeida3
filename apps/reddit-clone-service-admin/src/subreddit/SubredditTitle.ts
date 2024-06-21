import { Subreddit as TSubreddit } from "../api/subreddit/Subreddit";

export const SUBREDDIT_TITLE_FIELD = "name";

export const SubredditTitle = (record: TSubreddit): string => {
  return record.name?.toString() || String(record.id);
};
