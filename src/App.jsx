import React from "react";
import "./App.css";
import styled from "styled-components";
import { ObjectDetector } from "./components/objectDedactor";

function App() {
  return (
    <>
      <div className='bg-slate-500 w-100 min-h-100 flex flex-col align-middle justify-center text-white-300'>
        <ObjectDetector />
      </div>
    </>
  );
}

export default App;
