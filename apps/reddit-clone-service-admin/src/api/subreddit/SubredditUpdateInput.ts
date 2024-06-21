import { PostUpdateManyWithoutSubredditsInput } from "./PostUpdateManyWithoutSubredditsInput";

export type SubredditUpdateInput = {
  description?: string | null;
  name?: string | null;
  posts?: PostUpdateManyWithoutSubredditsInput;
};
