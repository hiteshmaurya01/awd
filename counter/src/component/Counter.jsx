import React from 'react';

function Count({counter, addValue , removeValue}) {
    return ( 
        <>
            <div className="flex h-screen items-center justify-center">
            <div>
                <h1 >Count : {counter}</h1>
                <br />
                <button onClick={addValue}
                >Add value</button> 
                <br />
                <button
                onClick={removeValue}
                >remove value </button>
            </div>
            </div>

            
        </>
     );
}

export default Count;