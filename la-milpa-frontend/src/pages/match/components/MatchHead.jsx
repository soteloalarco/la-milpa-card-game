import React, {useState} from 'react';
import Modal from 'react-modal';
import {CORN_CARD} from "../../../features/todos/atoms";



export default function MatchHead(){
  const [showRules, setShowRules] = useState(false);

  const handleClose = ()=>setShowRules(false);
  const handleShow = ()=> setShowRules(true)

  return (
    <div className="w-full milpa milpa-header">
      <div className="flex flex-wrap flex-row justify-around items-center">
        <img alt="la milpa logo" className="h-8 w-8 object-contain rounded-lg mx-2 mr-4 float-right" src="assets/images/la-milpa-logo.png" />
        <div className=" h-10 ">LA MILPA CARD GAME</div>
        <div className="flex">
          <button type="button" className="w-full" onClick={handleShow}>
            <img alt="rules" className="h-8 w-8 rounded-full mx-0" src="assets/images/icons8-question-mark-128.png" />
          </button>

        <Modal isOpen={showRules} onRequestClose={handleClose} className="popup-content">
        
 
          <div className="overflow-y-auto h-full">
          <div className="milpa-header text-2xl">Rules for La Milpa Card Game!</div>
          <img alt="la milpa logo" className="h-32 w-32 object-contain rounded-lg mx-2 mr-4 float-right" src="assets/images/la-milpa-logo.png" />
          <p className="text-justify p-2">La Milpa Card Game is a 2 players game that consists of 16 rounds in which Crops from a 50 cards deck will be planted at 2 Milpa boards. The Milpa at the left is controlled by Player 1 and the one at the right is controlled by Player 2. Each round, both players will be selecting 1 Crop from the 3 cards dealt at the center for then planting them into their Milpas. Each round depending on the rules of each Crop, players will be scoring 🍫 and at the end of the 16th round, the player with the best Milpa will win.</p>
          <div className="milpa-header text-2xl">Rules for Crop Cards</div>
          <div className="details-card ">
            <div className="flex bg-contain p-4 rounded-xl h-full w-full detail-card-interior text-white">
              <img alt={CORN_CARD.key} className="h-20 w-20 object-contain rounded-lg mx-0 mr-4" src={CORN_CARD.image} />
              <div className="text-left">
                <h3 className="text-md ">
                  {CORN_CARD.title}
                </h3>
                <hr/>
                <div className="text-sm ">{CORN_CARD.subtitle}</div>
                <hr/>
                <p className="text-sm ">{CORN_CARD.rules}</p>
              </div>
            </div>
          </div>

          <p className="text-justify p-2">Harvest: if the Crop specified harvest round matches the current round, you will get +1 🍫 for each of that Crop in your Milpa. For example, if by round 13 you have planted 5 🌽, you will get +5🍫 on that round. </p>
          <p className="text-justify p-2">Special rule: each Crop Card specifies rules that apply to that type of Crop only. This rules could specify one time only bonuses and/or guidelines for obtaining extra 🍫 at the end of the game.</p>

          <div className="milpa-header text-2xl">Good Luck and Have Fun!</div>
          <button type="button" className="bg-yellow-400 p-2 m-2 rounded-lg" onClick={handleClose}>Close Rules</button>
          </div>
        </Modal>
        </div>
      </div>
    </div>
  )
}
