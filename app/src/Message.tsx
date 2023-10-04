import { useState } from "react";

function Calc() {
  const [numberone, setNumberone] = useState(0); 
  const [numbertwo, setNumbertwo] = useState(0);
  const [output, setTotal] = useState(0);

  function add() {
    all();
  }

  function subtract() {
    setTotal(numberone - numbertwo);
  }

  function multiply() {
    setTotal(numberone * numbertwo);
  }

  function divide() {
   
      setTotal(numberone / numbertwo);
  }
  function all() {
    setTotal(numberone + numbertwo);
  }
  return (
    <div className="App">
      <h1>Calculator</h1>
     <div className="input-numbers">
     <label htmlFor="numberone">VALUE 1:</label>
        <input
          type="number"
          placeholder=""
          value={numberone}
          onChange={(e) => setNumberone(+e.target.value)}
        />
        <label htmlFor="numbertwo">VALUE 2:</label>
        <input
          type="number"
          placeholder=""
          value={numbertwo}
          onChange={(e) => setNumbertwo(+e.target.value)}
        />
      </div>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>

      <h2>Result: {output}</h2>
    </div>
  );
}

export default Calc;