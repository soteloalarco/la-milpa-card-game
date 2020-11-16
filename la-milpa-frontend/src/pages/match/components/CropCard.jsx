/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import {useSetRecoilState, useRecoilValue} from "recoil";
import {player1TurnState, player2TurnState, player1CropSelectedState, player2CropSelectedState, player1IsCropSelectedState, player2IsCropSelectedState, detailsP1State, detailsP2State} from "../../../features/todos/atoms";


export default function CropCard(props){
  const ACTIVE_CLASS="w-full h-full";
  const INACTIVE_CLASS="w-full h-full cursor-not-allowed";
  const setPlayer1CropSelectedState = useSetRecoilState(player1CropSelectedState);
  const setPlayer2CropSelectedState = useSetRecoilState(player2CropSelectedState);
  const setPlayer1IsCropSelectedState = useSetRecoilState(player1IsCropSelectedState);
  const setPlayer2IsCropSelectedState = useSetRecoilState(player2IsCropSelectedState);
  const player1TurnValue = useRecoilValue(player1TurnState);
  const player2TurnValue = useRecoilValue(player2TurnState);
  const setDetailsP1State = useSetRecoilState(detailsP1State);
  const setDetailsP2State = useSetRecoilState(detailsP2State);

  // eslint-disable-next-line no-unused-vars
  const handleOnClick = () =>{

    if(player1TurnValue){
      setPlayer1CropSelectedState(props.cropCard);
      setPlayer1IsCropSelectedState(true);
      setDetailsP1State(props.cropCard);
    }else if(player2TurnValue){
      setPlayer2CropSelectedState(props.cropCard);
      setPlayer2IsCropSelectedState(true);
      setDetailsP2State(props.cropCard);
    }
  }

  return (
    <div className="crop-card">
      <button className={props.isActive ? ACTIVE_CLASS : INACTIVE_CLASS} type="button" disabled={!props.isActive} onClick={handleOnClick}>
        <div className="flex bg-cover p-4 bg-white rounded-xl h-full crop-card-interior text-white">
          <img alt="corn" className="h-16 w-16 rounded-full mx-0 mr-4" src={props.cropCard.image} />
          <div className="text-left">
            <h3 className="text-md">
              {props.cropCard.title}
            </h3>
            <hr/>
            <div className="text-sm">{props.cropCard.subtitle}</div>
          </div>
        </div>
      </button>
    </div>
  )
}


CropCard.propTypes ={
  cropCard : PropTypes.shape({
    key: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    rules: PropTypes.string,
  }).isRequired,
  isActive : PropTypes.bool.isRequired,
};  
