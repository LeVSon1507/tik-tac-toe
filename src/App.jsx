import './App.css';
import Board from './components/Board';

function App() {
   return (
      <div className='container'>
         <div className='titleWrap'>
            <h1 className='title'>Tik Tac Toe Game</h1>
         </div>
         <Board />
      </div>
   );
}

export default App;
