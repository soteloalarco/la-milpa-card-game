import React from 'react';

export default function DetailsCard(){
  return (
    <div className="details-card h-full ">
        <div className="flex bg-cover p-4 bg-white rounded-xl h-full w-full detail-card-interior text-white">
          <img alt="corn" className="h-16 w-16 rounded-full mx-0 mr-4" src="https://cdn-3.expansion.mx/dims4/default/7d1e4df/2147483647/strip/true/crop/5616x3744+0+0/resize/800x533!/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2F76%2Ffa%2Fdce19d2f4136ad3f8c5636819170%2Fshutterstock-282467993.jpg" />
          <div className="text-left">
            <h3 className="text-md">
              Corn / Maíz / Tlaolli
            </h3>
            <hr/>
            <div className="text-sm">Harvest: round 13 - Tepeíhuitl</div>
            <p className="text-sm">+1🍫 per turn, +5🍫 per completed row/column at the end.</p>
          </div>
        </div>
    </div>
  )
}
