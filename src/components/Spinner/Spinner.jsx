import { motion } from 'framer-motion'
import SpinnerRow from './SpinnerRaw/SpinnerRow'

import styles from './Spinner.module.scss'

const Spinner = () => {
	return (
		<>
			<motion.div
				className={styles.spinner}
				initial={{ y: -200, opacity: 0 }}
				animate={{ rotate: 360, y: [-200, 50, -200, 50], opacity: 1 }}
				transition={{ type: 'spring', repeat: 'Infinity', duration: 4 }}
			>
				<SpinnerRow/>
			</motion.div>
		</>
	)
}

export default Spinner
