import { Module } from "@nestjs/common";
import { SubredditModuleBase } from "./base/subreddit.module.base";
import { SubredditService } from "./subreddit.service";
import { SubredditController } from "./subreddit.controller";
import { SubredditResolver } from "./subreddit.resolver";

@Module({
  imports: [SubredditModuleBase],
  controllers: [SubredditController],
  providers: [SubredditService, SubredditResolver],
  exports: [SubredditService],
})
export class SubredditModule {}
