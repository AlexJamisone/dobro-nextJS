import { useRef } from 'react'
import { NextPage } from 'next'
import Image from 'next/future/image'
import Link from 'next/link'
import { motion, useCycle } from 'framer-motion'

import Logo from './Logo/Logo'
import styles from './Navigation.module.scss'
import BurgerNav from './BurgerMenu/Burger'
import { MenuToggle } from './BurgerMenu/MenuToggle/MenuToggle'

const Navigation: NextPage = () => {
	const [isOpen, toggleOpen] = useCycle(false, true)
	const containerRef = useRef(null)

	return (
		<motion.nav
			className={styles.nav}
			ref={containerRef}
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
		>
			<Link href="/">
				<motion.div
					initial={{ opacity: 0, y: '220%', x: '200%' }}
					animate={{ opacity: 1, y: '0', x: '0' }}
					transition={{ delay: 0.8 }}
				>
					<div className={styles.tasty}>
						<Image
							src="/static/header/tasty.svg"
							width={50}
							height={50}
							alt="logo"
						/>
					</div>
				</motion.div>
			</Link>
			<Link href="/">
				<motion.div
					initial={{ opacity: 0, y: '100%' }}
					animate={{ opacity: 1, y: '0' }}
					transition={{ delay: 0.5 }}
					className={styles.logo}
				>
					<Logo />
				</motion.div>
			</Link>
			<Link href="yandex">
				<motion.div
					initial={{ opacity: 0, y: '220%', x: '-200%' }}
					animate={{ opacity: 1, y: '0', x: '0' }}
					transition={{ delay: 0.7 }}
				>
					<div className={styles.yandex}>
						<Image
							src="/static/header/yandex.svg"
							width={50}
							height={50}
							alt="logo"
						/>
					</div>
				</motion.div>
			</Link>
			<BurgerNav />
			<MenuToggle toggle={() => toggleOpen()} />
		</motion.nav>
	)
}

export default Navigation
