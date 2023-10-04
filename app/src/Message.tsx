import { useState } from "react";

function Calc() {
  const [numberone, setNumber1] = useState(0); 
  const [numbertwo, setNumber2] = useState(0);
  const [output, setTotal] = useState(0);

  function updateTotal() {
    setTotal(numberone + numbertwo);
  }

  function addTotal() {
    updateTotal();
  }

  function subtractTotal() {
    setTotal(numberone - numbertwo);
  }

  function multiplyTotal() {
    setTotal(numberone * numbertwo);
  }

  function divideTotal() {
   
      setTotal(numberone / numbertwo);
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
          onChange={(e) => setNumber1(+e.target.value)}
        />
        <label htmlFor="numbertwo">VALUE 2:</label>
        <input
          type="number"
          placeholder=""
          value={numbertwo}
          onChange={(e) => setNumber2(+e.target.value)}
        />
      </div>
      <button onClick={addTotal}>Add</button>
      <button onClick={subtractTotal}>Subtract</button>
      <button onClick={multiplyTotal}>Multiply</button>
      <button onClick={divideTotal}>Divide</button>

      <h2>Result: {output}</h2>
    </div>
  );
}

export default Calc;