export function manageFriends(state, action){

        switch (action.type) {
            case "ADD_FRIEND" :
                return {...state,
                    friends: [...state.friends, action.friend]}
            case "REMOVE_FRIEND":
               let removal = state.friends.findIndex(friend => friend.id === action.id)
                return {...state,
                    friends: [...state.friends.slice(0,removal),
                              ...state.friends.slice(removal + 1)]}
            default:
                return state


        }
}
