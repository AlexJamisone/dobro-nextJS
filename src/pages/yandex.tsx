import { motion } from 'framer-motion'
import styles from '../styles/yandex.module.scss'

const Yandex = () => {
	return (
		<>
			<motion.div
				initial={{ y: 200, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 2 }}
				style={{ zIndex: 1010 }}
			>
				<div className={styles.container}>
					<div className={styles.yandex}>
						<iframe
							title="Yandex"
							className={styles.iframe1}
							src="https://yandex.ru/maps-reviews-widget/113115524349?comments"
						></iframe>
						<a
							href="https://yandex.ru/maps/org/dobro_kofe/113115524349/"
							target="_blank"
							rel="noreferrer"
							className={styles.iframe2}
						>
							ДоБро кофе на карте Севастополя — Яндекс Карты
						</a>
					</div>
				</div>
			</motion.div>
		</>
	)
}

export default Yandex
