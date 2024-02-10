import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    itr: 'ITR-A-48290',
    date: 'November 11, 2023',
    industry: 'Weyland-Yutani Corporation',
    studentName: 'Ellen Ripley',
    draft: 100,
    score: 75,
    type: 'pending',
  },
  {
    id: 2,
    itr: 'ITR-A-48291',
    date: 'November 11, 2023',
    industry: 'Weyland-Yutani Corporation (2)',
    studentName: 'Ellen Ripley',
    score: 91,
    type: 'draftSent',
  },
  {
    id: 3,
    itr: 'ITR-I-38739',
    date: 'October 9, 2023',
    industry: 'Stark Industries',
    studentName: 'Tony Stark',
    draft: 100,
    score: 98,
    type: 'pending',
  },
  {
    id: 4,
    itr: 'ITR-B-53678',
    date: 'September 14, 2023',
    industry: 'Wayne Enterprises',
    studentName: 'Bruce Wayne',
    draft: 50,
    score: 33,
    type: 'pending',
  },
  {
    id: 5,
    itr: 'ITR-R-39391',
    date: 'July 28, 2023',
    industry: 'Umbrella Corporation',
    studentName: 'Albert Wesker',
    draft: 75,
    score: 67,
    type: 'pending',
  },
  {
    id: 6,
    itr: 'ITR-T-23992',
    date: 'June 29, 2023',
    industry: 'Cyberdyne Systems',
    studentName: 'Miles Dyson',
    draft: 100,
    score: 75,
    type: 'pending',
  },
  {
    id: 7,
    itr: 'ITR-D-57389',
    date: 'June 6, 2023',
    industry: 'Union Aerospace Corporation',
    studentName: 'Flynn Taggart',
    score: 80,
    type: 'draftSent',
  },
];

const DataConfigSlice = createSlice({
  name: 'dataContext',
  initialState,
  reducers: {
    findone(state, action) {
      return state.filter((item) => item.id === action.payload);
    },
  },
});

export const { findone } = DataConfigSlice.actions;

export default DataConfigSlice.reducer;
