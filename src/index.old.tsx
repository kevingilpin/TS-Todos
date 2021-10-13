import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

// const App = (props: AppProps): JSX.Element => {
//   const [count, setCount] = useState(0);

//   const onIncrement = (): void => {
//     setCount(count + 1);
//   };

//   const onDecrement = (): void => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <button onClick={onIncrement}>increment</button>
//       <button onClick={onDecrement}>decrement</button>
//       {count}
//     </div>
//   );
// };

class App extends React.Component<AppProps> {
  state = { counter: 0 };

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App color="red" />, document.querySelector('#root'));
