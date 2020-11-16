/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { useRecoilValue} from "recoil";
import {milpaP1CropsState, milpaP2CropsState} from "../../../features/todos/atoms";

export default function CropCardMilpa(props){

  const ACTIVE_CLASS="w-12 h-12 text-lg";
  const INACTIVE_CLASS="w-12 h-12 text-lg cursor-not-allowed";

  const milpaP1CropsValue = useRecoilValue(milpaP1CropsState);
  const milpaP2CropsValue = useRecoilValue(milpaP2CropsState);

  // eslint-disable-next-line no-unused-vars
  const displayIconCrop = () => {
    if (props.key/16 < 1){
      return milpaP1CropsValue[props.indexMilpaCrop]
    }
    
    return milpaP2CropsValue[props.indexMilpaCrop%16]
    
  }

  return (
    <div className="parcela md:w-16 md:h-16"><button type="button" className={props.isActive ? ACTIVE_CLASS : INACTIVE_CLASS} disabled={!props.isActive}>{props.displayCrop.icon}</button></div>
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
