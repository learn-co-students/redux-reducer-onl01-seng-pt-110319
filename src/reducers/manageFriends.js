export function manageFriends(state = {
    friends: [],
  }, action) {
    switch(action.type) {
  
      case "ADD_FRIEND":
        return (
          {...state,
              friends: [
                ...state.friends,
                action.friend
              ]
          }
      )
  
      case "REMOVE_FRIEND":
        const friendIndex = state.friends.findIndex(friend => friend.id === action.id);
        const firstArr = state.friends.slice(0, friendIndex)
        const secondArr = state.friends.slice(friendIndex +1)
        return (
          {...state,
              friends: [
                // ...state.friends.slice(0, friend),
                // ...state.friends.slice(friend + 1)
                ...firstArr, ...secondArr
              ]
          }
        )
  
      default:
        return state;
  
    }
  };