import React, { useState } from 'react';

function Calculadora() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState("");

  return<>
    <input value={num1}
     type="number"
    onChange={
        (event)=>setNum1(parseFloat(event.target.value))
    }
  />
    <input value={num2}
     type="number"
    onChange={
        (event)=>setNum2(parseFloat(event.target.value))
    }
  />
   <div>
   <button onClick={() =>setResultado(num1 + num2)}> + </button>
   <button onClick={() =>setResultado(num1 - num2)}> - </button>
   <button onClick={() =>setResultado(num1 * num2)}> x </button>
   <button onClick={() =>setResultado(num1 / num2)}> / </button>
   </div>
   <p>{resultado}</p>
    </>
}
export default Calculadora;