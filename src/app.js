import React from 'react';
import ReactDOM from 'react-dom';
//--------------components----------------
import MainBoard from './components/board/MainBoard';


class App extends React.Component {

  render() {
    return (
      <MainBoard />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
