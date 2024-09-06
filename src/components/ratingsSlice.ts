import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RatingsState {
  ratings: number[];
}

const initialState: RatingsState = {
  ratings: [],
};

const ratingsSlice = createSlice({
  name: 'ratings',
  initialState,
  reducers: {
    addRating: (state, action: PayloadAction<number>) => {
      state.ratings.push(action.payload);
    },
  },
});

export const { addRating } = ratingsSlice.actions;
export default ratingsSlice.reducer;
