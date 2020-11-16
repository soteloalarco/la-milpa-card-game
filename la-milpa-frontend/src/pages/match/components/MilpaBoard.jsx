/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import PropTypes, { bool } from 'prop-types';
import { useRecoilValue , useRecoilState, useRecoilCallback} from "recoil";
import CropCardMilpa from './CropCardMilpa';

import {milpaP1State, milpaP2State} from "../../../features/todos/atoms";

export default function MilpaBoard(props){

  return (
    <div className="milpa px-4 py-4 rounded-lg">
      <div className="milpa-interior bg-cover grid grid-cols-4 gap-2 px-5 py-5 justify-items-center">
        <CropCardMilpa isActive={props.milpaIsActive[0]}/>
        <CropCardMilpa isActive={props.milpaIsActive[0]}/>
        <CropCardMilpa isActive={props.milpaIsActive[0]}/>
        <CropCardMilpa isActive={props.milpaIsActive[0]}/>
        <CropCardMilpa isActive={props.milpaIsActive[0]}/>
        <CropCardMilpa isActive={props.milpaIsActive[0]}/>
        <CropCardMilpa isActive={props.milpaIsActive[0]}/>
        <CropCardMilpa isActive={props.milpaIsActive[0]}/>
        <CropCardMilpa isActive={props.milpaIsActive[0]}/>
        <CropCardMilpa isActive={props.milpaIsActive[0]}/>
        <CropCardMilpa isActive={props.milpaIsActive[0]}/>
        <CropCardMilpa isActive={props.milpaIsActive[0]}/>
        <CropCardMilpa isActive={props.milpaIsActive[0]}/>
        <CropCardMilpa isActive={props.milpaIsActive[0]}/>
        <CropCardMilpa isActive={props.milpaIsActive[0]}/>
        <CropCardMilpa isActive={props.milpaIsActive[0]}/>
      </div>
    </div>
  )
}

MilpaBoard.propTypes ={
  milpaIsActive : PropTypes.arrayOf(bool).isRequired,
};
