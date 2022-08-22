import { FC } from 'react'
import Card from '../Card/Card'

type CardListP = {
	data: []
}

const CardList: FC<CardListP> = ({ data }) => {
	return (
		<>
			{data.map((item, index) => (
				<Card key={index} data={item} />
			))}
		</>
	)
}

export default CardList
