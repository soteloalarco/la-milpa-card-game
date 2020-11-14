import { useSetRecoilState} from "recoil";

import {
  milpaP1State,
  milpaP2State,
  cropsBoardState,
  currentRoundState,
  detailsP1State,
  detailsP2State,
} from "../features/todos/atoms";

const cornCard = {
  title : "Corn / Maíz / Tlaolli",
  subtitle: "Harvest: round 13 - Tepeíhuitl",
  image : "https://cdn-3.expansion.mx/dims4/default/7d1e4df/2147483647/strip/true/crop/5616x3744+0+0/resize/800x533!/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2F76%2Ffa%2Fdce19d2f4136ad3f8c5636819170%2Fshutterstock-282467993.jpg",
  rules : "+1🍫 per round, +5🍫 per completed row/column at the end."
}

const cornDisplay = {
  image : "🌽",
}

const beansCard = {
  title : "Beans / Frijol / Etl",
  subtitle: "Harvest: from round 1 to round 6",
  image: "https://static.producer.com/wp-content/uploads/2017/02/08-pinto-blackbeans.jpg",
  rules: "+5🍫 per adjacent 🌽 at the end."
}

const beansDisplay = {
  image : "🌰",
}

const yourTurnCard = {
  title : "It's your turn !",
  subtitle : "Pick a card to see its details.",
  image: "https://thumbs.dreamstime.com/b/keep-going-go-ahead-motivational-traffic-sign-start-ride-140804506.jpg",
  rules: "Then select an empty space in your Milpa"

}

const notYourTurnCard = {
  title : "It's not your turn.",
  subtitle : "You can still see card details.",
  image: "https://www.seekpng.com/png/detail/303-3038493_prohibited-transaction-rules-part-i-wait-hand-sign.png",
  rules: "Plan your turn ahead."

}

export default function useTodoList() {

  const setMilpaP1 = useSetRecoilState(milpaP1State);
  const setMilpaP2 = useSetRecoilState(milpaP2State);
  const setCropsBoard = useSetRecoilState(cropsBoardState);
  const setRoundState = useSetRecoilState(currentRoundState);
  const setDetailsP1 = useSetRecoilState(detailsP1State);
  const setDetailsP2 = useSetRecoilState(detailsP2State);

  setDetailsP1(yourTurnCard);
  setDetailsP2(notYourTurnCard);
  setMilpaP1(Array(16).fill(cornDisplay));
  setMilpaP2(Array(16).fill(beansDisplay));
  setRoundState(1);
  setCropsBoard([cornCard,beansCard,cornCard,beansCard]);

  

  return null;
}