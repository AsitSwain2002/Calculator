import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Input from './component/Input'
import React, { useState } from 'react'
import ButtonContainer from './component/ButtonContainer'
import './App.css'
import SubContainer from './component/SubContainer'

function App() {
  const [val, setVal] = useState("");
  return <>
    <div className="container">
      <SubContainer>
        <Input val={val}></Input>
        <ButtonContainer onsetValue={setVal} allValue={val} />
      </SubContainer>
    </div>
  </>
}

export default App
