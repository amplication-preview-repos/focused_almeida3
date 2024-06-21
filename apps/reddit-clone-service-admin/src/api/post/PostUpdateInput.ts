import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { SubredditWhereUniqueInput } from "../subreddit/SubredditWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  subreddit?: SubredditWhereUniqueInput | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
