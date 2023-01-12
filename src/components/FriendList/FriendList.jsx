// import {App} from '../App'
import PropTypes from 'prop-types';
import {FriendListItem} from './FriendListItem'
import css from './FriendList.module.css'

export const FriendList = ({friends}) => {
    return (
        <ul className = {css.friend_list}>
        {friends.map(({avatar, name, isOnline, id}) => (
          <FriendListItem 
          key={id}
          avatar ={avatar} 
          name={name} 
          isOnline={isOnline}
          />
        ))}
      </ul>
    )
  }

  FriendList.propTypes ={
    friends: PropTypes.arrayOf(
      PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      }),
    ),
  }