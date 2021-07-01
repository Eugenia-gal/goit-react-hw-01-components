import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.friend_list}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <span
            className={`${s.status} ${friend.isOnline ? s.online : s.offline}`}
          ></span>
          <img
            className={s.avatar}
            src={friend.avatar}
            alt={`${friend.name} avatar`}
            width="60"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;
