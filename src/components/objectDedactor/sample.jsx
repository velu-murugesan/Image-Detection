
// import styled from 'styled-components';
// import "@tensorflow/tfjs-backend-cpu";
// import "@tensorflow/tfjs-backend-webgl";
// import * as cocoSsd from "@tensorflow-models/coco-ssd";
// import {useState,useRef} from "react";


// const ObjectDedactorContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;


// const DetectorContainer = styled.div`
//   min-width: 200px;
//   height: 500px;
//   border: 3px solid #fff;
//   border-radius: 5px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
// `;


// const TargetImg = styled.img`
//    height:100%;
//    width:100%;
// `;


// const HidenFileInput = styled.input`
//   display:none;

// `;



// const SelectButton = styled.button`
//    padding:.5em .7em;
//    border:2px solid transparent;
//    background-color:#fff;
//    color:#000;
//    font-size:1em;
//    font-weight:500;
//    outline:none;
//    margin-top:2em;
//    cursor:pointer;
//    transition:all 260ms ease-in-out;

//    &:hover {
//     background-color: transparent;
//     border: 2px solid #fff;
//     color: #fff;
//   }
// `;


// const TargetBox = styled.div`
//    position:absolute;

//    left: ${({ x }) => x + "px"};
//    top: ${({ y }) => y + "px"};
//    width: ${({ width }) => width + "px"};
//    height: ${({ height }) => height + "px"};

//    border:4px solid green;
//    background-color:transparent;
//    z-index: 20;


//    &::before {
//       content: "${({ classType, score }) => `${classType} ${score.toFixed(1)}%`}";
//       color: #1ac71a;
//       font-weight: 500;
//       font-size: 17px;
//       position: absolute;
//       top: -1.5em;
//       left: -5px;
//     }
// `
   

// export function ObjectDedactor(props){

// const [imgData,setImgData] = useState(null);
// const fileInputRef = useRef();    
// const imageRef = useRef();
// const [predictions,setPredictions] = useState([]);
// const isEmptyprediction = !predictions || predictions.length === 0;

// const openFilePicker = () =>{
//    if(fileInputRef.current) fileInputRef.current.click();
// }

// const normalizePredictions = (predictions,imgsize) => {
//     if(!predictions || !imgsize || !imageRef) return predictions || [];
//     return predictions.map( (prediction) => {
//          const {bbox} = prediction;
//          const oldX = bbox[0];
//          const oldY = bbox[1];
//          const oldWidth = bbox[2];
//          const oldHeight = bbox[3];
 
 
//          const imgWidth = imageRef.current.width;
//          const imgHeight = imageRef.current.height;
 
//          const x = (oldX * imgWidth) / imgsize.width;
//          const y = (oldY * imgHeight) / imgsize.height;
//          const width = (oldWidth * imgWidth) /imgsize.width;
//          const height = (oldHeight * imgHeight) /imgsize.height; 
 
 
//          return {...prediction,bbox:[x,y,width,height]}
//     })
// }

// const DetectObjectonImg = async (imageElement,imgsize) =>{
//      const model = await cocoSsd.load({})
//      const predictions = await model.detect(imageElement,6)
//      const normalizedPredictions = normalizePredictions(predictions,imgsize);
//      setPredictions(normalizedPredictions);
//      console.log("predictions:" ,predictions);
// }


// const readImage = (file) =>{
//    return new Promise((rs,rj) =>{
//       const fileReader = new FileReader();
//       fileReader.onload = () =>rs(fileReader.result)
//       fileReader.onerror = () =>rj(fileReader.error)
//       fileReader.readAsDataURL(file);
//    })
// }

// const onSelectImage = async(e) =>{
//    const file =e.target.files[0];
//    const imgData = await readImage(file);
//    setImgData(imgData);
//    const imageElement = document.createElement('img');
//    imageElement.src=imgData;

//    imageElement.onload = async () =>{
//       const imgsize = {width:imageElement.width,height:imageElement.height}
//       await DetectObjectonImg(imageElement,imgsize)
//    }
// }
//     return(
//         <>
//           <ObjectDedactorContainer>
//              <DetectorContainer>
//                {imgData &&  <TargetImg src={imgData} ref={imageRef}></TargetImg>}
//                {isEmptyprediction && predictions.map( (prediction,id) => {
//                    return(
//                      <TargetBox key={id} 
//                      x={prediction.bbox[0]} 
//                      y={prediction.bbox[1]} 
//                      width={prediction.bbox[2]} 
//                      height={prediction.bbox[3]}
//                      classType={prediction.class}
//                      score={prediction.score *100}></TargetBox>
//                    )
//                })}
//              </DetectorContainer>
//              <HidenFileInput type='file' ref={fileInputRef}  onChange={onSelectImage}/>
//              <SelectButton onClick={openFilePicker}>select Image</SelectButton>
//           </ObjectDedactorContainer>
//         </>
//     )
// }