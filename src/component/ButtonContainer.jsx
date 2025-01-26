import Bottons from "./Bottons";
import React from "react";
import style from "../component/modules/ButtonContainer.module.css"
const ButtonContainer = ({ onsetValue, allValue }) => {

    const setBtnValue = (val) => {
        if (val === 'C' || val === "CE") {
            onsetValue("");
        }
        else if (val === undefined) {
            let findDiv = allValue.split("");
            findDiv.pop()
            onsetValue(findDiv.join(""))

        }
        else if (val === '=') {
            const res = eval(allValue);
            onsetValue(res);
        } else {
            const newVal = allValue + val
            onsetValue(newVal);

        }

    }

    return <div className={style.headbox}>
        <Bottons btnValue={setBtnValue} />
    </div>
}
export default ButtonContainer;