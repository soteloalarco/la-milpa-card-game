/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {milpaP1CropsState, milpaP2CropsState, detailsP1State, detailsP2State, milpaP1State, milpaP2State, player2IsCropSelectedState, player1IsCropSelectedState, player1TurnState, player2TurnState, NOT_YOUR_TURN, YOUR_TURN, player2CropSelectedState, player1CropSelectedState, currentRoundState, cropsBoardState, CORN_CARD, BEANS_CARD, TOMATO_CARD, CHILLI_CARD,milpaP2Score, milpaP1Score, indexCropSelectedState, milpaP1ScoreEnd, milpaP2ScoreEnd} from "../../../features/todos/atoms";
import computeNewScore from "../../../features/todos/scoring"

export default function CropCardMilpa(props){

  const ACTIVE_CLASS="w-12 h-12 text-lg";
  const INACTIVE_CLASS="w-12 h-12 text-lg cursor-not-allowed";
  const CROPS=[CORN_CARD, BEANS_CARD, TOMATO_CARD, CHILLI_CARD];
  const [milpaP1CropsValue, SetMilpaP1CropsState] = useRecoilState(milpaP1CropsState);
  const [milpaP2CropsValue, SetMilpaP2CropsState] = useRecoilState(milpaP2CropsState);
  const [milpaP1Value, SetMilpaP1State] = useRecoilState(milpaP1State);
  const [milpaP2Value, SetMilpaP2State] = useRecoilState(milpaP2State);
  const [detailsP1Value, setDetailsP1State] = useRecoilState(detailsP1State);
  const [detailsP2Value, setDetailsP2State] = useRecoilState(detailsP2State);
  const [player1TurnValue, setPlayer1TurnState] = useRecoilState(player1TurnState);
  const [player2TurnValue, setPlayer2TurnState] = useRecoilState(player2TurnState);
  const setPlayer1IsCropsSelectedState = useSetRecoilState(player1IsCropSelectedState);
  const setPlayer2IsCropsSelectedState = useSetRecoilState(player2IsCropSelectedState);
  const [player1CropSelectedValue ,setPlayer1CropSelectedState] = useRecoilState(player1CropSelectedState);
  const [player2CropSelectedValue ,setPlayer2CropSelectedState] = useRecoilState(player2CropSelectedState);
  const setPlayer1IsCropSelectedState = useSetRecoilState(player1IsCropSelectedState);
  const setPlayer2IsCropSelectedState = useSetRecoilState(player2IsCropSelectedState);
  const [currentRoundValue, setCurrentRoundState] = useRecoilState(currentRoundState);
  const [cropsBoardValue, setCropsBoardState] = useRecoilState(cropsBoardState);
  const [milpaP1ScoreValue, setMilpaP1ScoreState] = useRecoilState(milpaP1Score);
  const [milpaP2ScoreValue, setMilpaP2ScoreState] = useRecoilState(milpaP2Score);
  const [milpaP1ScoreEndValue, setMilpaP1ScoreEndState] = useRecoilState(milpaP1ScoreEnd);
  const [milpaP2ScoreEndValue, setMilpaP2ScoreEndState] = useRecoilState(milpaP2ScoreEnd);
  const indexCropSelectedValue = useRecoilValue(indexCropSelectedState);

  const refillCropsTable= ()=> {
    // eslint-disable-next-line prefer-const
    let newCropsBoard= Array(3).fill(null);
    // eslint-disable-next-line array-callback-return
    newCropsBoard.map((crop,index) => {
      newCropsBoard[index] = CROPS[Math.floor(Math.random()*4)]
    });
    setCropsBoardState(newCropsBoard);
  }

  const removedCardfromBoard= (indexSelected,oldCropsBoard)=> {
    // eslint-disable-next-line prefer-const
    let newCropsBoard= [];
    // eslint-disable-next-line array-callback-return
    oldCropsBoard.map((crop,index) => {
      if(index!==indexSelected){
        newCropsBoard.push(crop);
      }     
    });
    return newCropsBoard
  }


  const nextRound = (turnPlayer1, turnPlayer2) => {
      if(currentRoundValue < 16 && currentRoundValue%2 ===0 && turnPlayer1 ){
        setDetailsP1State(YOUR_TURN);
        setPlayer1CropSelectedState({});
        setPlayer1IsCropSelectedState(false);
        setDetailsP2State(NOT_YOUR_TURN);
        setPlayer2CropSelectedState({});
        setPlayer2IsCropSelectedState(false);
        setCurrentRoundState(round => round +1); 
        setPlayer1TurnState(true);
        setPlayer2TurnState(false);
        refillCropsTable();
      }
      else if(currentRoundValue < 16 && currentRoundValue%2 ===1 && turnPlayer2){
        setDetailsP1State(NOT_YOUR_TURN);
        setPlayer1CropSelectedState({});
        setPlayer1IsCropSelectedState(false);
        setDetailsP2State(YOUR_TURN);
        setPlayer2CropSelectedState({});
        setPlayer2IsCropSelectedState(false);
        setCurrentRoundState(round => round +1); 
        setPlayer1TurnState(false);
        setPlayer2TurnState(true);
        refillCropsTable();}
      
  }

  // eslint-disable-next-line no-unused-vars
  const handleOnClick = () => {
    if(props.indexMilpaCrop/16<1){
      // eslint-disable-next-line prefer-const
      let newMilpaCrops = milpaP1CropsValue.slice();
      newMilpaCrops[props.indexMilpaCrop]= {
        key : detailsP1Value.key,
        icon : detailsP1Value.icon,
      };
      // eslint-disable-next-line prefer-const
      let newMilpa = milpaP1Value.slice();
      newMilpa[props.indexMilpaCrop] = false;

      const lastScore = milpaP1ScoreValue;
      const lastScoreEnd = milpaP1ScoreEndValue;
      const [newScore,newScoreEnd] = computeNewScore({
        key : detailsP1Value.key,
        icon : detailsP1Value.icon,
      },newMilpaCrops,lastScore,lastScoreEnd , currentRoundValue);
      setMilpaP1ScoreState(newScore);
      setMilpaP1ScoreEndState(newScoreEnd);

      SetMilpaP1State(newMilpa);
      SetMilpaP1CropsState(newMilpaCrops);
      setPlayer1TurnState(false);
      setPlayer2TurnState(true);
      setDetailsP1State(NOT_YOUR_TURN);
      setDetailsP2State(YOUR_TURN);
      const newBoard = removedCardfromBoard(indexCropSelectedValue,cropsBoardValue);
      setCropsBoardState(newBoard);
      nextRound(player1TurnValue,player2TurnValue);
    } else{
      // eslint-disable-next-line prefer-const
      let newMilpaCrops = milpaP2CropsValue.slice();
      newMilpaCrops[props.indexMilpaCrop%16]= {
        key : detailsP2Value.key,
        icon : detailsP2Value.icon,
      }
      // eslint-disable-next-line prefer-const
      let newMilpa = milpaP2Value.slice();
      newMilpa[props.indexMilpaCrop%16] = false;

      const lastScore = milpaP2ScoreValue;
      const lastScoreEnd = milpaP2ScoreEndValue;
      const [newScore,newScoreEnd] = computeNewScore({
        key : detailsP2Value.key,
        icon : detailsP2Value.icon,
      },newMilpaCrops,lastScore, lastScoreEnd , currentRoundValue);
      setMilpaP2ScoreState(newScore);
      setMilpaP2ScoreEndState(newScoreEnd);

      SetMilpaP2State(newMilpa);
      SetMilpaP2CropsState(newMilpaCrops)
      setPlayer1TurnState(true);
      setPlayer2TurnState(false);
      setDetailsP1State(YOUR_TURN);
      setDetailsP2State(NOT_YOUR_TURN);
      const newBoard = removedCardfromBoard(indexCropSelectedValue,cropsBoardValue);
      setCropsBoardState(newBoard);
      nextRound(player1TurnValue,player2TurnValue);
    }
   
  }

  return (
    <div className="parcela md:w-16 md:h-16"><button type="button" className={props.isActive ? ACTIVE_CLASS : INACTIVE_CLASS} onClick={handleOnClick} disabled={!props.isActive}>{props.displayCrop.icon}</button></div>
  )
}

CropCardMilpa.propTypes ={
  isActive : PropTypes.bool.isRequired,
  indexMilpaCrop: PropTypes.number.isRequired,
  displayCrop: PropTypes.shape({
    key: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
};
