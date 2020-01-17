import React, { useState } from 'react';

function ContaClicks() {
    const [contador, setContador] = useState(0);
    return(
        <div>
            <p>Você clicou x vezes</p>
            <button onClick={() => setContador(contador + 1)}>clicar</button>
        </div>
    )
}
export default ContaClicks;