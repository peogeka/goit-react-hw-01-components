import { FriendList } from './FriendList/FriendList';
import { SocialProfile } from './SocialProfile/SocialProfile';
import { StaticSection } from './StaticSection/StaticSection';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from './user.json';

export const App = () => {
  return (
    <div>
      <SocialProfile 
               username={user.username}
               tag={user.tag}
               location={user.location}
               avatar={user.avatar}
               stats={user.stats}/>
      <StaticSection/>
      <FriendList/>
      <TransactionHistory/> 
    </div>
  );
};
