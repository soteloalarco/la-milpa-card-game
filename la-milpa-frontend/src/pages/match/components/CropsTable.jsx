import React from 'react';
import { useRecoilValue } from "recoil";
import CropCard from './CropCard';


import {cropsBoardState} from "../../../features/todos/atoms";

export default function CropsTable(){
  const cropsBoard = useRecoilValue(cropsBoardState);

  return (
    <div className="crops px-5 py-5 rounded-lg">
      <div className="crops-table bg-cover grid grid-rows-4 gap-2 px-5 py-5  justify-items-center">
        {cropsBoard.map((crop) => (
          <CropCard titleCard={crop.title} descCard={crop.subtitle} imgCard={crop.image} />
        ))}
      </div>
    </div>
  )
}