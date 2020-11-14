/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import MatchHead from "./components/MatchHead"
import MilpaBoard from "./components/MilpaBoard"
import CropsTable from "./components/CropsTable"
import DetailsCard from "./components/DetailsCard"
import RoundCounter from "./components/RoundCounter"

import {detailsP1State,detailsP2State, ROUND_NAMES, currentRoundState} from "../../features/todos/atoms";


const yourTurnCard = {
    title : "It's your turn !",
    subtitle : "Pick a card to see its details.",
    image: "https://thumbs.dreamstime.com/b/keep-going-go-ahead-motivational-traffic-sign-start-ride-140804506.jpg",
    rules: "Then select an empty space in your Milpa"
  
}

function Home() {
    
    const [detailsP1, setDetailsP1] = useRecoilState(detailsP1State);
    const [detailsP2, setDetailsP2] = useRecoilState(detailsP2State);
    const currentRound = useRecoilValue(currentRoundState);
    const [cropsBoardActive, setCropsBoardActive] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <MatchHead/>
            </header>
            <div className="match bg-center lg:container lg:mx-auto main-board py-2 my-2">
                <div className="flex flex-wrap flex-row justify-evenly items-center px-2">
                    {ROUND_NAMES.map((roundName) => (
                        <RoundCounter key={roundName} roundName={roundName} indexName={ROUND_NAMES.indexOf(roundName)} currentRound={currentRound}/>
                    ))}
                    
                </div>
                <div className="flex flex-wrap flex-row justify-evenly items-center">
                    <div className="flex flex-wrap flex-col justify-evenly items-center">
                        <div className="flex-none w-parcela w-full h-32 py-1">
                            <DetailsCard titleDetail={detailsP1.title} descDetail={detailsP1.subtitle} imgDetail={detailsP1.image} rulesDetail={detailsP1.rules} />
                        </div>
                        <div className="flex-none w-full">
                            <div className="bg-gray-400 rounded-md"> La Milpa de Rolando</div>
                        </div>
                        <div className="flex-none shadow-2xl"><MilpaBoard/></div>
                        <div className="flex-none w-full">
                            <div className="bg-gray-400 rounded-md"> Puntaje : XXX cacao</div>
                        </div>
                    </div> 
                    <div className="flex-none shadow-2xl"><CropsTable isActive={cropsBoardActive}/></div>
                    <div className="flex flex-wrap flex-col justify-evenly items-center">
                        <div className="flex-none w-full w-parcela h-32 py-1">
                            <DetailsCard titleDetail={detailsP2.title} descDetail={detailsP2.subtitle} imgDetail={detailsP2.image} rulesDetail={detailsP2.rules} />
                        </div>
                        <div className="flex-none w-full">
                            <div className="bg-gray-400 rounded-md"> La Milpa de Gabriela</div>
                        </div>
                        <div className="flex-none shadow-2xl"><MilpaBoard/></div>
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
