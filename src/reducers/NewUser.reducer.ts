export interface NewUserFieldsState {
	phone?: string
	firstName: string
	birthday?: string
	sex: 'male' | 'female'
	error: boolean
	loading: boolean
}

interface SetPhoneAction {
	type: 'SET_PHONE'
	payload: string | undefined
}
interface SetFirstNameAction {
	type: 'SET_FIRST_NAME'
	payload: string
}
interface SetBirthdayAction {
	type: 'SET_BIRTHDAY'
	payload: string
}
interface SetSexAction {
	type: 'SET_SEX'
	payload: 'male' | 'female'
}
interface SetErroAction {
	type: 'SET_ERROR'
	payload: boolean
}
interface SetLoadingAction {
	type: 'SET_LOADING'
	payload: boolean
}

type Action =
	| SetPhoneAction
	| SetFirstNameAction
	| SetBirthdayAction
	| SetSexAction
	| SetErroAction
	| SetLoadingAction

export const NewUserReducer = (
	state: NewUserFieldsState,
	action: Action
): NewUserFieldsState => {
	switch (action.type) {
		case 'SET_PHONE':
			return { ...state, phone: action.payload }
		case 'SET_FIRST_NAME':
			return { ...state, firstName: action.payload }
		case 'SET_BIRTHDAY':
			return { ...state, birthday: action.payload }
		case 'SET_SEX':
			return { ...state, sex: action.payload }
		case 'SET_ERROR':
			return { ...state, error: action.payload }
		case 'SET_LOADING':
			return { ...state, loading: action.payload }
		default:
			return state
	}
}
