import styled from "styled-components";

export const Table = styled.table`
    text-align: center;
    box-shadow: ${p => p.theme.shadows.shadow};
    margin-top: ${p => p.theme.space[4]}px; 
    border-collapse: collapse;
    width: 860px;
    th {
        padding: ${p => p.theme.space[4]}px 0;
        text-transform: uppercase;
        font-weight: ${p => p.theme.fontWeights.bold};
        font-size: ${p => p.theme.fontSizes.m};
        background-color: ${p => p.theme.colors.maybeYellow};
        border: ${p => p.theme.borders.normal};
        border-color:  ${p => p.theme.colors.almostDarkGreen};
        color: ${p => p.theme.colors.almostDarkGreen};
    }
    td {
        font-size: ${p => p.theme.fontSizes.m};
        color: ${p => p.theme.colors.justBlack};
        padding: ${p => p.theme.space[4]}px 0;
        border: ${p => p.theme.borders.normal};
        border-color: ${p => p.theme.colors.almostDarkGreen};
    }
    tr:nth-child(odd) {
        background-color: ${p => p.theme.colors.clearlyWhite};
    }
    tr:nth-child(even) {
        background-color: ${p => p.theme.colors.maybeYellow};
    }
`;