import axios from 'axios'
import { useState, useEffect } from 'react'
import Error from '../Error/Error'
import SearchBar from '../SearchBar/SearchBar'
import Spinner from '../Spinner/Spinner'
import CardList from './CadrList/CardList'

import styles from './Content.module.scss'

const Content = () => {
	const [data, setData] = useState([])
	const [filterData, setFilterData] = useState(data)
	const [search, setSearch] = useState('')
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		async function getData() {
			try {
				setLoading(true)
				const api_url =
					'https://wrapapi.com/use/alexjamison/homeit/cart/latest?wrapAPIKey=HCTPpA928xiR2xIr0ON2HkyaS8gKg4Lz'
				const res = await axios.get(api_url)
				const response = await res.data.data.coffee
				if (response === null) {
					return setData([])
				}
				setLoading(false)
				setError(false)
				return setData(response)
			} catch (error) {
				console.log('Hello its Data', error)
				setLoading(false)
				return setError(true)
			}
		}
		getData()
	}, [])

	useEffect(() => {
		const newFilterData = data.filter((item) => {
			return item.name.toLocaleLowerCase().includes(search)
		})
		setFilterData(newFilterData)
	}, [data, search])

	const onSearchChange = (e) => {
		const value = e.target.value.toLocaleLowerCase()
		setSearch(value)
	}

	return (
		<>
			<SearchBar onChengeHendler={onSearchChange} />
			<div className={styles.center}>
				<div className={styles.blure}>
					<div className={styles.container}>
						{loading ? <Spinner /> : <CardList data={filterData} />}
						{error ? <Error /> : <CardList data={filterData} />}
					</div>
				</div>
			</div>
		</>
	)
}

export default Content
