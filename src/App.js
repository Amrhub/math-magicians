import React from 'react';
import Calculator from './components/Calculator';
import './App.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="App flex-center-center">
        <Calculator />
      </div>
    );
  }
}

export default App;
