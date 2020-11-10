/**
 *  컬러 테마
 * https://material-ui.com/customization/palette/
 * https://material-ui.com/customization/typography/
 * https://material-ui.com/customization/spacing/
 */
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import RalewayWoff2 from './fonts/Raleway-Regular.woff2';

const raleway = {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('Raleway'),
    local('Raleway-Regular'),
    url(${RalewayWoff2}) format('woff2')
  `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const THEME = createMuiTheme({
    palette: {
        primary: {
            main: '#64b5f6',
            light: '#9be7ff',
            dark: '#2286c3',
        },
        secondary: {
            main: '#e0e0e0',
            light: '#ffffff',
            dark: '#aeaeae',
        },
        pinned: {
            main: red[500],
        },
    },
    typography: {
        fontFamily: 'Raleway, Dotum, Apple SD Gothic Neo, sans-serif',
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [raleway],
            },
        },
    },
});

export default THEME;
