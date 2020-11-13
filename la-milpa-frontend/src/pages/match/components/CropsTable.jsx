import React from 'react';

export default function CropsTable(){
  return (
    <div className="crops px-5 py-5 rounded-lg">
      <div className="crops-table bg-cover grid grid-rows-4 gap-2 px-5 py-5 justify-items-center">
        <div className="crop-card"><button type="button" className="w-48 h-12">1</button></div>
        <div className="crop-card"><button type="button" className="w-48 h-12">2</button></div>
        <div className="crop-card"><button type="button" className="w-48 h-12">3</button></div>
        <div className="crop-card"><button type="button" className="w-48 h-12">4</button></div>
        <div className="crop-card"><button type="button" className="w-48 h-12">5</button></div>
      </div>
    </div>
  )
}