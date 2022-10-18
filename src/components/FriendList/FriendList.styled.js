import styled from "styled-components";

export const FriendsList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.space[3]}px;
`;

export const FriendsListDivStyle = styled.div`
    display: flex;
    align-items: center;
    padding: ${p => p.theme.space[3]}px;
    background-color: ${p => p.theme.colors.maybeYellow};
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.almostDarkGreen}`};
    border-radius: ${p => p.theme.radii.sm};
    box-shadow: ${p => p.theme.shadows.shadow};
    span {
        width: ${p => p.theme.space[3]}px;
        height: ${p => p.theme.space[3]}px;
        border-radius: ${p => p.theme.radii.round};
        background-color: ${p => {
            return p.isOnline 
            ?`${p.theme.colors.almostDarkGreen}`
            :`${p.theme.colors.notPink}`;
        }};
    }
    p, img {
        margin-left: ${p => p.theme.space[3]}px;
        font-weight: ${p => p.theme.fontWeights.medium};
        font-size: ${p => p.theme.fontSizes.m};
        color: ${p => {
            return p.isOnline 
            ?`${p.theme.colors.almostDarkGreen}`
            :`${p.theme.colors.notPink}`;
        }};
    }
`;