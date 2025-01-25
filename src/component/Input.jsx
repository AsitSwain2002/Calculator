import React from "react"
import style from "../component/modules/Input.module.css"
export default function Input({ disVal }) {
    return <>
        <input type="tel" name="" className={`${style.data}`} value={disVal} readOnly />
    </>
}