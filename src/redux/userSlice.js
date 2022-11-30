import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser : "" ,
  modalLogin : false
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    toggleModal: (state , action) => {
      state.modalLogin = action.payload
    },
    handleDataUser: (state , action) => {
      state.currentUser = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { handleDataUser, toggleModal } = userSlice.actions

export default userSlice.reducer