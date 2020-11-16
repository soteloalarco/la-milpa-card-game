/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from 'react';
import { useRecoilValue , useRecoilState, useRecoilCallback} from "recoil";
import CropCard from './CropCard';
import {cropsBoardState, currentRoundState, CORN_CARD, BEANS_CARD} from "../../../features/todos/atoms";

export default function CropsTable(props){

  const CROPS=[CORN_CARD, BEANS_CARD]
  const [cropsBoardValue, setCropsBoardState] = useRecoilState(cropsBoardState);
  const [currentRoundValue,setCurrentRoundState] = useRecoilState(currentRoundState);
  const [tableIsActiveValue, setTableIsActiveValue] = useState(false)


  const refillBoard = ()=> {
    // eslint-disable-next-line prefer-const
    let newCropsBoard= Array(3).fill(null);
    // eslint-disable-next-line array-callback-return
    newCropsBoard.map((crop,index) => {
      newCropsBoard[index] = CROPS[Math.floor(Math.random()*2)]
    });
    setCropsBoardState(newCropsBoard);
  }

  const handleStartMatch = () => {
    if(currentRoundValue < 16){
      setCurrentRoundState(round => round +1); 
      refillBoard();
      setTableIsActiveValue(true)};
  };
  
  

  return (
    <div className="crops px-5 py-5 rounded-lg">
      <div className="crops-table bg-cover grid grid-rows-4 gap-2 px-5 py-5  justify-items-center">
        <CropCard titleCard="Start the Game" descCard="Click here!" imgCard="https://www.jardineriaon.com/wp-content/uploads/2017/01/Agave_potatorum_var._verschaffelti-1024x768.jpg" isActive onClick={handleStartMatch}/>
        {cropsBoardValue.map((crop) => (
          <CropCard titleCard={crop.title} descCard={crop.subtitle} imgCard={crop.image} isActive={tableIsActiveValue} onClick={handleStartMatch}/>
        ))}
      </div>
    </div>
  )
}
