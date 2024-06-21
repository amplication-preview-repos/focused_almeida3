import { SubredditWhereInput } from "./SubredditWhereInput";
import { SubredditOrderByInput } from "./SubredditOrderByInput";

export type SubredditFindManyArgs = {
  where?: SubredditWhereInput;
  orderBy?: Array<SubredditOrderByInput>;
  skip?: number;
  take?: number;
};
