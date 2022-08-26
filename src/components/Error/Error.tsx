import styles from './Error.module.scss'

const Error = () => {
	return (
		<div className={styles.container}>
			<p className={styles.error}>Прости, что то пошло не так, обратись к бариста</p>
		</div>
	)
}

export default Error
