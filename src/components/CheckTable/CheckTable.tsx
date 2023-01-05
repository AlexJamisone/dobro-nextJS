import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Center,
	Stack,
	Box,
} from '@chakra-ui/react'
import { CheckData } from '../../utils/getOrder'
import moment from 'moment'

interface CheckTableProps {
	transactions: CheckData[]
}

const CheckTable = ({ transactions }: CheckTableProps) => {
	return (
		<TableContainer>
			<Table size="sm" variant="striped">
				<Thead>
					<Tr>
						<Th>Дата</Th>
						<Th textAlign="left">Чек</Th>
						<Th>Сумма Чека</Th>
						<Th>Оплачено Бонусами</Th>
						<Th>Кэшбэк</Th>
						{/* <Th>Списание</Th> */}
					</Tr>
				</Thead>
				<Tbody>
					{transactions.map(
						(
							{
								date,
								getBonus,
								items,
								paidBonus,
								totalPrice,
								wasPayBonus,
							},
							index
						) => (
							<Tr key={index}>
								<Td textAlign="left">
									{moment(date).format('lll')}
								</Td>
								<Td
									display="flex"
									justifyContent="left"
									flexWrap="wrap"
									gap={3}
									p={3}
								>
									{items.map(
										(
											{ amount, name, totalPrice },
											index
										) => (
											<Center key={index} display="flex">
												{`x${amount} `}
												{name}
											</Center>
										)
									)}
								</Td>
								<Td textAlign="center">{totalPrice}</Td>
								<Td textAlign="center">{paidBonus}</Td>
								<Td textAlign="center">{getBonus}</Td>
								{/* <Td textAlign="center">
									{wasPayBonus ? '✔' : '❌'}
								</Td> */}
							</Tr>
						)
					)}
				</Tbody>
			</Table>
		</TableContainer>
	)
}

export default CheckTable
