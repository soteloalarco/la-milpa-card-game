/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useRecoilValue} from "recoil";
import CropCard from './CropCard';
import CropCardStart from './CropCardStart';
import {cropsBoardState, roundCardState} from "../../../features/todos/atoms";

export default function CropsTable(props){

  const cropsBoardValue = useRecoilValue(cropsBoardState);
  const roundCardValue = useRecoilValue(roundCardState);

  return (
    <div className="crops px-5 py-5 rounded-lg">
      <div className="crops-table bg-cover bg-center grid grid-rows-4 gap-2 px-5 py-5  justify-items-center">
        <CropCardStart titleCard={roundCardValue.title} descCard={roundCardValue.subtitle} imgCard={roundCardValue.image} isActive isDisabled={props.startDisabled} onClick={props.handleStartMatch}/>
        {cropsBoardValue.map((crop,index) => (
          <CropCard key={index} cropCard={crop} cardIndex={index} isActive={props.tableIsActive}/>
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