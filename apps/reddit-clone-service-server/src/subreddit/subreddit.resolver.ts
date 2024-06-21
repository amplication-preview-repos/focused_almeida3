import * as graphql from "@nestjs/graphql";
import { SubredditResolverBase } from "./base/subreddit.resolver.base";
import { Subreddit } from "./base/Subreddit";
import { SubredditService } from "./subreddit.service";

@graphql.Resolver(() => Subreddit)
export class SubredditResolver extends SubredditResolverBase {
  constructor(protected readonly service: SubredditService) {
    super(service);
  }
}
