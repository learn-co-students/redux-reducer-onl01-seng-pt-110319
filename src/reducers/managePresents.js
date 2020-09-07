export function managePresents(state = { numberOfPresents: 0 }, action){
    if (action.type === 'INCREASE') {
        return { ...state, numberOfPresents: state.numberOfPresents + 1 };
    } else {
        return state;
    }
}
