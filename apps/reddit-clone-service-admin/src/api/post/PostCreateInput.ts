import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { SubredditWhereUniqueInput } from "../subreddit/SubredditWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  subreddit?: SubredditWhereUniqueInput | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
