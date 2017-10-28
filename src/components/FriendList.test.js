import React from 'react';
import ReactDOM from 'react-dom';
import FriendList from './FriendList';
import {addFriend, deleteFriend, starFriend, genderFriend} from '../actions/FriendsActions';

it('renders friends list', () => {
	const friends=[
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
	]
	const actions = {
      addFriend: addFriend,
      deleteFriend: deleteFriend,
      starFriend: starFriend,
      genderFriend: genderFriend
    };

  const div = document.createElement('div');
  ReactDOM.render(<FriendList friends={friends} actions={actions} />, div);
});
