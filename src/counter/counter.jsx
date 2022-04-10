import React from 'react';

// Always Remember the react function name start with Capital

export default function Counter() {

    const [counter, setCounter] = React.useState(1)

    const handleIncrement = (value) => {
        setCounter(counter + value);
    }

    return (
        <>
            <h1>Counter</h1>

            <h1 className={`${counter % 2 === 0 ? "red" : "green"}`}>
                {counter}
            </h1>

            {/* <h2>{counter}</h2> */}

            <button onClick={() => handleIncrement(1)}>Add</button>
            <button onClick={() => handleIncrement(-1)}> Reduce</button>
            <button onClick={() => handleIncrement(2)}> Double</button>
        </>
    );
}

