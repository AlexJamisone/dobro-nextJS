const cloudinary = require("cloudinary").v2;

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export function uploadImage(imageUloaded: any) {
	return new Promise((resolve, rejects) => {
		cloudinary.uploader.upload(
			imageUloaded,
			{
				width: 64,
				height: 64,
				crop: 'fill',
			},
			(err: any, res: any) => {
				if (err) rejects(err);
				resolve(res);
			}
		);
	});
}
