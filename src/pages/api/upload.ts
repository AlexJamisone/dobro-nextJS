// import { getImage } from "../../utils/formidable";
// import { uploadImage } from "../../utils/clodiinary";
import { NextApiRequest, NextApiResponse } from 'next'
import { getImage } from '../../utils/uploadAvatar/formidable'
import { uploadImage } from '../../utils/uploadAvatar/clodinary'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase/clientApp'

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

		const {id, image} = await getImage(req)
		console.log(image, id)
		const imageData: any = await uploadImage(image.filepath)
		console.log(typeof imageData.version.toString())
		const result = await setDoc(doc(db, 'avatar', id.id), {
			publicId: imageData.public_id,
			format: imageData.format,
			version: imageData.version.toString(),
		})
		res.json({status: 'succsec', result})
	} catch (error) {
		console.log('in upload')
		res.json({message: 'fail', error})
	}
}
