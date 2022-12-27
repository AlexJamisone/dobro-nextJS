import baseCallApiGET from "./api/baseCallApiGET"

interface CheckData {
	name: string
	amount: number
	totalPrice: number
}

export const getOrder = async (arrOfOrderId: Array<number>) => {
    return Promise.all(
        arrOfOrderId.map(async (item) => {
            try {
                const moduleName = 'front.orders'
                const data = await baseCallApiGET(
                    `/api/read?moduleName=${moduleName}&objectId=${item}`,
                    'GET'
                )
                const check = data.orderItemList.map(
                    ({ name, amount, totalPrice }: CheckData) => {
                        return {
                            name,
                            amount,
                            totalPrice,
                        }
                    }
                )
                console.log(check)
                return check
            } catch (error) {
                console.log(error)
            }
        })
    )
}

export default getOrder