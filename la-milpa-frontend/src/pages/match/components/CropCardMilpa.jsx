/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

export default function CropCardMilpa(props){

  const ACTIVE_CLASS="w-12 h-12 text-lg";
  const INACTIVE_CLASS="w-12 h-12 text-lg cursor-not-allowed";

  return (
    <div className="parcela md:w-16 md:h-16"><button type="button" className={props.isActive ? ACTIVE_CLASS : INACTIVE_CLASS} disabled={!props.isActive}>🌽</button></div>
  )
}

CropCardMilpa.propTypes ={
  isActive : PropTypes.bool.isRequired,
};
