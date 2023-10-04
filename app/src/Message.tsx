import { useState } from "react";

function Calc() {
  const [numberone, setNumber1] = useState(0); 
  const [numbertwo, setNumber2] = useState(0);
  const [output, setTotal] = useState(0);

  function updateTotal(all) {
    setTotal(all);
  }

  function addTotal() {
    updateTotal(numberone + numbertwo);
  }

  function subtractTotal() {
    updateTotal(numberone - numbertwo);
  }

  function multiplyTotal() {
    updateTotal(numberone * numbertwo);
  }

  function divideTotal() {
   
      updateTotal(numberone / numbertwo);
  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="input-numbers">
        <input
          type="number"
          placeholder=""
          value={numberone}
          onChange={(e) => setNumber1(+e.target.value)}
        />
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

      <h2>Total: {output}</h2>
    </div>
  );
}

export default Calc;