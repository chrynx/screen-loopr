import React from 'react';
import '../../scss/board/mainBoard.scss';
class MainBoard extends React.Component {
  render(){
    return (
      <section className="mainBoard">
        <div>
          <div className="soundOne"> div 1 </div>
          <div className="soundTwo"> div 2 </div>
        </div>
        <div>
          <div className="soundThree"> div 3 </div>
          <div className="soundFour"> div 4 </div>
        </div>
      </section>
    );
  }
}

export default MainBoard;
