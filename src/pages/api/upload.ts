// import { getImage } from "../../utils/formidable";
// import { uploadImage } from "../../utils/clodiinary";
import { NextApiRequest, NextApiResponse } from "next";
import { getImage } from "../../utils/uploadAvatar/formidable";
import { uploadImage } from "../../utils/uploadAvatar/clodinary";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/clientApp";


export const config = {
    api: {
        bodyParser: false
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const appId = await fetch('api/ser')
        const imageUploaded = await getImage(req)
        const imageData: any = await uploadImage(imageUploaded.filepath)
        const result = await addDoc(collection(db, 'avatar'), {
            publicId: imageData.public_id,
            format: imageData.format,
            version: imageData.version.toString(),
        })
        console.log('success with id : ', result.id);
        res.json(result)
    } catch (error) {
        console.log("in upload",error);
    }
}