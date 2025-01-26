import React from "react";
import style from "../component/modules/Bottons.module.css"
import { IoBackspaceOutline } from "react-icons/io5";
const Bottons = ({ btnValue }) => {

    const allDiv = [<div className="box box-2" id="box-1">%</div>
        , <div className="box box-2" id="box-2">CE</div>
        , <div className="box box-2" id="box-3">C</div>
        , <div className="box box-2" id="box-4"><IoBackspaceOutline /></div>
        , <div className="box box-2" id="box-5"><sup>1</sup>/x</div>
        , <div className="box box-2" id="box-6">x<sup>2</sup></div>
        , <div className="box box-2" id="box-7"><sup>2</sup>&radic;x</div>
        , <div className="box box-2" id="box-8">/</div>
        , <div className="box" id="box-9">7</div>
        , <div className="box" id="box-10">8</div>
        , <div className="box" id="box-11">9</div>
        , <div className="box box-2" id="box-12">*</div>
        , <div className="box" id="box-13">4</div>
        , <div className="box" id="box-14">5</div>
        , <div className="box" id="box-15">6</div>
        , <div className="box box-2" id="box-16">-</div>
        , <div className="box" id="box-17">1</div>
        , <div className="box" id="box-18">2</div>
        , <div className="box" id="box-19">3</div>
        , <div className="box box-2" id="box-20">+</div>
        , <div className="box" id="box-21"><sup>+</sup>/-</div>
        , <div className="box" id="box-22">0</div>
        , <div className="box" id="box-23">.</div>
        , <div className="box" id="box-24">=</div>]
    return (
        <>
            {allDiv.map((divs) => {
                onclick = (e) => {
                    e.stopPropagation;
                    btnValue(e.target.innerText);
                }
                return divs;
            })}
        </>
    )
}
export default Bottons;