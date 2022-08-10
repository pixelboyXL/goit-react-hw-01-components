import PropTypes from 'prop-types';
import { FriendsList, FriendsListItem } from 'components/FriendList/FriendList.styled';

export const FriendList = ({ friendsData }) => {
    return (
        <FriendsList>
            {friendsData.map(({ avatar, name, isOnline, id }) => {
                return (
                    <FriendsListItem key={id} isOnline={isOnline}>
                        <span>{isOnline}</span>
                        <img src={avatar} alt="User avatar" width="48" />
                        <p>{name}</p>
                    </FriendsListItem>)
                })
            }
        </FriendsList>
    );
};

FriendList.propTypes = {
    friendsData: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
};