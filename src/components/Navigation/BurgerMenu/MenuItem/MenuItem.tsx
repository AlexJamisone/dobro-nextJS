import { FC } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import styles from './MenuItem.module.scss'

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
}

type MenuItemsProps = {
	name: string
	path: string
}

export const MenuItem: FC<MenuItemsProps> = ({ name, path }) => {
	return (
		<motion.li
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			<Link href={path} className={styles.text}>
				{name}
			</Link>
		</motion.li>
	)
}
