import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Post {
	@Field(() => ID)
	id!: number;

	@Field()
	title!: string;
}
