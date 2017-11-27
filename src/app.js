import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './components/Buttons.js';
import MainBoard from './components/board/MainBoard';

class App extends React.Component {
  state = {
    counter: 0
  }
  increment() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  decrement() {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  }

  reset() {
    this.setState({ counter: 0 });

  }
  render() {

    return (
      <main>
        <div className="container">
          <h1>{this.state.counter}</h1>
          <hr />
          <Buttons />
          <MainBoard />
        </div>
      </main>


    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
