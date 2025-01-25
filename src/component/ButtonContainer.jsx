import Bottons from "./Bottons";
import React from "react";
const ButtonContainer = ({ setVal, val }) => {
    let btns = ['c', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
    const onButtonClick = (btnText) => {

        if (btnText === 'c') {
            setVal("");
        }
        else if (btnText === '=') {
            const res = eval(val);
            setVal(res);
        } else {
            const newVal = val + btnText
            setVal(newVal);
        }
    }
    return <div className="btnContainer">
        <Bottons allBtn={btns} onButtonClick={onButtonClick}></Bottons>
    </div>
}
export default ButtonContainer;