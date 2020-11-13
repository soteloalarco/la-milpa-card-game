import React from 'react';

export default function CropCard(){
  return (
    <div className="crop-card">
      <button className="w-full h-full" type="button">
        <div className="flex bg-cover p-4 bg-white rounded-xl h-full crop-card-interior">
          <img alt="corm" className="h-16 w-16 rounded-full mx-0" src="https://cdn-3.expansion.mx/dims4/default/7d1e4df/2147483647/strip/true/crop/5616x3744+0+0/resize/800x533!/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2F76%2Ffa%2Fdce19d2f4136ad3f8c5636819170%2Fshutterstock-282467993.jpg" />
        </div>
      </button>
    </div>
  )
}
