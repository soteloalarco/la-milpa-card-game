/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import PropTypes, { bool, object } from 'prop-types';
import { useRecoilValue , useRecoilState, useRecoilCallback} from "recoil";
import CropCardMilpa from './CropCardMilpa';

import {milpaP1State, milpaP2State} from "../../../features/todos/atoms";

export default function MilpaBoard(props){

  return (
    <div className="milpa px-4 py-4 rounded-lg">
      <div className="milpa-interior bg-cover grid grid-cols-4 gap-2 px-5 py-5 justify-items-center">
        <CropCardMilpa displayCrop={props.milpaCropsValue[0]} indexMilpaCrop={props.playerNumber*16+0} isActive={props.milpaIsActive[0]}/>
        <CropCardMilpa displayCrop={props.milpaCropsValue[1]} indexMilpaCrop={props.playerNumber*16+1} isActive={props.milpaIsActive[1]}/>
        <CropCardMilpa displayCrop={props.milpaCropsValue[2]} indexMilpaCrop={props.playerNumber*16+2} isActive={props.milpaIsActive[2]}/>
        <CropCardMilpa displayCrop={props.milpaCropsValue[3]} indexMilpaCrop={props.playerNumber*16+3} isActive={props.milpaIsActive[3]}/>
        <CropCardMilpa displayCrop={props.milpaCropsValue[4]} indexMilpaCrop={props.playerNumber*16+4} isActive={props.milpaIsActive[4]}/>
        <CropCardMilpa displayCrop={props.milpaCropsValue[5]} indexMilpaCrop={props.playerNumber*16+5} isActive={props.milpaIsActive[5]}/>
        <CropCardMilpa displayCrop={props.milpaCropsValue[6]} indexMilpaCrop={props.playerNumber*16+6} isActive={props.milpaIsActive[6]}/>
        <CropCardMilpa displayCrop={props.milpaCropsValue[7]} indexMilpaCrop={props.playerNumber*16+7} isActive={props.milpaIsActive[7]}/>
        <CropCardMilpa displayCrop={props.milpaCropsValue[8]} indexMilpaCrop={props.playerNumber*16+8} isActive={props.milpaIsActive[8]}/>
        <CropCardMilpa displayCrop={props.milpaCropsValue[9]} indexMilpaCrop={props.playerNumber*16+9} isActive={props.milpaIsActive[9]}/>
        <CropCardMilpa displayCrop={props.milpaCropsValue[10]} indexMilpaCrop={props.playerNumber*16+10} isActive={props.milpaIsActive[10]}/>
        <CropCardMilpa displayCrop={props.milpaCropsValue[11]} indexMilpaCrop={props.playerNumber*16+11} isActive={props.milpaIsActive[11]}/>
        <CropCardMilpa displayCrop={props.milpaCropsValue[12]} indexMilpaCrop={props.playerNumber*16+12} isActive={props.milpaIsActive[12]}/>
        <CropCardMilpa displayCrop={props.milpaCropsValue[13]} indexMilpaCrop={props.playerNumber*16+13} isActive={props.milpaIsActive[13]}/>
        <CropCardMilpa displayCrop={props.milpaCropsValue[14]} indexMilpaCrop={props.playerNumber*16+14} isActive={props.milpaIsActive[14]}/>
        <CropCardMilpa displayCrop={props.milpaCropsValue[15]} indexMilpaCrop={props.playerNumber*16+15} isActive={props.milpaIsActive[15]}/>
      </div>
    </div>
  )
}

MilpaBoard.propTypes ={
  milpaIsActive : PropTypes.arrayOf(bool).isRequired,
  playerNumber : PropTypes.number.isRequired,
  milpaCropsValue: PropTypes.arrayOf(
    PropTypes.shape({
    key: PropTypes.string,
    icon: PropTypes.string,
  })).isRequired,
};
