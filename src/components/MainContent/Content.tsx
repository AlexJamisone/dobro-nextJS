import { Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import CardList from './CadrList/CardList'
import { useQuery } from 'react-query'

export interface dbCofeeDataApi {
	id: string
	img: string
	name: string
	price: string
	description: string
}

const Content = () => {
	const { data, isLoading } = useQuery(
		'coffee',
		async (): Promise<dbCofeeDataApi[] | undefined> => {
			try {
				const api_url =
					'https://update-dobrocoffee.vercel.app/api/create/coffee'
				const response = await fetch(api_url, {
					method: 'GET',
				})
				const arr = await response.json()
				return arr.dbCoffee
			} catch (error) {
				console.log(error)
			}
		}
	)
	const [filterData, setFilterData] = useState(data)
	const [search, setSearch] = useState('')
	const [failure, setFailure] = useState(false)

	// make this better
	useEffect(() => {
		const newFilterData = data?.filter(({ name }: dbCofeeDataApi) => {
			return name.toLowerCase().includes(search)
		})
		if (newFilterData?.length === 0) {
			setFailure(true)
			setFilterData(newFilterData)
		} else {
			setFailure(false)
			setFilterData(newFilterData)
		}
	}, [data, search])

	const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.toLowerCase()
		setSearch(value)
	}
	return (
		<>
			<SearchBar onChangeHandler={onSearchChange} failure={failure} />
			<>
				{isLoading ? (
					<Spinner size={['md', 'lg', 'xl']} />
				) : (
					<CardList data={filterData} />
				)}
			</>
		</>
	)
}

export default Content
