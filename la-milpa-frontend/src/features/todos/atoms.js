import { atom } from "recoil";

const TODO_LIST_KEY = "todoListState";
const TODO_LIST_FILTER_KEY = "todoListFilterState";
const TODO_LIST_FILTERS = ["Show All", "Show Completed", "Show Incomplete"];
const ROUND_NAMES = ["Atlcahualo", "Tlacaxipe-hualiztli", "Tozoztontli", "Huey tozoztli", "Tóxcatl", "Etzalcualiztli", "Tecuilhuitontli" , "Huey tecuílhuitl", "Tlaxochimaco-miccailhuitontli", "Xocotlhuetzi-huey", "Ochpaniztli", "Teotleco", "Tepeilhuitl", "Quecholli", "Panque-tzaliztli", "Atemoztli"];

const YOUR_TURN = {
    title : "It's your turn !",
    subtitle : "Pick a card to see its details.",
    image: "https://thumbs.dreamstime.com/b/keep-going-go-ahead-motivational-traffic-sign-start-ride-140804506.jpg",
    rules: "Then select an empty space in your Milpa"
};
const NOT_YOUR_TURN = {
    title : "It's not your turn.",
    subtitle : "You can still see card details.",
    image: "https://www.seekpng.com/png/detail/303-3038493_prohibited-transaction-rules-part-i-wait-hand-sign.png",
    rules: "Plan your turn ahead."  
}
const CARD_BACK = {
    title : "LA MILPA",
    subtitle : "CARD GAME",
    image: "https://www.jardineriaon.com/wp-content/uploads/2017/01/Agave_potatorum_var._verschaffelti-1024x768.jpg",
    rules: ""
}

const todoListState = atom({
    key: TODO_LIST_KEY,
    default: [],
});

const todoListFilterState = atom({
    key: TODO_LIST_FILTER_KEY,
    default: TODO_LIST_FILTERS[0],
});

const milpaP1State = atom({
    key : "milpaP1State",
    default : Array(16).fill(null),
}
)

const detailsP1State = atom({
    key : "detailsP1State",
    default : YOUR_TURN,
}
)

const milpaP2State = atom({
    key : "milpaP2State",
    default : Array(16).fill(null),
}
)

const detailsP2State = atom({
    key : "detailsP2State",
    default : NOT_YOUR_TURN,
}
)

const cropsBoardState = atom({
    key : "cropsBoardState",
    default : Array(4).fill(CARD_BACK),
}
)

const currentRoundState = atom({
    key : "currentRoundState",
    default : 0,
}
)

export { todoListFilterState, todoListState, TODO_LIST_FILTERS , milpaP1State, milpaP2State , cropsBoardState , currentRoundState, detailsP1State ,detailsP2State, ROUND_NAMES};
