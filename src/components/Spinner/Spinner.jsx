import { motion } from 'framer-motion'
import SpinnerRow from './SpinnerRaw/SpinnerRow'

import styles from './Spinner.module.scss'

const Spinner = () => {
	return (
		<>
			<motion.div
				className={styles.spinner}
				initial={{ opacity: 0 }}
				animate={{ rotate: 360, opacity: 1 }}
				transition={{ type: 'spring', repeat: 'Infinity', duration: 2 }}
			>
				<SpinnerRow/>
			</motion.div>
		</>
	)
}

export default Spinner
