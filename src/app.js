import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './components/Buttons.js';

class App extends React.Component {


  constructor(){
    super();
    this.state = { counter: 0 };
  }

  render() {

    return (
      <main>
        <div className="container">
          <h1>{this.state.counter}</h1>
          <hr />
          <Buttons />
        </div>
      </main>


    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
