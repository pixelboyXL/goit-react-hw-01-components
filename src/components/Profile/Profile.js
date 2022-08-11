import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { User, Name, Info, UserStatisticsList, UserStatisticsItem, SpanName, SpanInfo } from 'components/Profile/Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes }}) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            width="250px"
            bg="maybeYellow"
            border="normal"
            borderRadius="sm"
            borderColor="almostDarkGreen"
            boxShadow="shadow"
        >
            <User>
                <img
                    src={avatar}
                    alt={username}
                    width="130"
                />
                <Name>{username}</Name>
                <Info>@{tag}</Info>
                <Info>{location}</Info>
            </User>
            <UserStatisticsList>
                <UserStatisticsItem>
                    <SpanName>Followers</SpanName>
                    <SpanInfo>{followers}</SpanInfo>
                </UserStatisticsItem>
                <UserStatisticsItem>
                    <SpanName>Views</SpanName>
                    <SpanInfo>{views}</SpanInfo>
                </UserStatisticsItem>
                <UserStatisticsItem>
                    <SpanName>Likes</SpanName>
                    <SpanInfo>{likes}</SpanInfo>
                </UserStatisticsItem>
            </UserStatisticsList>
    </Box>);
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired
};