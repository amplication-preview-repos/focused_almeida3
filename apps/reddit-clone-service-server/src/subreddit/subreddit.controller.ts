import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubredditService } from "./subreddit.service";
import { SubredditControllerBase } from "./base/subreddit.controller.base";

@swagger.ApiTags("subreddits")
@common.Controller("subreddits")
export class SubredditController extends SubredditControllerBase {
  constructor(protected readonly service: SubredditService) {
    super(service);
  }
}
