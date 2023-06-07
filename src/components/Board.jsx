import { useState } from 'react';
import Square from './Square';
import '../App.css';
import PopupWinner from './PopupWinner';
function Board() {
   const [squares, setSquares] = useState(Array(9).fill(null));
   const [isX, setIsX] = useState(true);

   const handleClick = index => {
      if (calculateWinner(squares) || squares[index]) {
         return;
      }
      squares[index] = isX ? 'X' : 'O';
      setSquares(squares);
      setIsX(!isX);
   };
   const calculateWinner = squares => {
      const winnerPatterns = [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [2, 4, 6],
      ];

      for (let index = 0; index < winnerPatterns.length; index++) {
         const [a, b, c] = winnerPatterns[index];
         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
         }
      }
      return null;
   };

   const winner = calculateWinner(squares);
   let status;
   let isShowPopupWinner = false;
   if (winner) {
      // status = `Winner: ${winner}`;
      isShowPopupWinner = true;
   } else {
      status = `Next Player: ${isX ? 'X' : 'O'}`;
   }

   const handleRestart = () => {
      setIsX(true);
      setSquares(Array(9).fill(null));
   };

   const renderSquares = i => {
      return <Square value={squares[i]} onSquareClick={() => handleClick(i)} />;
   };

   return (
      <>
         <div className='board'>
            <div className='board-row'>
               {renderSquares(0)}
               {renderSquares(1)}
               {renderSquares(2)}
            </div>
            <div className='board-row'>
               {renderSquares(3)}
               {renderSquares(4)}
               {renderSquares(5)}
            </div>
            <div className='board-row'>
               {renderSquares(6)}
               {renderSquares(7)}
               {renderSquares(8)}
            </div>
         </div>
         <div className='status'>{status}</div>
         {isShowPopupWinner ? <PopupWinner player={winner} /> : <></>}
         <button className='restartBtn' onClick={handleRestart}>
            Restart Game!
         </button>
      </>
   );
}

export default Board;
