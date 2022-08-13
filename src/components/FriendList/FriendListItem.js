import { FriendsListDivStyle } from 'components/FriendList/FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendsListDivStyle isOnline={isOnline}>
            <span></span>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </FriendsListDivStyle>
    );
};