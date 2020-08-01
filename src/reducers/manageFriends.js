export function manageFriends(state = { friends: [] }, action){
    console.log(action.friend);
    if (action.type === "ADD_FRIEND") {
        return { ...state, friends: [ ...state.friends, action.friend ] }
    } else if (action.type === "REMOVE_FRIEND") {
        return { ...state, friends: state.friends.filter(friend => friend.id !== action.id )}
    }

    return state;
}
