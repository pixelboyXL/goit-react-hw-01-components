import { FriendsListItemStyle } from 'components/FriendList/FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendsListItemStyle>
            <span>{isOnline}</span>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </FriendsListItemStyle>
    );
};