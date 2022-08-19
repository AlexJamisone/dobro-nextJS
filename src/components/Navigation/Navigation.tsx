import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import styles from './Navigation.module.scss'

const Navigation: NextPage = () => {
	return (
		<div className={styles.container}>
			<Link href="/">
				<motion.div
					initial={{ opacity: 0, y: '220%', x: '200%' }}
					animate={{ opacity: 1, y: '0', x: '0' }}
					transition={{ delay: 0.8 }}
					className={styles.tasty}
				>
					<Image
						src="/static/header/tasty.svg"
						width={50}
						height={50}
						alt="logo"
					/>
				</motion.div>
			</Link>
			<Link href="/">
				<motion.div
					initial={{ opacity: 0, y: '100%' }}
					animate={{ opacity: 1, y: '0' }}
					transition={{ delay: 0.5 }}
					className={styles.logo}
				>
					<Image
						src="/static/header/logo.svg"
						width={283}
						height={120}
						alt="logo"
					/>
				</motion.div>
			</Link>
			<Link href="yandex">
				<motion.div
					initial={{ opacity: 0, y: '220%', x: '-200%' }}
					animate={{ opacity: 1, y: '0', x: '0' }}
					transition={{ delay: 0.7 }}
					className={styles.yandex}
				>
					<Image
						src="/static/header/yandex.svg"
						width={50}
						height={50}
						alt="logo"
					/>
				</motion.div>
			</Link>
		</div>
	)
}

export default Navigation
