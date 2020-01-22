import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
// color tool https://material.io/resources/color/#!/?view.left=1&view.right=0&primary.color=616161&secondary.color=00B8D4
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#8d8d8d",
      main: "#606060",
      dark: "#363636"
    },
    secondary: {
      light: "#62ebff",
      main: "#00b8d4",
      dark: "#0088a3"
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
