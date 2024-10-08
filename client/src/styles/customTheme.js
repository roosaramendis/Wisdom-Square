import { createMuiTheme } from '@material-ui/core/styles';

const customTheme = (darkMode) =>
  createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#ffb28a' : '#FF5700',
        main2: darkMode ? 'rgba(255,178,138,0.1)' : 'rgba(255,87,0,0.2)',
      },
      secondary: {
        main: darkMode ? '#f3b9bb' : '#941a1c',
      },
    },
    overrides: {
      MuiTypography: {
        root: {
          wordBreak: 'break-word',
        },
      },
    },
  });

export default customTheme;
