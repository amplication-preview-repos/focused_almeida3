import { PostCreateNestedManyWithoutSubredditsInput } from "./PostCreateNestedManyWithoutSubredditsInput";

export type SubredditCreateInput = {
  description?: string | null;
  name?: string | null;
  posts?: PostCreateNestedManyWithoutSubredditsInput;
};
