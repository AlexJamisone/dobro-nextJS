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
					'https://wrapapi.com/use/alexjamison/tastyco/basket/latest?stateToken=eyJqYXIiOnsidmVyc2lvbiI6InRvdWdoLWNvb2tpZUAyLjMuMSIsInN0b3JlVHlwZSI6Ik1lbW9yeUNvb2tpZVN0b3JlIiwicmVqZWN0UHVibGljU3VmZml4ZXMiOnRydWUsImNvb2tpZXMiOlt7InZhbHVlIjoiMTY1NjI1MTYxNCIsInBhdGgiOiIvIiwiZG9tYWluIjoidGFzdHljb2ZmZWUucnUiLCJleHBpcmVzIjoiMjAyNy0xMC0xMFQxOToyMjo1MS4zMzlaIiwiaHR0cE9ubHkiOmZhbHNlLCJzZWN1cmUiOnRydWUsInNhbWVTaXRlIjoiTm9uZSIsImtleSI6Il95bV9kIiwibWF4QWdlIjoxNTc3NjY0MDAsImhvc3RPbmx5IjpmYWxzZSwiY3JlYXRpb24iOiIyMDIyLTEwLTEwVDE5OjIyOjUxLjMzOVoiLCJsYXN0QWNjZXNzZWQiOiIyMDIyLTEwLTEwVDE5OjIyOjUxLjMzOVoifSx7InZhbHVlIjoiMTY1NjI1MTYxNDM3OTA0NzI5NSIsInBhdGgiOiIvIiwiZG9tYWluIjoidGFzdHljb2ZmZWUucnUiLCJleHBpcmVzIjoiMjAyNy0xMC0xMFQxOToyMjo1MS4zNDFaIiwiaHR0cE9ubHkiOmZhbHNlLCJzZWN1cmUiOnRydWUsInNhbWVTaXRlIjoiTm9uZSIsImtleSI6Il95bV91aWQiLCJtYXhBZ2UiOjE1Nzc2NjQwMCwiaG9zdE9ubHkiOmZhbHNlLCJjcmVhdGlvbiI6IjIwMjItMTAtMTBUMTk6MjI6NTEuMzQxWiIsImxhc3RBY2Nlc3NlZCI6IjIwMjItMTAtMTBUMTk6MjI6NTEuMzQxWiJ9LHsidmFsdWUiOiJHQTEuMi4xOTM2NjIyNjE4LjE2NTYyNTE2MTQiLCJwYXRoIjoiLyIsImRvbWFpbiI6InRhc3R5Y29mZmVlLnJ1IiwiZXhwaXJlcyI6IjIwMjctMTAtMTBUMTk6MjI6NTEuMzQxWiIsImh0dHBPbmx5IjpmYWxzZSwic2VjdXJlIjpmYWxzZSwia2V5IjoiX2dhIiwibWF4QWdlIjoxNTc3NjY0MDAsImhvc3RPbmx5IjpmYWxzZSwiY3JlYXRpb24iOiIyMDIyLTEwLTEwVDE5OjIyOjUxLjM0MVoiLCJsYXN0QWNjZXNzZWQiOiIyMDIyLTEwLTEwVDE5OjIyOjUxLjM0MVoifSx7InZhbHVlIjoiZTU4MDFkYTctMWUzOC00NGY1LTk5MzAtZDA4YjBiZjhhZmM0LTYiLCJwYXRoIjoiLyIsImRvbWFpbiI6InRhc3R5Y29mZmVlLnJ1IiwiZXhwaXJlcyI6IjIwMjctMTAtMTBUMTk6MjI6NTEuMzQxWiIsImh0dHBPbmx5IjpmYWxzZSwic2VjdXJlIjpmYWxzZSwia2V5IjoiZmxvY2t0b3J5LXV1aWQiLCJtYXhBZ2UiOjE1Nzc2NjQwMCwiaG9zdE9ubHkiOmZhbHNlLCJjcmVhdGlvbiI6IjIwMjItMTAtMTBUMTk6MjI6NTEuMzQxWiIsImxhc3RBY2Nlc3NlZCI6IjIwMjItMTAtMTBUMTk6MjI6NTEuMzQxWiJ9LHsidmFsdWUiOiIxIiwicGF0aCI6Ii8iLCJkb21haW4iOiJ0YXN0eWNvZmZlZS5ydSIsImV4cGlyZXMiOiIyMDI3LTEwLTEwVDE5OjIyOjUxLjM0MVoiLCJodHRwT25seSI6ZmFsc2UsInNlY3VyZSI6ZmFsc2UsImtleSI6Il90dF9lbmFibGVfY29va2llIiwibWF4QWdlIjoxNTc3NjY0MDAsImhvc3RPbmx5IjpmYWxzZSwiY3JlYXRpb24iOiIyMDIyLTEwLTEwVDE5OjIyOjUxLjM0MVoiLCJsYXN0QWNjZXNzZWQiOiIyMDIyLTEwLTEwVDE5OjIyOjUxLjM0MVoifSx7InZhbHVlIjoiMzJkYmQ1MWItMWNmZi00YWIxLThhZjYtNjU3YWJlMzhhYzFiIiwicGF0aCI6Ii8iLCJkb21haW4iOiJ0YXN0eWNvZmZlZS5ydSIsImV4cGlyZXMiOiIyMDI3LTEwLTEwVDE5OjIyOjUxLjM0MVoiLCJodHRwT25seSI6ZmFsc2UsInNlY3VyZSI6ZmFsc2UsImtleSI6Il90dHAiLCJtYXhBZ2UiOjE1Nzc2NjQwMCwiaG9zdE9ubHkiOmZhbHNlLCJjcmVhdGlvbiI6IjIwMjItMTAtMTBUMTk6MjI6NTEuMzQxWiIsImxhc3RBY2Nlc3NlZCI6IjIwMjItMTAtMTBUMTk6MjI6NTEuMzQxWiJ9LHsidmFsdWUiOiJCNWNWZWIxUVpYcElOQ2kzMjYwRmFNZmV4cjl5b2lLayIsInBhdGgiOiIvIiwiZG9tYWluIjoidGFzdHljb2ZmZWUucnUiLCJleHBpcmVzIjoiMjAyNy0xMC0xMFQxOToyMjo1MS4zNDFaIiwiaHR0cE9ubHkiOmZhbHNlLCJzZWN1cmUiOmZhbHNlLCJzYW1lU2l0ZSI6IkxheCIsImtleSI6InN1cHBvcnRPbmxpbmVUYWxrSUQiLCJtYXhBZ2UiOjE1Nzc2NjQwMCwiaG9zdE9ubHkiOmZhbHNlLCJjcmVhdGlvbiI6IjIwMjItMTAtMTBUMTk6MjI6NTEuMzQxWiIsImxhc3RBY2Nlc3NlZCI6IjIwMjItMTAtMTBUMTk6MjI6NTEuMzQxWiJ9LHsidmFsdWUiOiIxLjEuMTM1ODczMzU0NC4xNjY0MDQ3MTI4IiwicGF0aCI6Ii8iLCJkb21haW4iOiJ0YXN0eWNvZmZlZS5ydSIsImV4cGlyZXMiOiIyMDI3LTEwLTEwVDE5OjIyOjUxLjM0MVoiLCJodHRwT25seSI6ZmFsc2UsInNlY3VyZSI6ZmFsc2UsImtleSI6Il9nY2xfYXUiLCJtYXhBZ2UiOjE1Nzc2NjQwMCwiaG9zdE9ubHkiOmZhbHNlLCJjcmVhdGlvbiI6IjIwMjItMTAtMTBUMTk6MjI6NTEuMzQxWiIsImxhc3RBY2Nlc3NlZCI6IjIwMjItMTAtMTBUMTk6MjI6NTEuMzQxWiJ9LHsidmFsdWUiOiIxIiwicGF0aCI6Ii8iLCJkb21haW4iOiJ0YXN0eWNvZmZlZS5ydSIsImV4cGlyZXMiOiIyMDI3LTEwLTEwVDE5OjIyOjUxLjM0MloiLCJodHRwT25seSI6ZmFsc2UsInNlY3VyZSI6dHJ1ZSwic2FtZVNpdGUiOiJOb25lIiwia2V5IjoiX3ltX2lzYWQiLCJtYXhBZ2UiOjE1Nzc2NjQwMCwiaG9zdE9ubHkiOmZhbHNlLCJjcmVhdGlvbiI6IjIwMjItMTAtMTBUMTk6MjI6NTEuMzQyWiIsImxhc3RBY2Nlc3NlZCI6IjIwMjItMTAtMTBUMTk6MjI6NTEuMzQyWiJ9LHsidmFsdWUiOiJHQTEuMi44OTQ3MTEyNjYuMTY2NTQyOTQ5MSIsInBhdGgiOiIvIiwiZG9tYWluIjoidGFzdHljb2ZmZWUucnUiLCJleHBpcmVzIjoiMjAyNy0xMC0xMFQxOToyMjo1MS4zNDJaIiwiaHR0cE9ubHkiOmZhbHNlLCJzZWN1cmUiOmZhbHNlLCJrZXkiOiJfZ2lkIiwibWF4QWdlIjoxNTc3NjY0MDAsImhvc3RPbmx5IjpmYWxzZSwiY3JlYXRpb24iOiIyMDIyLTEwLTEwVDE5OjIyOjUxLjM0MloiLCJsYXN0QWNjZXNzZWQiOiIyMDIyLTEwLTEwVDE5OjIyOjUxLjM0MloifSx7InZhbHVlIjoidyIsInBhdGgiOiIvIiwiZG9tYWluIjoidGFzdHljb2ZmZWUucnUiLCJleHBpcmVzIjoiMjAyNy0xMC0xMFQxOToyMjo1MS4zNDJaIiwiaHR0cE9ubHkiOmZhbHNlLCJzZWN1cmUiOnRydWUsInNhbWVTaXRlIjoiTm9uZSIsImtleSI6Il95bV92aXNvcmMiLCJtYXhBZ2UiOjE1Nzc2NjQwMCwiaG9zdE9ubHkiOmZhbHNlLCJjcmVhdGlvbiI6IjIwMjItMTAtMTBUMTk6MjI6NTEuMzQyWiIsImxhc3RBY2Nlc3NlZCI6IjIwMjItMTAtMTBUMTk6MjI6NTEuMzQyWiJ9LHsidmFsdWUiOiJleUpwZGlJNklrODRkVEEyY2tGVGRsTm5LMlpuV1RsWVluVlVkbEU5UFNJc0luWmhiSFZsSWpvaVlqaFBTVEJsYmsxek5YZEhNVTFuU3paNmNEUklWak5EUlVaNlFsTjJhRlJXV2poRlVrRjVORkJwUm5Cd2EwRnRVbWx0TkhWdFJHWmlVelpxTURCSGVIQmFURXR6YVRWblVEWmtRMGxwVkdNd1YzSjNVekJvUkdsWFVXbFdRWGsyWmpKUVowazBiRFV6WjNsaFdEUTJlR1ZQTVVjMVRrd3pWV2hRYW1FMVIyY2lMQ0p0WVdNaU9pSmtPVFl5TURBd01ESTFZVEkyWVRReU9ERTBaRFJsTWpSa1lXUTFNR015TjJRMk5XUTRNalkwTkdFeE1XUmpOVGt3TnpFd09UTXdabU5pTldSbVlUUmtJbjAlM0QiLCJwYXRoIjoiLyIsImRvbWFpbiI6InRhc3R5Y29mZmVlLnJ1IiwiZXhwaXJlcyI6IjIwMjctMTAtMTBUMTk6MjI6NTEuMzQyWiIsImh0dHBPbmx5IjpmYWxzZSwic2VjdXJlIjpmYWxzZSwia2V5IjoiWFNSRi1UT0tFTiIsIm1heEFnZSI6MTU3NzY2NDAwLCJob3N0T25seSI6ZmFsc2UsImNyZWF0aW9uIjoiMjAyMi0xMC0xMFQxOToyMjo1MS4zNDJaIiwibGFzdEFjY2Vzc2VkIjoiMjAyMi0xMC0xMFQxOToyMjo1MS4zNDJaIn0seyJ2YWx1ZSI6ImV5SnBkaUk2SW5nNE0ybDNOMFZsU1dGYWVHUlZkbkYyWkUwMFlWRTlQU0lzSW5aaGJIVmxJam9pWlhGUmVEVTNNREZNYWpWTVoxRnVhMHh2T0hKVk1tZ3hWMUZGTWl0Y0x6TkpTSFZWY1RVeU1GRkdRVGh3WW5OTlpHWnRNMkZMWEM4eWFqbGhhVVZ5V1hJcmJGTlBiRGt5Wm1ST1MyZGxZbGR0UmtKVmJDdHVWV2hsVVdOeVEyUTJhbHB6TUV4VGFYZHhlalpGTmxCV1pYUlROWFJCUVZ3dlMyc3hPVlJqUXprMk9IZ2lMQ0p0WVdNaU9pSTNaR0psWVRjNU5XVm1ObVJsWkdZMlptVTRNakJpWWpsaFlUTm1PRFJtWm1JMVl6a3daakk1T0RnME5HVXdZalU1WVRSbE9UUmtORGhqTWpNeE9XSTBJbjAlM0QiLCJwYXRoIjoiLyIsImRvbWFpbiI6InRhc3R5Y29mZmVlLnJ1IiwiZXhwaXJlcyI6IjIwMjctMTAtMTBUMTk6MjI6NTEuMzQyWiIsImh0dHBPbmx5Ijp0cnVlLCJzZWN1cmUiOmZhbHNlLCJrZXkiOiJ0YXN0eWNvZmZlZV9zZXNzaW9uIiwibWF4QWdlIjoxNTc3NjY0MDAsImhvc3RPbmx5IjpmYWxzZSwiY3JlYXRpb24iOiIyMDIyLTEwLTEwVDE5OjIyOjUxLjM0MloiLCJsYXN0QWNjZXNzZWQiOiIyMDIyLTEwLTEwVDE5OjIyOjUxLjM0MloifV19fQ==&wrapAPIKey=HCTPpA928xiR2xIr0ON2HkyaS8gKg4Lz'
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
						{error ? <Error /> : null}
						{loading ? <Spinner /> : <CardList data={filterData} />}
					</div>
				</div>
			</div>
		</>
	)
}

export default Content
