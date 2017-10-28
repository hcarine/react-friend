import * as types from '../actions/FriendsActions';
import friendlist,{ initialState } from './friendlist';

it('handles ADD_FRIEND action', () => {
  expect(friendlist(initialState, types.addFriend('teste'))).toEqual({
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
      },
      {
        name: 'teste'
      }
    ] 
  });
});

it('handles REMOVE_FRIEND action', () => {
  expect(friendlist(initialState, types.deleteFriend('teste'))).toEqual({
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
  });
});

it('handles STAR_FRIEND action', () => {
  expect(friendlist(initialState, types.starFriend(1))).toEqual({
    friendsById: [
      {
        name: 'Catarine Roosevelt',
        starred: true,
        gendered: false
      },
      {
        name: 'Abraham Lincoln',
        starred: true,
        gendered: true
      },
      {
        name: 'George Washington',
        starred: false,
        gendered: true
      }
    ] 
  });
});

it('handles genderFriend action', () => {
  expect(friendlist(initialState, types.genderFriend(1))).toEqual({
    friendsById: [
      {
        name: 'Catarine Roosevelt',
        starred: true,
        gendered: false
      },
      {
        name: 'Abraham Lincoln',
        starred: true,
        gendered: false
      },
      {
        name: 'George Washington',
        starred: false,
        gendered: true
      }
    ] 
  });
});