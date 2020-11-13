import React from "react";
import MatchHead from "./components/MatchHead"
import MilpaBoard from "./components/MilpaBoard"
import CropsTable from "./components/CropsTable"

export default function Home() {

    return (
        <div className="App">
            <header className="App-header">
                <MatchHead/>
            </header>
            <div className="lg:container lg:mx-auto main-board py-5">
                <div className="flex flex-wrap flex-row justify-evenly items-center">
                    <div className="flex flex-wrap flex-col justify-evenly items-center">
                        <div className="flex-none py-5 w-full">
                            <div className="bg-gradient-to-r from-green-700 via-green-400 to-green-100 rounded-md"> La Milpa de Rolando</div>
                        </div>
                        <div className="flex-none"><MilpaBoard/></div>
                    </div> 
                    <div className="flex-none"><CropsTable/></div>
                    <div className="flex flex-wrap flex-col justify-evenly items-center">
                        <div className="flex-none py-5 w-full">
                            <div className="bg-gradient-to-r from-green-700 via-green-400 to-green-100 rounded-md"> La Milpa de Gabriela</div>
                        </div>
                        <div className="flex-none"><MilpaBoard/></div>
                    </div>  
                </div>
            </div>
            
        </div>
    );
}
