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
    const scoreCol0 = newMilpa[COL0[0]].key==='corn' && newMilpa[COL0[1]].key==='corn' && newMilpa[COL0[2]].key==='corn' && newMilpa[COL0[3]].key==='corn' ? 15 : 0;
    const scoreCol1 = newMilpa[COL1[0]].key==='corn' && newMilpa[COL1[1]].key==='corn' && newMilpa[COL1[2]].key==='corn' && newMilpa[COL1[3]].key==='corn' ? 15 : 0;
    const scoreCol2 = newMilpa[COL2[0]].key==='corn' && newMilpa[COL2[1]].key==='corn' && newMilpa[COL2[2]].key==='corn' && newMilpa[COL2[3]].key==='corn' ? 15 : 0;
    const scoreCol3 = newMilpa[COL3[0]].key==='corn' && newMilpa[COL3[1]].key==='corn' && newMilpa[COL3[2]].key==='corn' && newMilpa[COL3[3]].key==='corn' ? 15 : 0;
    const scoreRow0 = newMilpa[ROW0[0]].key==='corn' && newMilpa[ROW0[1]].key==='corn' && newMilpa[ROW0[2]].key==='corn' && newMilpa[ROW0[3]].key==='corn' ? 15 : 0;
    const scoreRow1 = newMilpa[ROW1[0]].key==='corn' && newMilpa[ROW1[1]].key==='corn' && newMilpa[ROW1[2]].key==='corn' && newMilpa[ROW1[3]].key==='corn' ? 15 : 0;
    const scoreRow2 = newMilpa[ROW2[0]].key==='corn' && newMilpa[ROW2[1]].key==='corn' && newMilpa[ROW2[2]].key==='corn' && newMilpa[ROW2[3]].key==='corn' ? 15 : 0;
    const scoreRow3 = newMilpa[ROW3[0]].key==='corn' && newMilpa[ROW3[1]].key==='corn' && newMilpa[ROW3[2]].key==='corn' && newMilpa[ROW3[3]].key==='corn' ? 15 : 0;

    newScoreEnd+= scoreCol0 + scoreCol1 +scoreCol2 + scoreCol3 + scoreRow0 + scoreRow1 +scoreRow2 + scoreRow3;
  }
  return [newScore, newScoreEnd];
}

const scoreBeans = (newCrop,index, newMilpa, currentRound) => {
  let newScore = 0;
  let newScoreEnd = 0;
  if(currentRound <= 4){
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
    }else if(totalTomato>0 && totalTomato < 4){
      newScoreEnd += 5;
    }
  }

  return [newScore, newScoreEnd];
}

const scoreChilli = (newCrop, newMilpa, currentRound) => {
  let newScore = 0;
  let newScoreEnd = 0;

  if(newCrop.key === 'chilli'){
    newScore += 3;
  }

  if(currentRound <= 8){
    const totalBeans = newMilpa.filter(crop => crop.key==='chilli').length;
    newScore += totalBeans;
    if(newCrop.key === 'chilli'){
      newScoreEnd += 3;
    }
  }

  return [newScore, newScoreEnd];
}

const scoreTomatillo = (newCrop, newMilpa, currentRound) => {
  let newScore = 0;
  let newScoreEnd = 0;

  let penalizationTop= (newMilpaAux,crop,index) => {
    return crop.key==='tomatillo'&& index-4 >= 0 ? newMilpaAux[index-4].key==='chilli' : false;
  }
  let penalizationDown= (newMilpaAux,crop,index) => {
   return crop.key==='tomatillo'&& index+4 < 16 ? newMilpaAux[index+4].key==='chilli' : false;
  }
  let penalizationLeft= (newMilpaAux,crop,index) => {
   return crop.key==='tomatillo'&& index-1 >= 0 ? newMilpaAux[index-1].key==='chilli' && (index - 1)%4 !== 3 : false;
 }
   let penalizationRight= (newMilpaAux,crop,index) => {
   return crop.key==='tomatillo'&& index+1 < 16 ? newMilpaAux[index+1].key==='chilli' && (index + 1)%4 !== 0 : false;
 }

  if(currentRound <= 8 && currentRound > 5){
    const totalTomatillo = newMilpa.filter(crop => crop.key==='tomatillo').length;
    newScore += totalTomatillo;
  }

  if(currentRound === 16){
    let penalization = false;
    const penalizationVector = newMilpa.map((crop,index) => 
        penalizationTop(newMilpa,crop,index) || penalizationDown(newMilpa,crop,index) ||penalizationLeft(newMilpa,crop,index) || penalizationRight(newMilpa,crop,index)
     )
    penalization = penalization || penalizationVector[0] || penalizationVector[1] || penalizationVector[2] || penalizationVector[3] || penalizationVector[4] || penalizationVector[5] || penalizationVector[6] || penalizationVector[7] || penalizationVector[8] || penalizationVector[9] || penalizationVector[10] || penalizationVector[11] || penalizationVector[12] || penalizationVector[13] || penalizationVector[14] || penalizationVector[15];

    if(penalization){
      newScoreEnd += -10;
    }
    else{
      const totalChilli = newMilpa.filter(crop => crop.key==='chilli').length;
      const totalTomatillo = newMilpa.filter(crop => crop.key==='tomatillo').length;
      newScoreEnd += totalChilli*totalTomatillo*5;
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
  const [newChilli, newChilliEnd] = scoreChilli(newCrop,newMilpa,currentRound);
  const [newTomatillo, newTomatilloEnd] = scoreTomatillo(newCrop,newMilpa,currentRound);

  newScore += lastScore + newCorn + newBeans + newTomato + newChilli +newTomatillo;
  newScoreEnd += lastScoreEnd + newCornEnd + newBeansEnd + newTomatoEnd + newChilliEnd +newTomatilloEnd;

  if(currentRound === 16){
    newScore+=newScoreEnd;
    return [newScore , newScoreEnd];
  }
  return [newScore,newScoreEnd];
}

export default computeNewScore;