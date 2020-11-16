/* eslint-disable no-unused-vars */
import { selector } from "recoil";

import { TODO_LIST_FILTERS, todoListFilterState, todoListState, milpaP1State, milpaP2State, currentRoundState ,player1TurnState, player2TurnState, player2CropSelectedState, player1CropSelectedState} from "./atoms";

const TODO_SELECTOR_KEY = "filteredTodoSelector";
const MILPA_P1_ISACTIVE_KEY = "milpaP1IsActiveState";
const MILPA_P2_ISACTIVE_KEY = "milpaP2IsActiveState";

const filteredTodoListState = selector({
    key: TODO_SELECTOR_KEY,
    get: ({ get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case TODO_LIST_FILTERS[1]:
                return list.filter((x) => x.completed);
            case TODO_LIST_FILTERS[2]:
                return list.filter((x) => !x.completed);
            default:
                return list;
        }
    },
});

const milpaP1IsActiveState = selector({
    key: MILPA_P1_ISACTIVE_KEY,
    get: ({ get }) => {
        const milpa = get(milpaP1State);
        const round = get(currentRoundState);
        const turn = get(player1TurnState);
        const cropSelected = get(player1CropSelectedState);
        // eslint-disable-next-line prefer-const
        let isActive = Array(16).fill(false);
        // eslint-disable-next-line array-callback-return
        milpa.map((crop,index)=>{
            isActive[index]= milpa[index] && turn && cropSelected && round>0;
        })
        return isActive;
    },
});

const milpaP2IsActiveState = selector({
    key: MILPA_P2_ISACTIVE_KEY,
    get: ({ get }) => {
        const milpa = get(milpaP2State);
        const round = get(currentRoundState);
        const turn = get(player2TurnState);
        const cropSelected = get(player2CropSelectedState);
        // eslint-disable-next-line prefer-const
        let isActive = Array(16).fill(false);
        // eslint-disable-next-line array-callback-return
        milpa.map((crop,index)=>{
            isActive[index]= milpa[index] && turn && cropSelected && round>0;
        })
        return isActive;
    },
});


export { filteredTodoListState, milpaP1IsActiveState, milpaP2IsActiveState };
