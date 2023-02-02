import { Avatar as AvatarIcon, Center, Input, Spinner } from '@chakra-ui/react'
import { Avatar } from '@prisma/client'
import React, { useState, useEffect } from 'react'
import { QueryObserverResult } from 'react-query'

interface UserAvatarProps {
	id: number
	avatar: Avatar | undefined
	// refetch: () => Promise<QueryObserverResult>
}

const UserAvatar = ({ id, avatar }: UserAvatarProps) => {
	const [imgUpload, setImgUpload] = useState<File>()
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		if (imgUpload !== undefined) {
			submitData()
		}
	}, [imgUpload])

	const handlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return
		setImgUpload(e.target.files[0])
	}
	const submitData = async () => {
		if (!imgUpload) {
			return
		}
		try {
			setLoading(true)
			const formData = new FormData()
			formData.append('image', imgUpload)
			formData.append('id', JSON.stringify(id))
			await fetch('api/upload', {
				method: 'POST',
				body: formData,
			})
			setImgUpload(undefined)
			// await refetch()
			setLoading(false)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<Center mt={5} width='100%'>
			<Input
				accept=".jpg, .png, .gif, .jpeg"
				type="file"
				onChange={handlChange}
				id="upload"
				display="none"
			/>
			{loading ? (
				<Spinner size={['md','xl']} />
			) : (
				<AvatarIcon
					as="label"
					htmlFor="upload"
					size={['md',"lg"]}
					cursor="pointer"
					src={`https://res.cloudinary.com/dzbwliwhr/v${avatar?.version}/${avatar?.publicId}.${avatar?.format}`}
				/>
			)}
		</Center>
	)
}

export default UserAvatar
