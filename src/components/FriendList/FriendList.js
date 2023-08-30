import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import { FriendsTable, } from "./FriendList.styled";
export const FriendList = ({ friends }) => {
    return (
      <FriendsTable>
        {friends.map(item => (
          <FriendListItem avatar={item.avatar} name={item.name} isOnline={item.isOnline} key={item.id} />
        ))}
      </FriendsTable>
    );
  };

  FriendList.propTypes = {
    friends: PropTypes.array,
  };