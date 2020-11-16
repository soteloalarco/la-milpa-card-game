/* eslint-disable no-unused-vars */
import { selector } from "recoil";

import { TODO_LIST_FILTERS, todoListFilterState, todoListState, milpaP1State, milpaP2State, currentRoundState ,player1TurnState, player2TurnState, player2IsCropSelectedState, player1IsCropSelectedState, milpaP1CropsState, milpaP2CropsState} from "./atoms";

const TODO_SELECTOR_KEY = "filteredTodoSelector";
const MILPA_P1_ISACTIVE_KEY = "milpaP1IsActiveState";
const MILPA_P2_ISACTIVE_KEY = "milpaP2IsActiveState";
const MILPA_P1_SCORE_KEY = "milpaP1IsScoreState";
const MILPA_P2_SCORE_KEY = "milpaP2IsScoreState";

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
        const cropSelected = get(player1IsCropSelectedState);
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
        const cropSelected = get(player2IsCropSelectedState);
        // eslint-disable-next-line prefer-const
        let isActive = Array(16).fill(false);
        // eslint-disable-next-line array-callback-return
        milpa.map((crop,index)=>{
            isActive[index]= milpa[index] && turn && cropSelected && round>0;
        })
        return isActive;
    },
});

const milpaP1ScoreState = selector({
    key: MILPA_P1_SCORE_KEY,
    get: ({ get }) => {
        const milpa = get(milpaP1State);
        const milpaCrops = get(milpaP1CropsState);

        return 0;
    },
});

const milpaP2ScoreState = selector({
    key: MILPA_P2_SCORE_KEY,
    get: ({ get }) => {
        const milpa = get(milpaP2State);
        const milpaCrops = get(milpaP2CropsState);

        return 0;
    },
});


export { filteredTodoListState, milpaP1IsActiveState, milpaP2IsActiveState ,milpaP1ScoreState, milpaP2ScoreState};
