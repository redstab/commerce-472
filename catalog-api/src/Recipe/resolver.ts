import { Arg, Query } from 'type-graphql';
import { prisma } from '../prisma';
import { Post } from './type';

export class PostResolver {
	@Query(() => Post)
	async post(@Arg('id') id: number) {
		return prisma.post.findUnique({
			where: {
				id,
			},
		});
	}
}
