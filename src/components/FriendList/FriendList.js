import { FriendListItem } from "components/FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
    return (
      <ul >
        {friends.map(item => (
          <FriendListItem avatar={item.avatar} name={item.name} isOnline={item.isOnline} key={item.id} />
        ))}
      </ul>
    );
  };