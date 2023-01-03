import { prisma } from '../db/client'

export const createBaseAvatar = async (id: number) => {
	try {
		const checkAvatar = await prisma.avatar.findUnique({
			where: {
				id,
			},
		})
		if (checkAvatar) {
			return checkAvatar
		} else {
			const createBaseAvatar = await prisma.avatar.create({
				data: {
					id,
					format: '',
					publicId: '',
					version: '',
				},
			})
			return createBaseAvatar
		}
	} catch (error) {
		console.log(error)
	}
}

export default createBaseAvatar
