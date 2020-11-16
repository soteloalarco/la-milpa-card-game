/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useRecoilValue , useRecoilState, useRecoilCallback} from "recoil";
import CropCard from './CropCard';
import {cropsBoardState, currentRoundState} from "../../../features/todos/atoms";

export default function CropsTable(props){
  const cropsBoardValue = useRecoilValue(cropsBoardState);
  const [currentRoundValue,setCurrentRoundState] = useRecoilState(currentRoundState)

  const incrementRound = () => {setCurrentRoundState(round => round +1);console.log(currentRoundValue)};
  
  

  return (
    <div className="crops px-5 py-5 rounded-lg">
      <div className="crops-table bg-cover grid grid-rows-4 gap-2 px-5 py-5  justify-items-center">
        <CropCard titleCard="Start the Game" descCard="Click here!" imgCard="https://www.jardineriaon.com/wp-content/uploads/2017/01/Agave_potatorum_var._verschaffelti-1024x768.jpg" isActive onClick={incrementRound}/>
        {cropsBoardValue.map((crop) => (
          <CropCard titleCard={crop.title} descCard={crop.subtitle} imgCard={crop.image} isActive={!!props.isActive}/>
        ))}
      </div>
    </div>
  )
}

CropsTable.propTypes ={
  isActive : PropTypes.bool.isRequired,
};