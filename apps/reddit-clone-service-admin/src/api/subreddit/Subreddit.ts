import { Post } from "../post/Post";

export type Subreddit = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  posts?: Array<Post>;
  updatedAt: Date;
};
