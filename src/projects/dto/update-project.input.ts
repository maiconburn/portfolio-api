import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateProjectInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  mainImage?: string;

  @Field(() => [String], { nullable: true })
  images?: string[];

  @Field({ nullable: true })
  link?: string;
}
