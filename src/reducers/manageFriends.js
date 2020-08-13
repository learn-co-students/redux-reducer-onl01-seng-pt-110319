// export function manageFriends(state, action){
//     state = {friends: []}


//     switch(action.type) {
//         case 'ADD_FRIEND':
//             return (
//                 {...state,
//                     friends: [
//                       ...state.friends,
//                       action.friend
//                     ]
//                 }
//             )
//             case 'REMOVE_FRIEND': 
//             // FIND THE FRIEND THAT ID MATCHES AND REMOVE THEM. 
//             //RETURN NEW STATE WITH ARRAY FRIENDS THAT INCLUDES EVERYONE EXCEPT THE REMOVED FRIEND
//                 const removeFriend = state.friends.findIndex(friend => friend.id === action.id)
//                 return (
//                     {...state, 
//                     friends: [
//                         ...state.friends, 
//                         state.friends - removeFriend
//                     ]
//                 }

//                 )
//                 default:
//                     return state;
                    
//     }
// }

  
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
      case 'REMOVE_FRIEND':
         // iterate over state.friends find the id that matches action id
         // remove that friend from the list and return state.friends
         const friendRemoval = state.friends.findIndex(friend => friend.id === action.id)
         return (
            {...state, 
                friends: [
                    ...state.friends.slice(0, friendRemoval),
                    ...state.friends.slice(friendRemoval + 1)

                    
                ]
        }
         )
          default: 
          return state
        }
    }