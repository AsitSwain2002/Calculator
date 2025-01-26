import React from 'react'
import style from "../component/modules/SubContainer.module.css"

function SubContainer({ children }) {
    return (
        <div className={style.subCon}>
            {children}
        </div>
    )
}

export default SubContainer