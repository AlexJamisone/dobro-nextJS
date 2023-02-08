export interface UserAvatarState {
	imgUpload: File | undefined
	loading: boolean
}

interface SetImgUpload {
	type: 'SET_IMG'
	payload: File | undefined
}

interface SetLoading {
	type: 'SET_LOADING'
	payload: boolean
}

type Action = SetImgUpload | SetLoading

export const UserAvatarReducer = (
	state: UserAvatarState,
	action: Action
): UserAvatarState => {
	switch (action.type) {
		case 'SET_IMG':
			return { ...state, imgUpload: action.payload }
		case 'SET_LOADING':
			return { ...state, loading: action.payload }

		default:
			return state
	}
}
