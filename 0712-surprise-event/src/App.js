import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addDot, addLine, setCurrentColor } from './store/drawingSlice';

const App = () => {
  const dots = useSelector((state) => state.drawing.dots);
  const lines = useSelector((state) => state.drawing.lines);
  const currentColor = useSelector((state) => state.drawing.currentColor);
  const dispatch = useDispatch();

  const handleMouseDown = (e) => {
    const { clientX, clientY } = e;
    const dot = { x: clientX, y: clientY, color: currentColor };
    dispatch(addDot(dot));
  };

  const handleMouseMove = (e) => {
    if (e.buttons !== 1) return; // 마우스 왼쪽 버튼이 눌려있지 않으면 그리기 중지

    const { clientX, clientY } = e;
    const line = { x: clientX, y: clientY, color: currentColor };
    dispatch(addLine(line));
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    dispatch(setCurrentColor(newColor));
  };

  return (
    <div>
      <div>
        <input type="color" value={currentColor} onChange={handleColorChange} />
      </div>
      <div
        style={{
          border: '1px solid black',
          width: '400px',
          height: '400px',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        {/* 점들 그리기 */}
        {dots.map((dot, index) => (
          <div
            key={`dot-${index}`}
            style={{
              position: 'absolute',
              left: dot.x,
              top: dot.y,
              width: '3px',
              height: '3px',
              backgroundColor: dot.color,
            }}
          />
        ))}
        {/* 선들 그리기 */}
        {lines.map((line, index) => (
          <div
            key={`line-${index}`}
            style={{
              position: 'absolute',
              left: line.x,
              top: line.y,
              width: '3px',
              height: '3px',
              backgroundColor: line.color,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
