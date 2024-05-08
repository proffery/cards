import { toast } from 'react-toastify'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type.endsWith('executeQuery/pending'),
      state => {
        state.isLoading = true
      }
    )
    builder.addMatcher(
      action => action.type.endsWith('executeQuery/fulfilled'),
      state => {
        state.isLoading = false
      }
    )
    builder.addMatcher(
      action => action.type.endsWith('executeQuery/rejected'),
      state => {
        state.isLoading = false
      }
    )
  },
  initialState: {
    error: null as null | string,
    isLoading: false as boolean,
    success: null as null | string,
  },
  name: 'app',
  reducers: {
    setAppError: (state, action: PayloadAction<{ error: null | string }>) => {
      state.error = action.payload.error
      toast.error(action.payload.error)
    },
    setAppSuccess: (state, action: PayloadAction<{ success: null | string }>) => {
      state.success = action.payload.success
      toast.success(action.payload.success)
    },
  },
})

export const appActions = slice.actions
export const appReducer = slice
