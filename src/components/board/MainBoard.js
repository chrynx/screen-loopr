import React from 'react';
import '../../scss/board/mainBoard.scss';
class MainBoard extends React.Component {
  state = {

  }
  firstSound(){
    alert('this is the first div');
  }
  secondSound(){
    alert('this is the second div');
  }
  thirdSound(){
    alert('this is the third div');
  }
  fourthSound(){
    alert('this is the fourth div');
  }
  render(){
    return (
      <section className="mainBoard">
        <div>
          <div onClick={this.firstSound} className="soundOne"> div 1 </div>
          <div onClick={this.secondSound} className="soundTwo"> div 2 </div>
        </div>
        <div>
          <div onClick={this.thirdSound} className="soundThree"> div 3 </div>
          <div onClick={this.fourthSound} className="soundFour"> div 4 </div>
        </div>
      </section>
    );
  }
}

export default MainBoard;
