import React from 'react';
import CropCard from './CropCard';

export default function CropsTable(){
  return (
    <div className="crops px-5 py-5 rounded-lg">
      <div className="crops-table bg-cover grid grid-rows-4 gap-2 px-5 py-5 justify-items-center">
        <CropCard/>
        <CropCard/>
        <CropCard/>
        <div className="crop-card">
          <button className="w-full h-full" type="button">
            <div className="flex bg-cover p-4 bg-white rounded-xl h-full crop-card-interior text-white">
              <img alt="bean" className="h-16 w-16 rounded-full mx-auto mr-4" src="https://static.producer.com/wp-content/uploads/2017/02/08-pinto-blackbeans.jpg" />
              <div className="text-left">
                <h3 className="text-md">
                  Beans / Frijol / Etl
                </h3>
                <div className="text-sm">Harvest: from round 1 to round 6</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}