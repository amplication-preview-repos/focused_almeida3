import { Comment } from "../comment/Comment";
import { Subreddit } from "../subreddit/Subreddit";
import { User } from "../user/User";

export type Post = {
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  subreddit?: Subreddit | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
