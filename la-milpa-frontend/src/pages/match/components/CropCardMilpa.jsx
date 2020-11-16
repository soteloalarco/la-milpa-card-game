/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { useRecoilState} from "recoil";
import {milpaP1CropsState, milpaP2CropsState, detailsP1State, detailsP2State} from "../../../features/todos/atoms";

export default function CropCardMilpa(props){

  const ACTIVE_CLASS="w-12 h-12 text-lg";
  const INACTIVE_CLASS="w-12 h-12 text-lg cursor-not-allowed";

  const [milpaP1CropsValue, SetMilpaP1CropsState] = useRecoilState(milpaP1CropsState);
  const [milpaP2CropsValue, SetMilpaP2CropsState] = useRecoilState(milpaP2CropsState);
  const [detailsP1Value, setDetailsP1State] = useRecoilState(detailsP1State);
  const [detailsP2Value, setDetailsP2State] = useRecoilState(detailsP2State);

  // eslint-disable-next-line no-unused-vars
  const handleOnClick = () => {
    if(props.indexMilpaCrop/16<1){
      // eslint-disable-next-line prefer-const
      let newMilpa = milpaP1CropsValue.slice();
      newMilpa[props.indexMilpaCrop]= {
        key : detailsP1Value.key,
        icon : detailsP1Value.icon,
      };
      SetMilpaP1CropsState(newMilpa);
    } else{
      // eslint-disable-next-line prefer-const
      let newMilpa = milpaP2CropsValue.slice();
      newMilpa[props.indexMilpaCrop]= {
        key : detailsP2Value.key,
        icon : detailsP2Value.icon,
      }
      SetMilpaP2CropsState(newMilpa)
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
