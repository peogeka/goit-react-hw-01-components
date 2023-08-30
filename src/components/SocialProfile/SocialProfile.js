import PropTypes from 'prop-types';
import { Wrapper, Foto, List, ListItem,FotoCard, TextName, StatsNumber} from "./SocialProfile.styled"
export const SocialProfile = ({ username, tag, location, avatar, stats}) => {
  return ( 
<Wrapper>
  <FotoCard>
    <Foto
    src={avatar}
    alt={username}
    
    />
      <TextName>{username}</TextName>
      <p>{tag}</p>
      <p>{location}</p>
  </FotoCard>

  <List>
    <ListItem>
      <span>Followers</span>
      <StatsNumber>{stats.followers}</StatsNumber>
    </ListItem>
    <ListItem>
      <span>Views</span>
      <StatsNumber>{stats.views}</StatsNumber>
    </ListItem>
    <ListItem>
      <span>Likes</span>
      <StatsNumber>{stats.likes}</StatsNumber>
    </ListItem>
  </List>
</Wrapper>
  )
  
}

SocialProfile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};