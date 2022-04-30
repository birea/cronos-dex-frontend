import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  totalTVL: 0,
}

export const onestaking = createSlice({
  name: 'staking',
  initialState,
  reducers: {
    getTotalTVL: (state, action) => {
      const totalTVL = action.payload
      state.totalTVL = totalTVL
    },
  }
})

export const { getTotalTVL} = onestaking.actions

export default onestaking.reducer