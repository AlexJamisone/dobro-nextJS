import { FC } from 'react'
import Card from '../Card/Card'

type CardListP = {
	data: [] | any
}

const CardList: FC<CardListP> = ({ data }) => {
	return (
		<>
			{data.map((item: any, index: number) => (
				<Card key={index} data={item} />
			))}
		</>
	)
}

export default CardList
