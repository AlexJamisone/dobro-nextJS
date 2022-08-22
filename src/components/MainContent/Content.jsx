import axios from 'axios'
import { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Spinner from '../Spinner/Spinner'
import CardList from './CadrList/CardList'

import styles from './Content.module.scss'

const Content = () => {
	const [data, setData] = useState([])
	const [filterData, setFilterData] = useState(data)
	const [search, setSearch] = useState('')
	const [loading, setloading] = useState(false)

	useEffect(() => {
		setloading(true)
		async function getData() {
			const api_url =
				'https://wrapapi.com/use/alexjamison/homeit/all/latest?wrapAPIKey=HCTPpA928xiR2xIr0ON2HkyaS8gKg4Lz'
			const res = await axios.get(api_url)
			const response = await res.data.data.coffee
			return setData(response)
		}
		getData()
		setloading(false)
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
					</div>
				</div>
			</div>
		</>
	)
}

export default Content
