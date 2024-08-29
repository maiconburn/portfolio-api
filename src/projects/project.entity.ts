import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Project {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  mainImage: string;

  @Column('simple-array')
  @Field(() => [String])
  images: string[];

  @Column({ nullable: true })
  @Field({ nullable: true })
  link?: string;
}
