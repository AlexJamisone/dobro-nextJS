import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem/MenuItem'

import styles from './Burger.module.scss'

const BurgerNav = () => {
	const itemIds = [
		{
			name: 'Кофе',
			path: '/',
		},
		{
			name: 'Яндекс',
			path: '/yandex',
		},
		{
			name: 'Чаевые',
			path: '/tips',
		},
	]
	const variants = {
		open: {
			transition: { staggerChildren: 0.07, delayChildren: 0.2 },
		},
		closed: {
			transition: { staggerChildren: 0.05, staggerDirection: -1 },
		},
	}

	return (
		<motion.ul variants={variants} className={styles.list}>
			{itemIds.map((i) => (
				<MenuItem name={i.name} key={i.name} path={i.path} />
			))}
		</motion.ul>
	)
}

export default BurgerNav
