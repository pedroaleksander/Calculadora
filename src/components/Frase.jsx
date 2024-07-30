import React, { useState } from 'react';

function Frase() {
  const [state, setState] = useState('Minha Frase');

  return(
  <>
    <input value={state}
    onChange={(event)=> setState(event.target.value)
    }
    
  />
     <p>
      <strong>Seu Texto:</strong>
     {state}
     </p>
    </>
);}
export default Frase;