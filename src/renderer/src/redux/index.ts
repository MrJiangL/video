// store.ts
import { configureStore, createSlice } from '@reduxjs/toolkit'

interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 100
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  }
})

export const { increment, decrement } = counterSlice.actions
export const selectCount = (state: { counter: CounterState }) => state.counter.count

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})
