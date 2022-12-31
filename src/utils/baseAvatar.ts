import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../firebase/clientApp"

export const searchAvatar = async (id: number) => {
    const docRef = doc(db, 'avatar', id.toString())
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        const baseAvatar = docSnap.data()
        return baseAvatar
    } else {
        const createBaseAvatar = await setDoc(
            doc(db, 'avatar', id.toString()),
            {
                publicId: '',
                format: '',
                version: '',
            }
        )
        return createBaseAvatar
    }
}

export default searchAvatar