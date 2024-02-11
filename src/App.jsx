import React from 'react'
import './App.css';
import styled from 'styled-components';
import { ObjectDetector} from './components/objectDedactor';

function App() {

  const AppContainer = styled.div`
    width:100%;
    min-height:100vh;
    background-color:#000;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:#fff;
  `;

  return (
    <>
      <AppContainer>
         <ObjectDetector />
      </AppContainer>
    </>
  )
}

export default App;

