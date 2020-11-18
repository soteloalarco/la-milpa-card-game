import { atom } from "recoil";

const TODO_LIST_KEY = "todoListState";
const TODO_LIST_FILTER_KEY = "todoListFilterState";
const TODO_LIST_FILTERS = ["Show All", "Show Completed", "Show Incomplete"];
const ROUND_NAMES = ["Atlcahualo", "Tlacaxipe-hualiztli", "Tozoztontli", "Huey tozoztli", "Tóxcatl", "Etzalcualiztli", "Tecuilhuitontli" , "Huey tecuílhuitl", "Tlaxochimaco-miccailhuitontli", "Xocotlhuetzi-huey", "Ochpaniztli", "Teotleco", "Tepeilhuitl", "Quecholli", "Panque-tzaliztli", "Atemoztli"];

const GAME_START = {
    title : "Game is About to Start!",
    subtitle : "Good luck and have fun.",
    image: "https://www.jardineriaon.com/wp-content/uploads/2017/01/Agave_potatorum_var._verschaffelti-1024x768.jpg",
    rules: "May the best Milpa win!"
};

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
const YOU_WIN = {
    title : "You Win 🎂!",
    subtitle : "Congratulations.",
    image: "https://image.freepik.com/vector-gratis/you-win-sign-estilo-pop-art_175838-499.jpg",
    rules: "Nice Milpa mi amigo."
};
const YOU_LOSE = {
    title : "You Lose 😥",
    subtitle : "But don't give up.",
    image: "https://img.freepik.com/vector-gratis/pierdes-recursos-juego-dibujos-animados-burbuja-discurso-comico_1056-3237.jpg?size=338&ext=jpg",
    rules: "Ask for a revancha."  
}

const A_TIE = {
    title : "It's a Tie",
    subtitle : "No one wins.",
    image: "https://image.freepik.com/vector-gratis/oops-vector-explosion_53876-17099.jpg",
    rules: "You wanted to play again anyway 😃"  
}

const CARD_BACK = {
    key : "default",
    title : "LA MILPA",
    subtitle : "CARD GAME",
    image: "https://www.jardineriaon.com/wp-content/uploads/2017/01/Agave_potatorum_var._verschaffelti-1024x768.jpg",
    rules: "",
    icon: "🍆"
}

const CARD_STARTGAME = {
    key : "startgame",
    title : "Start The Game",
    subtitle : "Click Here",
    image: "https://www.jardineriaon.com/wp-content/uploads/2017/01/Agave_potatorum_var._verschaffelti-1024x768.jpg",
    rules: "",
    icon: "🍆"
}

const CARD_NEXTROUNS = {
    key : "nextrounds",
    title : "LA MILPA",
    subtitle : "Pick a crop for your Milpa.",
    image: "https://www.jardineriaon.com/wp-content/uploads/2017/01/Agave_potatorum_var._verschaffelti-1024x768.jpg",
    rules: "",
    icon: "🍆"
}

const CORN_CARD = {
    key : "corn",
    title : "Corn / Maíz / Tlaolli",
    subtitle: "Harvest: round 13 - Tepeíhuitl",
    image : "https://cdn-3.expansion.mx/dims4/default/7d1e4df/2147483647/strip/true/crop/5616x3744+0+0/resize/800x533!/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2F76%2Ffa%2Fdce19d2f4136ad3f8c5636819170%2Fshutterstock-282467993.jpg",
    rules : "+1🍫 when planted, +15🍫 per completed row/column at the end.",
    icon: "🌽"
}

const BEANS_CARD = {
    key : "beans",
    title : "Beans / Frijol / Etl",
    subtitle: "Harvest: from round 1 to round 4",
    image: "https://static.producer.com/wp-content/uploads/2017/02/08-pinto-blackbeans.jpg",
    rules: "+3🍫 per adjacent 🌽 at the end.",
    icon: "🌰"
}

const TOMATO_CARD = {
    key : "tomato",
    title : "Tomato / Jitomate / Xitómatl",
    subtitle: "Harvest: every round",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/grow-tomatoes-700-350-bc4e017.jpg?quality=90&resize=960,872",
    rules: "+5🍫 at the end if you have 3 🍅 or fewer, -15🍫 otherwhise",
    icon: "🍅"
}

const CHILLI_CARD = {
    key : "chilli",
    title : "Chilli / Chile / Chili",
    subtitle: "Harvest: from round 1 to 8",
    image: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/12/chile-piquin.jpg",
    rules: "+3🍫 when planted, +3🍫 for each 🌶️ planted before round 9",
    icon: "🌶️"
}

const TOMATILLO_CARD = {
    key : "tomatillo",
    title : "Tomatillo / Tomate / Tomátl",
    subtitle: "Harvest: from round 6 to 8",
    image: "https://images-na.ssl-images-amazon.com/images/I/5144z3CgoxL._AC_SX450_.jpg",
    rules: "At the end +5🍫 for each 🌶️, -10🍫 if there's an adjacent 🌶️",
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

export { todoListFilterState, todoListState, TODO_LIST_FILTERS , milpaP1State, milpaP2State , cropsBoardState , currentRoundState, detailsP1State ,detailsP2State, ROUND_NAMES, CORN_CARD, BEANS_CARD, TOMATILLO_CARD, TOMATO_CARD , CHILLI_CARD, player1TurnState, player2TurnState, player1IsCropSelectedState, player2IsCropSelectedState, player1CropSelectedState, player2CropSelectedState, YOUR_TURN, NOT_YOUR_TURN, milpaP1CropsState, milpaP2CropsState, roundCardState, CARD_NEXTROUNS, milpaP1Score, milpaP2Score, indexCropSelectedState, milpaP2ScoreEnd, milpaP1ScoreEnd, YOU_LOSE, YOU_WIN, A_TIE};
