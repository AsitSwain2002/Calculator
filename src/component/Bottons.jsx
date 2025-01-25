import React from "react";
import style from "../component/modules/Bottons.module.css"
const Bottons = ({ allBtn, onButtonClick }) => {
    return <>
        {allBtn.map(elm => (<button key={elm} className={`${style.btn}`} onClick={() => onButtonClick(elm)}>{elm}</button >))}
    </>
}
export default Bottons;