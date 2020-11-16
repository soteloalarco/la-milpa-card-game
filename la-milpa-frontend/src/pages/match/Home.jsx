/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import MatchHead from "./components/MatchHead"
import MilpaBoard from "./components/MilpaBoard"
import CropsTable from "./components/CropsTable"
import DetailsCard from "./components/DetailsCard"
import RoundCounter from "./components/RoundCounter"

import {detailsP1State,detailsP2State, ROUND_NAMES, currentRoundState, cropsBoardState, CORN_CARD, BEANS_CARD, player1TurnState, player2TurnState, player1CropSelectedState, player2CropSelectedState, player1IsCropSelectedState, player2IsCropSelectedState, YOUR_TURN, NOT_YOUR_TURN, milpaP1CropsState, milpaP2CropsState} from "../../features/todos/atoms";
import { milpaP1IsActiveState, milpaP2IsActiveState } from "../../features/todos/selectors";


const yourTurnCard = {
    title : "It's your turn !",
    subtitle : "Pick a card to see its details.",
    image: "https://thumbs.dreamstime.com/b/keep-going-go-ahead-motivational-traffic-sign-start-ride-140804506.jpg",
    rules: "Then select an empty space in your Milpa"
  
}

function Home() {
    const CROPS=[CORN_CARD, BEANS_CARD]
    const [detailsP1Value, setDetailsP1State] = useRecoilState(detailsP1State);
    const [detailsP2Value, setDetailsP2State] = useRecoilState(detailsP2State);
    const [currentRoundValue, setCurrentRoundState] = useRecoilState(currentRoundState);
    const milpaP1IsActive = useRecoilValue(milpaP1IsActiveState);
    const milpaP2IsActive = useRecoilValue(milpaP2IsActiveState);
    const milpaP1CropsValue = useRecoilValue(milpaP1CropsState);
    const milpaP2CropsValue= useRecoilValue(milpaP2CropsState);
    const [cropsBoardValue, setCropsBoardState] = useRecoilState(cropsBoardState);
    const [tableIsActiveValue, setTableIsActiveValue] = useState(false);
    const player1TurnValue = useRecoilValue(player1TurnState);
    const player2TurnValue = useRecoilValue(player2TurnState);
    const [player1CropSelectedValue ,setPlayer1CropSelectedState] = useRecoilState(player1CropSelectedState);
    const [player2CropSelectedValue ,setPlayer2CropSelectedState] = useRecoilState(player2CropSelectedState);
    const setPlayer1IsCropSelectedState = useSetRecoilState(player1IsCropSelectedState);
    const setPlayer2IsCropSelectedState = useSetRecoilState(player2IsCropSelectedState);

    const refillCropsTable= ()=> {
        // eslint-disable-next-line prefer-const
        let newCropsBoard= Array(3).fill(null);
        // eslint-disable-next-line array-callback-return
        newCropsBoard.map((crop,index) => {
          newCropsBoard[index] = CROPS[Math.floor(Math.random()*2)]
        });
        setCropsBoardState(newCropsBoard);
      }
    

    const handleStartMatch = () => {
        if(currentRoundValue < 16 && currentRoundValue%2 ===0){
          setDetailsP1State(YOUR_TURN);
          setPlayer1CropSelectedState({});
          setPlayer1IsCropSelectedState(false);
          setDetailsP2State(NOT_YOUR_TURN);
          setPlayer2CropSelectedState({});
          setPlayer2IsCropSelectedState(false);
          setCurrentRoundState(round => round +1); 
          refillCropsTable();
          setTableIsActiveValue(true)}
        else if(currentRoundValue < 16 && currentRoundValue%2 ===1){
          setDetailsP1State(NOT_YOUR_TURN);
          setPlayer1CropSelectedState({});
          setPlayer1IsCropSelectedState(false);
          setDetailsP2State(YOUR_TURN);
          setPlayer2CropSelectedState({});
          setPlayer2IsCropSelectedState(false);
          setCurrentRoundState(round => round +1); 
          refillCropsTable();
          setTableIsActiveValue(true)}
        
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
                            <div className="bg-gray-400 rounded-md"> La Milpa de Rolando</div>
                        </div>
                        <div className="flex-none shadow-2xl"><MilpaBoard milpaIsActive={milpaP1IsActive} playerNumber={0} milpaCropsValue={milpaP1CropsValue}/></div>
                        <div className="flex-none w-full">
                            <div className="bg-gray-400 rounded-md"> Puntaje : XXX cacao</div>
                        </div>
                    </div> 
                    <div className="flex-none shadow-2xl"><CropsTable handleStartMatch={handleStartMatch} tableIsActive={tableIsActiveValue}/></div>
                    <div className="flex flex-wrap flex-col justify-evenly items-center">
                        <div className="flex-none w-full w-parcela h-32 py-1">
                            <DetailsCard detailsCard={detailsP2Value}/>
                        </div>
                        <div className="flex-none w-full">
                            <div className="bg-gray-400 rounded-md"> La Milpa de Gabriela</div>
                        </div>
                        <div className="flex-none shadow-2xl"><MilpaBoard milpaIsActive={milpaP2IsActive} playerNumber={1} milpaCropsValue={milpaP2CropsValue}/></div>
                        <div className="flex-none w-full">
                            <div className="bg-gray-400 rounded-md"> Puntaje : XXX cacao</div>
                        </div>
                    </div>  
                </div>
            </div>
            
        </div>
    );
}

export default Home;
