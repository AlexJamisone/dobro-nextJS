import Image from 'next/future/image'
import { motion } from 'framer-motion'

const LinkToApp = () => {
	return (
		<div>
			<motion.div
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 1, type: 'spring' }}
			>
				<h1> Привет, у нас появилось приложение с доставкой!</h1>
				<motion.a
					whileHover={{ scale: 1.1 }}
					transition={{ type: 'spring' }}
					href="https://play.google.com/store/apps/details?id=ru.quickresto.loyalty.dobrocoffeecr"
					target="_blank"
					rel="noreferrer"
				>
					<Image
						src="/static/market/googleplay.png"
						width={170}
						height={50}
						alt="Play Market"
					/>
				</motion.a>
				<motion.a
					whileHover={{ scale: 1.1 }}
					transition={{ type: 'spring' }}
					href="https://apps.apple.com/ru/app/dobro-%D0%BA%D0%BE%D1%84%D0%B5/id1594161361"
					target="_blank"
					rel="noreferrer"
				>
					<Image
						src="/static/market/appstore.png"
						width={170}
						height={50}
						alt="App Store"
					/>
				</motion.a>
			</motion.div>
		</div>
	)
}

export default LinkToApp
