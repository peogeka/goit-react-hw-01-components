import { FriendList } from './FriendList/FriendList';
import { SocialProfile } from './SocialProfile/SocialProfile';
import { StaticSection } from './StaticSection/StaticSection';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from './user.json'
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';


export const App = () => {
  return (
    <div>
      <SocialProfile 
               username={user.username}
               tag={user.tag}
               location={user.location}
               avatar={user.avatar}
               stats={user.stats}/>
      <StaticSection title="Upload stats" stats={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/> 
    </div>
  );
};
