/* eslint-disable prefer-const */
// eslint-disable-next-line no-unused-vars
const scoreCorn = (newCrop, newMilpa, currentRound) => {
  let newScore = 0;
  let newScoreEnd = 0;
  if(currentRound === 13){
    const totalCorn = newMilpa.filter(crop => crop.key==='corn').length;
    newScore += totalCorn;
  }
  if(newCrop.key === 'corn'){
    newScore ++;
  }
  return [newScore, newScoreEnd];
}

const computeNewScore = (newCrop, newMilpa, lastScore, lastScoreEnd,currentRound) => {

  let newScore = 0;
  let newScoreEnd = 0;

  const [newCorn, newCornEnd] = scoreCorn(newCrop,newMilpa,currentRound);

  newScore = lastScore + newCorn;
  newScoreEnd = lastScoreEnd + newCornEnd;

  if(currentRound === 16){
    return [newScore + newScoreEnd , newScoreEnd];
  }
  return [newScore,newScoreEnd];
}

export default computeNewScore;