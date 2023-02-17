export interface dbCofeeDataApi {
	id: string
	img: string
	name: string
	price: string
	description: string
	grade: number | null
	reg: string
	handler: string
	height: string | null
	Iid: number | null
	acidity: 'Bitter' | 'Neutral' | 'Acid'
	density: 'Tea' | 'Neutral' | 'Dense'
	storeQuantityKg: number
	ratio: number
}
