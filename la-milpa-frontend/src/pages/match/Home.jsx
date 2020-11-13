import React from "react";
import MatchHead from "./components/MatchHead"
import MilpaBoard from "./components/MilpaBoard"

export default function Home() {

    return (
        <div className="App">
            <header className="App-header">
                <MatchHead/>
            </header>
            <div className="container">
                <div className="flex flex-row">
                    <MilpaBoard/>
                    <MilpaBoard/>
                </div>
            </div>
            
        </div>
    );
}
