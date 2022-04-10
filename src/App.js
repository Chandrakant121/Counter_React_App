import './App.css';
import React from 'react';
import Counter from './counter/counter'
import {Task} from "./input/task"

function App() {

  return (
    <div className="App">
    <Counter/>  
    <Task/>
    </div >
  );
}

export default App;



// ===================================================================================
// import './App.css';
// import React from 'react';

// function App() {

//   const [counter, setCounter] = React.useState(1)

//   const handleIncrement = (value) => {
//     setCounter(counter + value);
//   }

//   return (
//     <div className="App">

//       <h1>Counter</h1>
//       <h2>{counter}</h2>

//       <button onClick={() => handleIncrement(1)}>Add</button>
//       <button onClick={() => handleIncrement(-1)}> Reduce</button>

//     </div >
//   );
// }
// export default App;


//============================================================================================

  //destructuring
  //React.useState => returns [ Value, function to update value (setValue)]
  
  //state is that the component is remember
