/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from 'react';
import PropTypes, { bool } from 'prop-types';
import { useRecoilValue , useRecoilState, useRecoilCallback} from "recoil";
import CropCard from './CropCard';
import CropCardStart from './CropCardStart';
import {cropsBoardState, currentRoundState, CORN_CARD, BEANS_CARD, detailsP1State, detailsP2State, player1TurnState, player2TurnState, player1CropSelectedState, player2CropSelectedState, roundCardState} from "../../../features/todos/atoms";

export default function CropsTable(props){

  const CROPS=[CORN_CARD, BEANS_CARD]
  const [cropsBoardValue, setCropsBoardState] = useRecoilState(cropsBoardState);
  const [detailsP1Value, setDetailsP1State] = useRecoilState(detailsP1State);
  const [detailsP2Value, setDetailsP2State] = useRecoilState(detailsP2State);
  const player1TurnValue = useRecoilValue(player1TurnState);
  const player2TurnValue = useRecoilValue(player2TurnState);
  const player1CropSelectedValue = useRecoilValue(player1CropSelectedState);
  const player2CropSelectedValue = useRecoilValue(player2CropSelectedState);
  const [currentRoundValue,setCurrentRoundState] = useRecoilState(currentRoundState);
  const [tableIsActiveValue, setTableIsActiveValue] = useState(false);
  const roundCardValue = useRecoilValue(roundCardState);


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
      <div className="crops-table bg-cover bg-center grid grid-rows-4 gap-2 px-5 py-5  justify-items-center">
        <CropCardStart titleCard={roundCardValue.title} descCard={roundCardValue.subtitle} imgCard={roundCardValue.image} isActive isDisabled={props.startDisabled} onClick={props.handleStartMatch}/>
        {cropsBoardValue.map((crop,index) => (
          <CropCard cropCard={crop} cardIndex={index} isActive={props.tableIsActive}/>
        ))}
      </div>
    </div>
  )
}

CropsTable.propTypes= {
  handleStartMatch : PropTypes.func.isRequired,
  tableIsActive: PropTypes.bool.isRequired,
  startDisabled: PropTypes.bool.isRequired,
}