/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

export default function RoundCounter(props){
  return (
    props.currentRound === props.indexName ?
    <div className="flex-auto bg-green-500 rounded-lg p-1 m-1">{props.indexName +1} - {props.roundName}</div>
    : <div className="flex-auto bg-gray-400 rounded-lg p-1 m-1">{props.indexName +1} - {props.roundName}</div>
  )
}

RoundCounter.propTypes ={
  roundName : PropTypes.string.isRequired,
  indexName : PropTypes.number.isRequired,
  currentRound : PropTypes.number.isRequired,
};
