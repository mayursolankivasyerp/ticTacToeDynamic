const SqaureBoxContainer = ({ squares, handleBoxClick }) => {
  return (
    <div className="grid__container">
      {squares.map((boxes, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {boxes.map((cell, colIndex) => (
            <div
              key={colIndex}
              className="square"
              onClick={() => handleBoxClick(rowIndex, colIndex)}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SqaureBoxContainer;
