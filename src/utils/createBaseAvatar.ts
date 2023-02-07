import { prisma } from '../db/client'

export const createBaseAvatar = async (id: number) => {
	try {
		const findAvatar = await prisma.avatar.findUnique({
			where: {
				id,
			},
			select: {
				id: true,
				format: true,
				publicId: true,
				version: true
			}
		})
		if (findAvatar) {
			return findAvatar
		} else {
			const avatar = await prisma.avatar.create({
				data: {
					id,
					format: '',
					publicId: '',
					version: '',
				},
			})
			return avatar
		}
	} catch (error) {
		console.log(error)
	}
}

export default createBaseAvatar
