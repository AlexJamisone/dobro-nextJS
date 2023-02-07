export interface FormAuthState {
	phone: number | null
	pin: boolean
	error: boolean
	loading: boolean
}

interface SetPhoneAction {
	type: 'SET_PHONE'
	payload: number | null
}
interface SetPinAction {
	type: 'SET_PIN'
	payload: boolean
}
interface SetErrorAction {
	type: 'SET_ERROR'
	payload: boolean
}
interface SetLoadingAction {
	type: 'SET_LOADING'
	payload: boolean
}

type Action = SetPhoneAction | SetPinAction | SetErrorAction | SetLoadingAction

export const FormAuthReducer = (
	state: FormAuthState,
	action: Action
): FormAuthState => {
	switch (action.type) {
		case 'SET_PHONE':
			return { ...state, phone: action.payload }
		case 'SET_PIN':
			return { ...state, pin: action.payload }
		case 'SET_ERROR':
			return { ...state, error: action.payload }
		case 'SET_LOADING':
			return { ...state, loading: action.payload }
		default:
			return state
	}
}
