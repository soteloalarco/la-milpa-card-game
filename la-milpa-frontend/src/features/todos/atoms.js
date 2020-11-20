import { atom } from "recoil";

const TODO_LIST_KEY = "todoListState";
const TODO_LIST_FILTER_KEY = "todoListFilterState";
const TODO_LIST_FILTERS = ["Show All", "Show Completed", "Show Incomplete"];
const ROUND_NAMES = ["Atlcahualo", "Tlacaxipe-hualiztli", "Tozoztontli", "Huey tozoztli", "Tóxcatl", "Etzalcualiztli", "Tecuilhuitontli" , "Huey tecuílhuitl", "Tlaxochimaco-miccailhuitontli", "Xocotlhuetzi-huey", "Ochpaniztli", "Teotleco", "Tepeilhuitl", "Quecholli", "Panque-tzaliztli", "Atemoztli"];



const GAME_START = {
    title : "Game is About to Start!",
    subtitle : "Good luck and have fun.",
    image: "/assets/images/pinata-la-milpa.png",
    rules: "May the best Milpa win!"
};

const YOUR_TURN = {
    title : "It's your turn !",
    subtitle : "Pick a card to see its details.",
    image: "/assets/images/icons8-go-480.png",
    rules: "Then select an empty space in your Milpa."
};
const NOT_YOUR_TURN = {
    title : "It's not your turn.",
    subtitle : "You can still see card details.",
    image: "/assets/images/icons8-stop-512.png",
    rules: "Plan your turn ahead."  
}
const YOU_WIN = {
    title : "You Win 🎂!",
    subtitle : "Congratulations !",
    image: "/assets/images/winner-la-milpa.png",
    rules: "Nice Milpa mi amigo."
};
const YOU_LOSE = {
    title : "You Lose 😥",
    subtitle : "But don't give up.",
    image: "/assets/images/loser-la-milpa.png",
    rules: "Ask for a revancha."  
}

const A_TIE = {
    title : "It's a Tie",
    subtitle : "No one wins.",
    image: "/assets/images/pinata-la-milpa.png",
    rules: "You wanted to play again anyway 😃"  
}

const CARD_BACK = {
    key : "default",
    title : "LA MILPA",
    subtitle : "CARD GAME",
    image: "assets/images/la-milpa-logo.png",
    rules: "",
    icon: "🍆"
}

const CARD_STARTGAME = {
    key : "startgame",
    title : "Start The Game",
    subtitle : "Click Here",
    image: "assets/images/la-milpa-logo.png",
    rules: "",
    icon: "🍆"
}

const CARD_NEXTROUNS = {
    key : "nextrounds",
    title : "LA MILPA",
    subtitle : "Pick a crop for your Milpa.",
    image: "assets/images/la-milpa-logo.png",
    rules: "",
    icon: "🍆"
}

const CORN_CARD = {
    key : "corn",
    title : "Corn / Tlaolli 🌽",
    subtitle: "Harvest: round 13 - Tepeíhuitl",
    image : "/assets/images/corn-la-milpa.png",
    rules : "+1🍫 when planted, +15🍫 per completed row/column at the end.",
    icon: "🌽"
}

const BEANS_CARD = {
    key : "beans",
    title : "Beans / Etl 🌰",
    subtitle: "Harvest: from round 1 to round 4",
    image: "/assets/images/beans-la-milpa.png",
    rules: "+3🍫 per adjacent 🌽 at the end.",
    icon: "🌰"
}

const TOMATO_CARD = {
    key : "tomato",
    title : "Tomato / Xitómatl 🍅",
    subtitle: "Harvest: every round",
    image: "/assets/images/tomato-la-milpa.png",
    rules: "+5🍫 at the end if you have 3 🍅 or fewer, -15🍫 otherwhise.",
    icon: "🍅"
}

const CHILLI_CARD = {
    key : "chilli",
    title : "Chilli / Chili 🌶️",
    subtitle: "Harvest: from round 1 to 8",
    image: "/assets/images/chilli-la-milpa.png",
    rules: "+3🍫 when planted, +3🍫 for each 🌶️ planted before round 9.",
    icon: "🌶️"
}

const TOMATILLO_CARD = {
    key : "tomatillo",
    title : "Tomatillo / Tomátl 🍈",
    subtitle: "Harvest: from round 6 to 8",
    image: "/assets/images/tomatillo-la-milpa.png",
    rules: "At the end +5🍫 for each 🌶️, -10🍫 if there's an adjacent 🌶️.",
    icon: "🍈"
}

const DEFAULT_CROPS = {
    key: "null",
    icon: ""
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

const milpaP1Score = atom({
    key : "milpaP1Score",
    default : 0,
}
)

const milpaP1ScoreEnd = atom({
    key : "milpaP1ScoreEnd",
    default : 0,
}
)

const milpaP1CropsState = atom({
    key : "milpaP1CropsState",
    default : Array(16).fill(DEFAULT_CROPS),
}
)

const detailsP1State = atom({
    key : "detailsP1State",
    default : GAME_START,
}
)

const milpaP2State = atom({
    key : "milpaP2State",
    default : Array(16).fill(true),
}
)

const milpaP2Score = atom({
    key : "milpaP2Score",
    default : 0,
}
)

const milpaP2ScoreEnd = atom({
    key : "milpaP2ScoreEnd",
    default : 0,
}
)

const milpaP2CropsState = atom({
    key : "milpaP2CropsState",
    default : Array(16).fill(DEFAULT_CROPS),
}
)

const detailsP2State = atom({
    key : "detailsP2State",
    default : GAME_START,
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

const roundCardState = atom({
    key : "roundCardState",
    default : CARD_STARTGAME,
}
)

const indexCropSelectedState = atom({
    key : "indexCropSelectedState",
    default : -1,
}
)

const deckState = atom({
    key : "deckState",
    default : Array(50).fill(CARD_BACK),
}
)

export { todoListFilterState, todoListState, TODO_LIST_FILTERS , milpaP1State, milpaP2State , cropsBoardState , currentRoundState, detailsP1State ,detailsP2State, ROUND_NAMES, CORN_CARD, BEANS_CARD, TOMATILLO_CARD, TOMATO_CARD , CHILLI_CARD, player1TurnState, player2TurnState, player1IsCropSelectedState, player2IsCropSelectedState, player1CropSelectedState, player2CropSelectedState, YOUR_TURN, NOT_YOUR_TURN, milpaP1CropsState, milpaP2CropsState, roundCardState, CARD_NEXTROUNS, milpaP1Score, milpaP2Score, indexCropSelectedState, milpaP2ScoreEnd, milpaP1ScoreEnd, YOU_LOSE, YOU_WIN, A_TIE, deckState, CARD_BACK};
