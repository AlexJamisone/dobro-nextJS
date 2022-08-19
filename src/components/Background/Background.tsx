import { NextPage } from 'next'
import { motion } from 'framer-motion'

import styles from './Backgound.module.scss'

const Background: NextPage = () => {
	return (
		<div className={styles.container}>
			<motion.div
				initial={{ scale: 1.2, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 1.5 }}
				className={styles.leftBG}
			/>
			<motion.div
				initial={{ scale: 1.1, opacity: 0, rotateY: 10 }}
				animate={{ scale: 1, opacity: 1, rotateY: 0 }}
				transition={{ duration: 2, delay: 0.5 }}
				className={styles.rightBG}
			/>
		</div>
	)
}

export default Background
