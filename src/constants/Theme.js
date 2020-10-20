/**
 *  컬러 테마
 * https://material-ui.com/customization/palette/
 * https://material-ui.com/customization/typography/
 * https://material-ui.com/customization/spacing/
 */
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

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
});

export default THEME;
