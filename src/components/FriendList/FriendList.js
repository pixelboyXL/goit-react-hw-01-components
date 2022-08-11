import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem';
import { FriendsList } from 'components/FriendList/FriendList.styled';

export const FriendList = ({ friendsData }) => {
    return (
        <FriendsList>
            {friendsData.map(({ avatar, name, isOnline, id }) => {
                return <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
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