import { Spinner, AbsoluteCenter } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import CardList from './CadrList/CardList'
import { useQuery } from 'react-query'
import { dbCofeeDataApi } from '../../types/types'

const Content = () => {
	const { data, isLoading } = useQuery(
		'coffee',
		async (): Promise<dbCofeeDataApi[] | undefined> => {
			try {
				const response = await fetch('/api/coffeeData')
				const data = await response.json()
				return data
			} catch (error) {
				console.log(error)
			}
		}
	)
	const [filterData, setFilterData] = useState<dbCofeeDataApi[] | undefined>(
		data
	)
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
					<AbsoluteCenter>
						<Spinner size={['md', 'lg', 'xl']} />
					</AbsoluteCenter>
				) : (
					<CardList data={filterData} />
				)}
			</>
		</>
	)
}

export default Content
