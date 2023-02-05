// const cloudinary = require("cloudinary").v2;
import cloudinary from 'cloudinary'

import { prisma } from '../../db/client'

cloudinary.v2.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
})

export function uploadImage(
	imageUloaded: any,
	id: number
): Promise<cloudinary.UploadApiResponse> {
	return new Promise(async (resolve, rejects) => {
		const findimg = await prisma.avatar.findUnique({
			where: {
				id,
			},
			select: {
				publicId: true,
			},
		})
		cloudinary.v2.uploader.destroy(findimg?.publicId as string)
		cloudinary.v2.uploader.upload(
			imageUloaded,
			{
				width: 150,
				height: 150,
				crop: 'fill',
				quality_analysis: true,
			},

			(err: any, res: any) => {
				if (err) rejects(err)
				resolve(res)
			}
		)
	})
}
