import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #88A795;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    h1,h2,h3,h4,h5,h6,p {
        margin: 0;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0; 
    }
    body::-webkit-scrollbar {
        width: 20px;
    }
    body::-webkit-scrollbar-track {
        background-color: transparent;
        margin-top: ${p => p.theme.space[4]}px;
        margin-bottom: ${p => p.theme.space[4]}px;
        opacity: 0;
		border-radius: ${p => p.theme.radii.md};
    }
    body::-webkit-scrollbar-thumb {
        background-color: ${p => p.theme.colors.reallyBisque};
		border-radius: ${p => p.theme.radii.md};
		border: ${p => `${p.theme.borders.medium} ${p.theme.colors.almostDarkGreen}`};
    }
`;