import * as types from '../constants/ActionTypes';

export const initialState = {
  friendsById: [
    {
      name: 'Catarine Roosevelt',
      starred: true,
      gendered: false
    },
    {
      name: 'Abraham Lincoln',
      starred: false,
      gendered: true
    },
    {
      name: 'George Washington',
      starred: false,
      gendered: true
    }
  ]
};

export default function friends(state = initialState, action) {
  let friends = [...state.friendsById];
  let friend = friends.find((item, index) => index === action.id);

  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            name: action.name
          }
        ],
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter((item, index) => index !== action.id)
      };
    case types.STAR_FRIEND:
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends
      };
    case types.GENDER_FRIEND:
      friend.gendered = !friend.gendered;
      return {
        ...state,
        friendsById: friends
      };

    default:
      return state;
  }
}
