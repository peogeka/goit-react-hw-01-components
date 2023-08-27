import { FriendList } from "./FriendList/FriendList";
import { SocialProfile } from "./SocialProfile/SocialProfile";
import { StaticSection } from "./StaticSection/StaticSection";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div>
      <SocialProfile/>
      <StaticSection/>
      <FriendList/>
      <TransactionHistory/> 
    </div>
  );
};
