import {
	Avatar as AvatarIcon,
	Center,
	Input,
	Spinner,
	useToast,
} from '@chakra-ui/react'
import { Avatar } from '@prisma/client'
import React, { useState, useEffect } from 'react'
import { QueryObserverResult } from 'react-query'
import { BsCardImage } from 'react-icons/bs'
import { VscError } from 'react-icons/vsc'

interface UserAvatarProps {
	id: number
	avatar: Avatar | undefined
	refetch: () => Promise<QueryObserverResult>
}

const UserAvatar = ({ id, avatar, refetch }: UserAvatarProps) => {
	const [imgUpload, setImgUpload] = useState<File>()
	const [loading, setLoading] = useState<boolean>(false)
	const toast = useToast()

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
			const response = await fetch('api/upload', {
				method: 'POST',
				body: formData,
			})
			setImgUpload(undefined)
			await refetch()
			setLoading(false)
			const { http_code, message } = await response.json()
			if (http_code) {
				toast({
					title: 'Кажется картинка слишком много для нас весить, максимум 10,4Мб',
					status: 'error',
					isClosable: true,
					duration: 4000,
					icon: <BsCardImage />,
				})
			} else if (message) {
				toast({
					title: `${message}`,
					status: 'info',
					isClosable: true
				})
			}
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<Center mt={5} width="100%">
			<Input
				accept=".jpg, .png, .gif, .jpeg"
				type="file"
				onChange={handlChange}
				id="upload"
				display="none"
			/>
			{loading ? (
				<Spinner size={['md', 'xl']} />
			) : (
				<AvatarIcon
					as="label"
					htmlFor="upload"
					size={['md', 'lg']}
					cursor="pointer"
					src={`https://res.cloudinary.com/dzbwliwhr/v${avatar?.version}/${avatar?.publicId}.${avatar?.format}`}
				/>
			)}
		</Center>
	)
}

export default UserAvatar
