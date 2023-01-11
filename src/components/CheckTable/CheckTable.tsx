import { Box, Tooltip, Grid, GridItem, Text } from '@chakra-ui/react'
import { CheckData } from '../../utils/getOrder'
import moment from 'moment'

interface CheckTableProps {
	transactions: CheckData[]
}

const CheckTable = ({ transactions }: CheckTableProps) => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			w={['100%', '75%', null, '50%']}
			textAlign="center"
		>
			<Grid
				templateColumns="repeat(5, 1fr)"
				m={3}
				gap={5}
				justifyItems="center"
				alignItems="center"
				fontSize={[10, 12, 14]}
				cursor="default"
			>
				<GridItem>Дата</GridItem>
				<GridItem>Чек</GridItem>
				<GridItem>Сумма</GridItem>
				<GridItem>Оплачено Бонусами</GridItem>
				<GridItem>Кэшбэк</GridItem>
			</Grid>
			<Box
				overflowY={['scroll', null, 'scroll', 'hidden']}
				height={['280px', null, '280px', '100vh']}
			>
				{transactions.map(
					({
						date,
						getBonus,
						items,
						paidBonus,
						totalPrice,
						wasPayBonus,
					}) => (
						<Grid
							templateColumns="repeat(5, 1fr)"
							alignItems="center"
							m={3}
							gap={1}
							fontSize={[9, 10, 12]}
							lineHeight={1.2}
							key={date}
							border={
								wasPayBonus
									? '2px solid teal'
									: '1px solid black'
							}
							_dark={{
								border: wasPayBonus
									? '2px solid teal'
									: '1px solid white',
							}}
							rounded="2xl"
							cursor="pointer"
							p={1}
						>
							<GridItem>
								<Tooltip
									label={moment(date).format('LT')}
									placement="top"
								>
									<Text>{moment(date).format('L')}</Text>
								</Tooltip>
							</GridItem>
							<GridItem>
								{items.map(
									({ name, amount, totalPrice }, index) => (
										<Box key={index}>
											<Tooltip label={totalPrice}>
												<Text
													textAlign="left"
													p={0.4}
												>{`×${amount} ${name}`}</Text>
											</Tooltip>
										</Box>
									)
								)}
							</GridItem>
							<GridItem>{totalPrice} ₽</GridItem>
							<GridItem>{paidBonus ? paidBonus : 0} ₽</GridItem>
							<GridItem>{getBonus} ₽</GridItem>
						</Grid>
					)
				)}
			</Box>
		</Box>
	)
}

export default CheckTable
