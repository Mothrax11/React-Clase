import { useState } from "react";

function Visible() {
    const [visible, setVisible] = useState(false);

    function mostrar() {
        setVisible(!visible);
    }

    return (
        <div>
            <button onClick={mostrar}>Enseñar/Esconder</button>
            {visible && <p>Hola buenas tardes</p>}
        </div>
    );
}

export default Visible;
