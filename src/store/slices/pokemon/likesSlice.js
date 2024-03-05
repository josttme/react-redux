import { createSlice } from '@reduxjs/toolkit'

const LOCAL_STORAGE_LIKES_KEY = 'poke_likes'

const initialState = {
	likes: localStorage.getItem(LOCAL_STORAGE_LIKES_KEY)
		? JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIKES_KEY))
		: []
}
export const likesSlice = createSlice({
	name: 'likes',
	initialState,

	reducers: {
		toggleLike: (state, action) => {
			const { pokemon } = action.payload
			const isLiked = state.likes.some((like) => like.id === pokemon.id)

			if (isLiked) {
				state.likes = state.likes.filter((like) => like.id !== pokemon.id)
			} else {
				state.likes.push(pokemon)
			}

			localStorage.setItem(LOCAL_STORAGE_LIKES_KEY, JSON.stringify(state.likes))
		}
	}
})
export const { toggleLike } = likesSlice.actions

/* export const { toggleLike } = likesSlice.actions
export default likesSlice.reducer
 */
/* export const userSlice = createSlice({
  name:'user',
  initialState: localStorage.getItem(LocalStorageEntities.user_info)
    ? JSON.parse(localStorage.getItem(LocalStorageEntities.user_info) as string)
    : [],
  reducers: {
    createUSer: (state, action) => {

    }
  }
}) */
