import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dots: [],
  lines: [],
  currentColor: '#000000', // 초기 색상은 검은색으로 설정
};

const drawingSlice = createSlice({
  name: 'drawing',
  initialState,
  reducers: {
    addDot: (state, action) => {
      state.dots.push(action.payload);
    },
    addLine: (state, action) => {
      state.lines.push(action.payload);
    },
    setCurrentColor: (state, action) => {
      state.currentColor = action.payload;
    },
  },
});

export const { addDot, addLine, setCurrentColor } = drawingSlice.actions;

export default drawingSlice.reducer;
