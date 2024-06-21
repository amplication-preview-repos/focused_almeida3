import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubredditWhereUniqueInput } from "../subreddit/SubredditWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostWhereInput = {
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  subreddit?: SubredditWhereUniqueInput;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
