import React from "react"
import style from "../component/modules/Input.module.css"
export default function Input({ val }) {
    return <>
        <div className={style.answerbox}>
            <input type="tel" className={style.ansInput} value={val} readOnly />
        </div>
    </>
} 