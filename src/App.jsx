import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Input from './component/Input'
import React, { useState } from 'react'
import ButtonContainer from './component/ButtonContainer'
import './App.css'


function App() {
  const [val, setVal] = useState("");
  return <>
    <div className="mainContainer">
      <Input disVal={val}></Input>
      <ButtonContainer setVal={setVal} val={val}>
      </ButtonContainer>
    </div>
  </>
}

export default App
