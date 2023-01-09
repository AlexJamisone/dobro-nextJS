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
		>
			<Grid
				templateColumns="repeat(5, 1fr)"
				m={3}
				gap={5}
				justifyItems="center"
				alignItems="center"
				fontSize={13}
				cursor='default'
			>
				<GridItem>Дата</GridItem>
				<GridItem>Чек</GridItem>
				<GridItem>Сумма</GridItem>
				<GridItem>Оплачено Бонусами</GridItem>
				<GridItem>Кэшбэк</GridItem>
			</Grid>
			<Box
				overflowY={['scroll', null, null, 'hidden']}
				height={['280px', null, null, '100vh']}
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
							textAlign="center"
							m={3}
							fontSize={[11, 12, 13, 14]}
							lineHeight={1.2}
							key={date}
							border={
								wasPayBonus
									? '1px solid teal'
									: '1px solid white'
							}
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
										<Box key={index} display="flex">
											<Tooltip label={totalPrice}>
												<Text
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
