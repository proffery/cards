import { RootState } from '@/services/store'

export const selectAppError = (state: RootState) => state.app.error
export const selectAppSuccess = (state: RootState) => state.app.success
export const selectAppIsLoading = (state: RootState) => state.app.isLoading
