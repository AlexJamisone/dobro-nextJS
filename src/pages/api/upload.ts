// import { getImage } from "../../utils/formidable";
// import { uploadImage } from "../../utils/clodiinary";
import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../db/client'
import { uploadImage } from '../../utils/uploadAvatar/clodinary'
import { getImage } from '../../utils/uploadAvatar/formidable'
import cloudinary from 'cloudinary'

export const config = {
	api: {
		bodyParser: false,
	},
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { id, image } = await getImage(req)
		const numID = parseInt(id)
		const imageData: any =
			await uploadImage(image.filepath, numID)
		console.log(imageData)
		const result = await prisma.avatar.update({
			where: {
				id: numID,
			},
			data: {
				format: imageData.format,
				publicId: imageData.public_id,
				version: imageData.version.toString(),
			},
		})
		res.status(200).json({ message: 'succecc', result })
	} catch (error) {
		console.log('in upload', error)
	}
}
