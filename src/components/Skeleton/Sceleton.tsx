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
				gap={8}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, type: 'spring' }}
				transition="all .5 linear"
			>
				<SkeletonCircle size={['48px', '68px']} />
				<SkeletonText
					width={['80%', '25%']}
					textAlign="center"
					mt={['0', '4']}
					noOfLines={4}
					spacing={['4', '5']}
					skeletonHeight="3"
				/>
				<Skeleton height={['50px', '']} width={['90%', '50%']} />
				<Skeleton height={['100vh', '']} width={['90%', '50%']} />
			</Center>
		</>
	)
}

export default SkeletonComponent
