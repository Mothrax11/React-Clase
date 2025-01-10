import React from "react";
import { useState } from "react";

function PopUp() {

    const [showPop, setShowPop] = useState(false);

    


return(
    <>
    <button onClick={() => setShowPop((prev) => !prev)}>PopUp</button>
        {showPop && (
            <div style={{backgroundColor:'blue'}}>
                PopUp Abierto
                
            </div>
        )}
    </>
    );
}

export default PopUp;