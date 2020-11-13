import React from "react";
import MatchHead from "./components/MatchHead"
import MilpaBoard from "./components/MilpaBoard"
import CropsTable from "./components/CropsTable"
import DetailsCard from "./components/DetailsCard"
import RoundCounter from "./components/RoundCounter"

export default function Home() {

    return (
        <div className="App">
            <header className="App-header">
                <MatchHead/>
            </header>
            <div className="match bg-center lg:container lg:mx-auto main-board py-2 my-2">
                <div className="flex flex-wrap flex-row justify-evenly items-center px-2">
                    <RoundCounter/>
                    <div className="flex-auto bg-gray-400 rounded-lg p-1 m-1">2 - Tlacaxipe-hualiztli</div>
                    <div className="flex-auto bg-gray-400 rounded-lg p-1 m-1">3 - Tozoztontli</div>
                    <div className="flex-auto bg-gray-400 rounded-lg p-1 m-1">4 - Huey tozoztli</div>
                    <div className="flex-auto bg-gray-400 rounded-lg p-1 m-1">5 - Tóxcatl</div>
                    <div className="flex-auto bg-gray-400 rounded-lg p-1 m-1">6 - Etzalcualiztli</div>
                    <div className="flex-auto bg-gray-400 rounded-lg p-1 m-1">7 - Tecuilhuitontli</div>
                    <div className="flex-auto bg-gray-400 rounded-lg p-1 m-1">8 - Huey tecuílhuitl</div>
                    <div className="flex-auto bg-gray-400 rounded-lg p-1 m-1">9 - Tlaxochimaco-miccailhuitontli</div>
                    <div className="flex-auto bg-gray-400 rounded-lg p-1 m-1">10 - Xocotlhuetzi-huey</div>
                    <div className="flex-auto bg-gray-400 rounded-lg p-1 m-1">11 - Ochpaniztli</div>
                    <div className="flex-auto bg-gray-400 rounded-lg p-1 m-1">12 - Teotleco</div>
                    <div className="flex-auto bg-gray-400 rounded-lg p-1 m-1">13 - Tepeilhuitl</div>
                    <div className="flex-auto bg-gray-400 rounded-lg p-1 m-1">14 - Quecholli</div>
                    <div className="flex-auto bg-gray-400 rounded-lg p-1 m-1">15 - Panque-tzaliztli</div>
                    <div className="flex-auto bg-gray-400 rounded-lg p-1 m-1">16 - Atemoztli</div>    
                </div>
                <div className="flex flex-wrap flex-row justify-evenly items-center">
                    <div className="flex flex-wrap flex-col justify-evenly items-center">
                        <div className="flex-none w-parcela h-32 py-1">
                            <DetailsCard/>
                        </div>
                        <div className="flex-none w-full">
                            <div className="bg-gray-400 rounded-md"> La Milpa de Rolando</div>
                        </div>
                        <div className="flex-none shadow-2xl"><MilpaBoard/></div>
                        <div className="flex-none w-full">
                            <div className="bg-gray-400 rounded-md"> Puntaje : XXX cacao</div>
                        </div>
                    </div> 
                    <div className="flex-none shadow-2xl"><CropsTable/></div>
                    <div className="flex flex-wrap flex-col justify-evenly items-center">
                        <div className="flex-none w-parcela h-32 py-1">
                            <div className="details-card h-full ">
                                <div className="flex bg-cover p-4 bg-white rounded-xl h-full w-full detail-card-interior text-white">
                                <img alt="corn" className="h-16 w-16 rounded-full mx-0 mr-4" src="https://static.producer.com/wp-content/uploads/2017/02/08-pinto-blackbeans.jpg" />
                                <div className="text-left">
                                    <h3 className="text-md">
                                    Beans / Frijol / Etl
                                    </h3>
                                    <hr/>
                                    <div className="text-sm">Harvest: from round 1 until round 6</div>
                                    <p className="text-sm">+3🍫 per adjacent Corn at the end.</p>
                                </div>
                                </div>
                            </div>
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
