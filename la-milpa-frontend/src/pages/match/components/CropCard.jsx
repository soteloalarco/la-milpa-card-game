/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

export default function CropCard(props){
  const ACTIVE_CLASS="w-full h-full";
  const INACTIVE_CLASS="w-full h-full cursor-not-allowed";

  return (
    <div className="crop-card">
      <button className={props.isActive ? ACTIVE_CLASS : INACTIVE_CLASS} type="button" onClick={props.onClick}>
        <div className="flex bg-cover p-4 bg-white rounded-xl h-full crop-card-interior text-white">
          <img alt="corn" className="h-16 w-16 rounded-full mx-0 mr-4" src={props.imgCard} />
          <div className="text-left">
            <h3 className="text-md">
              {props.titleCard}
            </h3>
            <hr/>
            <div className="text-sm">{props.descCard}</div>
          </div>
        </div>
      </button>
    </div>
  )
}

CropCard.propTypes ={
  titleCard : PropTypes.string.isRequired,
  descCard : PropTypes.string.isRequired,
  imgCard : PropTypes.string.isRequired,
  isActive : PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
