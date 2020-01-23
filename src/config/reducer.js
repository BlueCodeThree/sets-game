export default function reducer(state, action) {
    switch(action.type) {
        case "setDeck":
            return {
                ...state,
                deck: action.data
            }
        case "setCardsInPlay":
            return {
                ...state,
                cardsInPlay: action.data
            }
        case "addSelectedCard":
            return {
                ...state,
                selectedCards: [...state.selectedCards,action.data]
            }
        default:
            return state
    }
}