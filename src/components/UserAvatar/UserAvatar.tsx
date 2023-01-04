import { Avatar as AvatarIcon, Center, Input, Spinner } from '@chakra-ui/react'
import { Avatar } from '@prisma/client'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { QueryObserverResult } from 'react-query'

interface UserAvatarProps {
	id: number
	avatar: Avatar | undefined
}

const UserAvatar = ({ id, avatar }: UserAvatarProps) => {
	const [imgUpload, setImgUpload] = useState<File>()
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
			const formData = new FormData()
			formData.append('image', imgUpload)
			formData.append('id', JSON.stringify(id))
			await fetch('api/upload', {
				method: 'POST',
				body: formData,
			})
			setImgUpload(undefined)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<Center mt={5}>
			<Input
				accept=".jpg, .png, .gif, .jpeg"
				type="file"
				onChange={handlChange}
				id="upload"
				display="none"
			/>
			<AvatarIcon
				as="label"
				htmlFor="upload"
				size="lg"
				cursor="pointer"
				src={`https://res.cloudinary.com/dzbwliwhr/v${avatar?.version}/${avatar?.publicId}.${avatar?.format}`}
			/>
		</Center>
	)
}

export default UserAvatar
