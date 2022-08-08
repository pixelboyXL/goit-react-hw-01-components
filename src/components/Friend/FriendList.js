import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friendsData }) => {
    return (
        <ul className="friend-list">
            {friendsData.map(({ avatar, name, isOnline, id }) => {
                return <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
            })
            }
        </ul>
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