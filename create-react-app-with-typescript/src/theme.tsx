import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4f83cc",
      main: "#01579b",
      dark: "#002f6c"
    },
    secondary: {
      light: "#73e8ff",
      main: "#29b6f6",
      dark: "#73e8ff"
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
