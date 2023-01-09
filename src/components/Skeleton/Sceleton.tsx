import {
	Center,
	Skeleton,
	SkeletonCircle,
	SkeletonText,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const SkeletonComponent = () => {
	return (
		<>
			<Center
				as={motion.div}
				mt={5}
				flexDirection="column"
				gap={10}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, type: 'spring' }}
				transition="all .5 linear"
			>
				<SkeletonCircle size="64px" />
				<SkeletonText
					width="25%"
					textAlign="center"
					mt="4"
					noOfLines={4}
					spacing="5"
					skeletonHeight="3"
				/>
				<Skeleton height="20%" width="50%" h="300" />
			</Center>
		</>
	)
}

export default SkeletonComponent
