import React from 'react';
import CropCard from './CropCard';

export default function CropsTable(){
  return (
    <div className="crops px-5 py-5 rounded-lg">
      <div className="crops-table bg-cover grid grid-rows-5 gap-2 px-5 py-5 justify-items-center">
        <CropCard/>
        <CropCard/>
        <CropCard/>
        <CropCard/>
        <CropCard/>
      </div>
    </div>
  )
}