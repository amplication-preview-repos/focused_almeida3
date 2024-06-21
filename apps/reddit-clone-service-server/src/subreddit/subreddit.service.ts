import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubredditServiceBase } from "./base/subreddit.service.base";

@Injectable()
export class SubredditService extends SubredditServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
