import '../App.css';

// eslint-disable-next-line react/prop-types
function PopupWinner({ player }) {
   return (
      <div className='popupWrap'>
         <div className='popup'>
            Congratulation!!! <br></br> Winner player is: {player}
         </div>
      </div>
   );
}

export default PopupWinner;
