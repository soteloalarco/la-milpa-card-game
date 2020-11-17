/* eslint-disable prefer-const */
// eslint-disable-next-line no-unused-vars

const COL0=[0,1,2,3];
const COL1=[4,5,6,7];
const COL2=[8,9,10,11];
const COL3=[12,13,14,15];
const ROW0=[0,4,8,12];
const ROW1=[1,5,9,13];
const ROW2=[2,6,10,14];
const ROW3=[3,7,11,15];

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
  if(currentRound=== 16){
    const scoreCol0 = newMilpa[COL0[0]].key==='corn' && newMilpa[COL0[1]].key==='corn' && newMilpa[COL0[2]].key==='corn' && newMilpa[COL0[3]].key==='corn' ? 10 : 0;
    const scoreCol1 = newMilpa[COL1[0]].key==='corn' && newMilpa[COL1[1]].key==='corn' && newMilpa[COL1[2]].key==='corn' && newMilpa[COL1[3]].key==='corn' ? 10 : 0;
    const scoreCol2 = newMilpa[COL2[0]].key==='corn' && newMilpa[COL2[1]].key==='corn' && newMilpa[COL2[2]].key==='corn' && newMilpa[COL2[3]].key==='corn' ? 10 : 0;
    const scoreCol3 = newMilpa[COL3[0]].key==='corn' && newMilpa[COL3[1]].key==='corn' && newMilpa[COL3[2]].key==='corn' && newMilpa[COL3[3]].key==='corn' ? 10 : 0;
    const scoreRow0 = newMilpa[ROW0[0]].key==='corn' && newMilpa[ROW0[1]].key==='corn' && newMilpa[ROW0[2]].key==='corn' && newMilpa[ROW0[3]].key==='corn' ? 10 : 0;
    const scoreRow1 = newMilpa[ROW1[0]].key==='corn' && newMilpa[ROW1[1]].key==='corn' && newMilpa[ROW1[2]].key==='corn' && newMilpa[ROW1[3]].key==='corn' ? 10 : 0;
    const scoreRow2 = newMilpa[ROW2[0]].key==='corn' && newMilpa[ROW2[1]].key==='corn' && newMilpa[ROW2[2]].key==='corn' && newMilpa[ROW2[3]].key==='corn' ? 10 : 0;
    const scoreRow3 = newMilpa[ROW3[0]].key==='corn' && newMilpa[ROW3[1]].key==='corn' && newMilpa[ROW3[2]].key==='corn' && newMilpa[ROW3[3]].key==='corn' ? 10 : 0;

    newScoreEnd+= scoreCol0 + scoreCol1 +scoreCol2 + scoreCol3 + scoreRow0 + scoreRow1 +scoreRow2 + scoreRow3;
  }
  return [newScore, newScoreEnd];
}

const scoreBeans = (newCrop,index, newMilpa, currentRound) => {
  let newScore = 0;
  let newScoreEnd = 0;
  if(currentRound <= 6){
    const totalBeans = newMilpa.filter(crop => crop.key==='beans').length;
    newScore += totalBeans;
  }
  if(newCrop.key ==='beans'){
    let scoreUp = 0;
    let scoreDown = 0;
    let scoreLeft = 0;
    let scoreRight = 0;
    if(index-4 >= 0){
      scoreUp = newMilpa[index-4].key === 'corn' ? 3 : 0;
    }
    if(index+4 <16){
      scoreDown = newMilpa[index+4].key === 'corn' ? 3 : 0;
    }
    if(index-1 >= 0){
      scoreLeft = newMilpa[index-1].key === 'corn' && (index - 1)%4 !== 3 ? 3 : 0;
    }
    if(index+1 <16){
      scoreRight = newMilpa[index+1].key === 'corn' && (index + 1)%4 !== 0 ? 3 : 0;
    }

    newScoreEnd += scoreUp + scoreDown + scoreLeft + scoreRight;
  }
  if(newCrop.key ==='corn'){
    let scoreUp = 0;
    let scoreDown = 0;
    let scoreLeft = 0;
    let scoreRight = 0;
    if(index-4 >= 0){
      scoreUp = newMilpa[index-4].key === 'beans' ? 3 : 0;
    }
    if(index+4 <16){
      scoreDown = newMilpa[index+4].key === 'beans' ? 3 : 0;
    }
    if(index-1 >= 0){
      scoreLeft = newMilpa[index-1].key === 'beans' && (index - 1)%4 !== 3 ? 3 : 0;
    }
    if(index+1 <16){
      scoreRight = newMilpa[index+1].key === 'beans' && (index + 1)%4 !== 0 ? 3 : 0;
    }

    newScoreEnd += scoreUp + scoreDown + scoreLeft + scoreRight;
  }
  return [newScore, newScoreEnd];
}

const scoreTomato = (newCrop, newMilpa, currentRound) => {
  let newScore = 0;
  let newScoreEnd = 0;

  const totalTomato = newMilpa.filter(crop => crop.key==='tomato').length;
  newScore += totalTomato;

  if(currentRound=== 16 ){
    if (totalTomato > 3){
      newScoreEnd += -15;
    }else{
      newScoreEnd += 5;
    }
  }

  return [newScore, newScoreEnd];
}

const computeNewScore = (newCrop, index, newMilpa, lastScore, lastScoreEnd,currentRound) => {

  let newScore = 0;
  let newScoreEnd = 0;

  const [newCorn, newCornEnd] = scoreCorn(newCrop,newMilpa,currentRound);
  const [newBeans, newBeansEnd] = scoreBeans(newCrop,index,newMilpa,currentRound);
  const [newTomato, newTomatoEnd] = scoreTomato(newCrop,newMilpa,currentRound);

  newScore += lastScore + newCorn + newBeans + newTomato;
  newScoreEnd += lastScoreEnd + newCornEnd + newBeansEnd + newTomatoEnd;

  if(currentRound === 16){
    newScore+=newScoreEnd;
    return [newScore , newScoreEnd];
  }
  return [newScore,newScoreEnd];
}

export default computeNewScore;