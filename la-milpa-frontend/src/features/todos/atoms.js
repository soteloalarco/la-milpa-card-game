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
    key : "default",
    title : "LA MILPA",
    subtitle : "CARD GAME",
    image: "https://www.jardineriaon.com/wp-content/uploads/2017/01/Agave_potatorum_var._verschaffelti-1024x768.jpg",
    rules: ""
}

const CORN_CARD = {
    key : "corn",
    title : "Corn / Maíz / Tlaolli",
    subtitle: "Harvest: round 13 - Tepeíhuitl",
    image : "https://cdn-3.expansion.mx/dims4/default/7d1e4df/2147483647/strip/true/crop/5616x3744+0+0/resize/800x533!/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2F76%2Ffa%2Fdce19d2f4136ad3f8c5636819170%2Fshutterstock-282467993.jpg",
    rules : "+1🍫 per round, +5🍫 per completed row/column at the end."
}

const BEANS_CARD = {
    key : "beans",
    title : "Beans / Frijol / Etl",
    subtitle: "Harvest: from round 1 to round 6",
    image: "https://static.producer.com/wp-content/uploads/2017/02/08-pinto-blackbeans.jpg",
    rules: "+5🍫 per adjacent 🌽 at the end."
}

const CROPS = {
    default: "💧",
    corn : "🌽",
    beans : "🌰",

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
    default : Array(16).fill(true),
}
)

const detailsP1State = atom({
    key : "detailsP1State",
    default : YOUR_TURN,
}
)

const milpaP2State = atom({
    key : "milpaP2State",
    default : Array(16).fill(true),
}
)

const detailsP2State = atom({
    key : "detailsP2State",
    default : NOT_YOUR_TURN,
}
)

const cropsBoardState = atom({
    key : "cropsBoardState",
    default : Array(3).fill(CARD_BACK),
}
)

const currentRoundState = atom({
    key : "currentRoundState",
    default : 0,
}
)

const player1TurnState = atom({
    key : "player1TurnState",
    default : true,
}
)

const player2TurnState = atom({
    key : "player2TurnState",
    default : false,
}
)

const player1IsCropSelectedState = atom({
    key : "player1IsCropSelectedState",
    default : false,
}
)

const player2IsCropSelectedState = atom({
    key : "player2IsCropSelectedState",
    default : false,
}
)

const player1CropSelectedState = atom({
    key : "player1CropSelectedState",
    default : {},
}
)

const player2CropSelectedState = atom({
    key : "player2CropSelectedState",
    default : {},
}
)

export { todoListFilterState, todoListState, TODO_LIST_FILTERS , milpaP1State, milpaP2State , cropsBoardState , currentRoundState, detailsP1State ,detailsP2State, ROUND_NAMES, CORN_CARD, BEANS_CARD, CROPS , player1TurnState, player2TurnState, player1IsCropSelectedState, player2IsCropSelectedState, player1CropSelectedState, player2CropSelectedState};
