import { Avatar, Button, Center, Input } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

interface UserAvatarProps {
	id: number
}

const UserAvatar = ({ id }: UserAvatarProps) => {
	const [imgUpload, setImgUpload] = useState<File>()
	const handlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return
		setImgUpload(e.target.files[0])
	}
	const submitData = async (e: React.SyntheticEvent) => {
		e.preventDefault()
		if (!imgUpload) {
			return
		}
		try {
			const formData = new FormData()
			formData.append("image", imgUpload)
			formData.append("id", JSON.stringify(id))
			await fetch('api/upload', {
				method: 'POST',
				body: formData
				
			})
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<Center mt={5}>
			<form onSubmit={submitData}>
				<Input
					accept=".jpg, .png, .gif, .jpeg"
					type="file"
					onChange={handlChange}
					id="upload"
					display="none"
				/>
				<Input type="submit" value="Upload" />
				<Avatar
					as="label"
					htmlFor="upload"
					size="lg"
					cursor="pointer"
					src=""
				/>
			</form>
		</Center>
	)
}

export default UserAvatar
