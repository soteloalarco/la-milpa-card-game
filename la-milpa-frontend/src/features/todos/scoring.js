const computeNewScore = (newCrop, lastMilpa, lastScore) => {

  let newScore = lastScore;

  if(newCrop.key==="corn"){
    newScore ++;
  }

  return newScore;
}

export default computeNewScore;