/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

export default function DetailsCard(props){

  return (
    <div className="details-card h-full">
        <div className="flex bg-contain p-4 rounded-xl h-full w-full detail-card-interior text-white">
          <img alt={props.key} className="h-20 w-20 object-contain rounded-lg mx-0 mr-4" src={props.detailsCard.image} />
          <div className="text-left">
            <h3 className="text-md ">
              {props.detailsCard.title}
            </h3>
            <hr/>
            <div className="text-sm ">{props.detailsCard.subtitle}</div>
            <hr/>
            <p className="text-sm ">{props.detailsCard.rules}</p>
          </div>
        </div>
    </div>
  )
}

DetailsCard.propTypes ={
  detailsCard : PropTypes.shape({
    key: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    rules: PropTypes.string,
    icon: PropTypes.string
  }).isRequired
};
