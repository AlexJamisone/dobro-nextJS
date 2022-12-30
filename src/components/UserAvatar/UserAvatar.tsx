import { Avatar, Button, Center } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const UserAvatar = (props: Props) => {
	return (
		<Center mt={5}>
			<form>
                <input type="file" hidden accept='image/*' />
				<Avatar size="lg" />
			</form>
		</Center>
	)
}

export default UserAvatar
