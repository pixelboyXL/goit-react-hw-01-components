import styled from "styled-components";

export const User = styled.div`
    text-align: center;
    padding: ${p => p.theme.space[4]}px;
`;

export const Name = styled.p`
    margin-top: ${p => p.theme.space[4]}px;
    font-weight: ${p => p.theme.fontWeights.bold};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.almostDarkGreen};
`;

export const Info = styled.p`
    font-weight: ${p => p.theme.fontWeights.bold};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.midnightGrey};
    &:not(:last-child) {
        margin-top: ${p => p.theme.space[3]}px;
    }
`;

export const UserStatisticsList = styled.ul`
    display: grid;
    grid-template-columns: 3fr 3fr 3fr;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    border-top: ${p => `${p.theme.borders.normal} ${p.theme.colors.almostDarkGreen}`};
`;

export const UserStatisticsItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${p => p.theme.space[3]}px;
    gap: ${p => p.theme.space[1]}px;
    &:not(:last-child) {
        border-right: ${p => `${p.theme.borders.normal} ${p.theme.colors.almostDarkGreen}`};
    }
`;

export const SpanName = styled.span`
    font-weight: ${p => p.theme.fontWeights.bold};
    line-height: ${p => p.theme.lineHeights.body};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.almostDarkGreen};
`;

export const SpanInfo = styled.span`
    font-weight: ${p => p.theme.fontWeights.bold};
    line-height: ${p => p.theme.lineHeights.body};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.midnightGrey};
`;

