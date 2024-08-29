import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  mainImage: string;

  @Field(() => [String])
  images: string[];

  @Field({ nullable: true })
  link?: string;
}
