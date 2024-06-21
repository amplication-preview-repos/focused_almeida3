/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SubredditWhereUniqueInput } from "./SubredditWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SubredditUpdateInput } from "./SubredditUpdateInput";

@ArgsType()
class UpdateSubredditArgs {
  @ApiProperty({
    required: true,
    type: () => SubredditWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SubredditWhereUniqueInput)
  @Field(() => SubredditWhereUniqueInput, { nullable: false })
  where!: SubredditWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SubredditUpdateInput,
  })
  @ValidateNested()
  @Type(() => SubredditUpdateInput)
  @Field(() => SubredditUpdateInput, { nullable: false })
  data!: SubredditUpdateInput;
}

export { UpdateSubredditArgs as UpdateSubredditArgs };
