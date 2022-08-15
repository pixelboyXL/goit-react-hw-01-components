import styled from "styled-components";

export const StatisticsTitle = styled.h2`
    text-align: center;
    padding: ${p => p.theme.space[5]}px;
    color: ${p => p.theme.colors.almostDarkGreen};
`;

export const StatisticsList = styled.ul`
    display: flex;
    width: 320px;
`;

export const StatisticsListItem = styled.li`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    padding: ${p => p.theme.space[3]}px;
    border-top: ${p => `${p.theme.borders.normal} ${p.theme.colors.almostDarkGreen}`};
    &:not(:last-child) {
        border-right: ${p => `${p.theme.borders.normal} ${p.theme.colors.almostDarkGreen}`};
    }
    background-color: ${p => {
        switch (p.children[0].props.children) {
            case '.docx':
                return `${p.theme.colors.ohSoOrange}`;
            case '.pdf':
                return `${p.theme.colors.purpleIsh}`;
            case '.mp3':
                return `${p.theme.colors.notPink}`;
            case '.psd':
                return `${p.theme.colors.kindaBlue}`;
            default:
                return `${p.theme.colors.clearlyWhite}`;
        }
    }};
    & span {
        color: ${p => p.theme.colors.clearlyWhite};
        font-size: ${p => p.theme.fontSizes.m};
        line-height: ${p => p.theme.lineHeights.body};
        font-weight: ${p => p.theme.fontWeights.normal};
    }
`;