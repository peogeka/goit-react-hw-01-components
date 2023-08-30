import PropTypes from 'prop-types';
import { FriendItemTable, ActivityIcon } from "./FriendListItem.styled";
export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
      <FriendItemTable key={id}>
        <ActivityIcon
          style={{
            backgroundColor: isOnline ? 'green' : 'red',
          }}
          
        ></ActivityIcon>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
      </FriendItemTable>
    );
  };

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  };
  