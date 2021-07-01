import React from 'react';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <span
            className={`status ${friend.isOnline ? 'isOnline' : 'isOffline'}`}
          >
            {friend.isOnline ? 'isOnline' : 'isOffline'}
          </span>
          <img
            className="avatar"
            src={friend.avatar}
            alt={`${friend.name} avatar`}
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
