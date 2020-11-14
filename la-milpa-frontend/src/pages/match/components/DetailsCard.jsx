/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

export default function DetailsCard(props){

  return (
    <div className="details-card h-full ">
        <div className="flex bg-cover p-4 bg-white rounded-xl h-full w-full detail-card-interior text-white">
          <img alt="corn" className="h-16 w-16 rounded-full mx-0 mr-4" src={props.imgDetail} />
          <div className="text-left">
            <h3 className="text-md">
              {props.titleDetail}
            </h3>
            <hr/>
            <div className="text-sm">{props.descDetail}</div>
            <hr/>
            <p className="text-sm">{props.rulesDetail}</p>
          </div>
        </div>
    </div>
  )
}

DetailsCard.propTypes ={
  titleDetail : PropTypes.string.isRequired,
  descDetail : PropTypes.string.isRequired,
  imgDetail : PropTypes.string.isRequired,
  rulesDetail : PropTypes.string.isRequired,
};
