/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import MatchHead from "./components/MatchHead"
import MilpaBoard from "./components/MilpaBoard"
import CropsTable from "./components/CropsTable"
import DetailsCard from "./components/DetailsCard"
import RoundCounter from "./components/RoundCounter"

import {detailsP1State,detailsP2State, ROUND_NAMES, currentRoundState, cropsBoardState, CORN_CARD, BEANS_CARD, TOMATO_CARD, TOMATILLO_CARD, CHILLI_CARD, player1TurnState, player2TurnState, player1CropSelectedState, player2CropSelectedState, player1IsCropSelectedState, player2IsCropSelectedState, YOUR_TURN, NOT_YOUR_TURN, milpaP1CropsState, milpaP2CropsState, roundCardState, CARD_NEXTROUNS, milpaP1Score, milpaP2Score, deckState} from "../../features/todos/atoms";
import { milpaP1IsActiveState, milpaP2IsActiveState, milpaP1ScoreState, milpaP2ScoreState } from "../../features/todos/selectors";


const yourTurnCard = {
    title : "It's your turn !",
    subtitle : "Pick a card to see its details.",
    image: "https://thumbs.dreamstime.com/b/keep-going-go-ahead-motivational-traffic-sign-start-ride-140804506.jpg",
    rules: "Then select an empty space in your Milpa"
  
}

function Home() {
    const [detailsP1Value, setDetailsP1State] = useRecoilState(detailsP1State);
    const [detailsP2Value, setDetailsP2State] = useRecoilState(detailsP2State);
    const [currentRoundValue, setCurrentRoundState] = useRecoilState(currentRoundState);
    const milpaP1IsActive = useRecoilValue(milpaP1IsActiveState);
    const milpaP2IsActive = useRecoilValue(milpaP2IsActiveState);
    const milpaP1ScoreValue = useRecoilValue(milpaP1Score);
    const milpaP2ScoreValue = useRecoilValue(milpaP2Score);
    const milpaP1CropsValue = useRecoilValue(milpaP1CropsState);
    const milpaP2CropsValue= useRecoilValue(milpaP2CropsState);
    const [cropsBoardValue, setCropsBoardState] = useRecoilState(cropsBoardState);
    const [tableIsActiveValue, setTableIsActiveValue] = useState(false);
    const [startIsActiveValue, setStartIsActiveValue] = useState(true);
    const [player1CropSelectedValue ,setPlayer1CropSelectedState] = useRecoilState(player1CropSelectedState);
    const [player2CropSelectedValue ,setPlayer2CropSelectedState] = useRecoilState(player2CropSelectedState);
    const setPlayer1IsCropSelectedState = useSetRecoilState(player1IsCropSelectedState);
    const setPlayer2IsCropSelectedState = useSetRecoilState(player2IsCropSelectedState);
    const setRoundCardState= useSetRecoilState(roundCardState);
    const setDeckState= useSetRecoilState(deckState);

    const shuffle= (array) =>{
        for (let i = array.length - 1; i > 0; i--) {
          // eslint-disable-next-line prefer-const
          let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      
          // swap elements array[i] and array[j]
          // same can be written as:
          // let t = array[i]; array[i] = array[j]; array[j] = t
          // eslint-disable-next-line no-param-reassign
          [array[i], array[j]] = [array[j], array[i]];
        }
      }

    const shuffleAndRefillCropsTable= ()=> {
        let deck= Array(50).fill(null);
        deck.fill(CORN_CARD,0,17);
        deck.fill(BEANS_CARD, 17, 27);
        deck.fill(TOMATO_CARD, 27, 36);
        deck.fill(CHILLI_CARD, 36, 43);
        deck.fill(TOMATILLO_CARD, 43, 50);
        shuffle(deck);

        let newCropsBoard= Array(3).fill(null);
        // eslint-disable-next-line array-callback-return
        newCropsBoard.map((crop,index) => {
          newCropsBoard[index] = deck.pop();
          
        });
        setDeckState(deck);
        setCropsBoardState(newCropsBoard);
      }
    

    const handleStartMatch = () => {

        setDetailsP1State(YOUR_TURN);
        setPlayer1CropSelectedState({});
        setPlayer1IsCropSelectedState(false);
        setDetailsP2State(NOT_YOUR_TURN);
        setPlayer2CropSelectedState({});
        setPlayer2IsCropSelectedState(false);
        setCurrentRoundState(round => round +1); 
        shuffleAndRefillCropsTable();
        setTableIsActiveValue(true);
        setStartIsActiveValue(false);
        setRoundCardState(CARD_NEXTROUNS);
        
    };

    return (
        <div className="App">
            <header className="App-header">
                <MatchHead/>
            </header>
            <div className="match bg-center lg:container lg:mx-auto main-board py-2 my-2">
                <div className="flex flex-wrap flex-row justify-evenly items-center px-2">
                    {ROUND_NAMES.map((roundName) => (
                        <RoundCounter key={roundName} roundName={roundName} indexName={ROUND_NAMES.indexOf(roundName)} currentRound={currentRoundValue}/>
                    ))}
                    
                </div>
                <div className="flex flex-wrap flex-row justify-evenly items-center">
                    <div className="flex flex-wrap flex-col justify-evenly items-center">
                        <div className="flex-none w-parcela w-full h-32 py-1">
                            <DetailsCard detailsCard={detailsP1Value} />
                        </div>
                        <div className="flex-none w-full">
                            <div className="bg-gray-400 rounded-md"> La Milpa de Player 1</div>
                        </div>
                        <div className="flex-none shadow-2xl"><MilpaBoard milpaIsActive={milpaP1IsActive} playerNumber={0} milpaCropsValue={milpaP1CropsValue}/></div>
                        <div className="flex-none w-full">
                            <div className="bg-gray-400 rounded-md"> Puntaje : {milpaP1ScoreValue} cacao 🍫</div>
                        </div>
                    </div> 
                    <div className="flex-none shadow-2xl"><CropsTable startDisabled={!startIsActiveValue} handleStartMatch={handleStartMatch} tableIsActive={tableIsActiveValue}/></div>
                    <div className="flex flex-wrap flex-col justify-evenly items-center">
                        <div className="flex-none w-full w-parcela h-32 py-1">
                            <DetailsCard detailsCard={detailsP2Value}/>
                        </div>
                        <div className="flex-none w-full">
                            <div className="bg-gray-400 rounded-md"> La Milpa de Player 2</div>
                        </div>
                        <div className="flex-none shadow-2xl"><MilpaBoard milpaIsActive={milpaP2IsActive} playerNumber={1} milpaCropsValue={milpaP2CropsValue}/></div>
                        <div className="flex-none w-full">
                            <div className="bg-gray-400 rounded-md"> Puntaje : {milpaP2ScoreValue} Cacao 🍫</div>
                        </div>
                    </div>  
                </div>
            </div>
            
        </div>
    );
}

export default Home;
