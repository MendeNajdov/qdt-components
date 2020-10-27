import { createMuiTheme } from '@material-ui/core/styles';
import Colors from './Colors';

// const theme = {
const theme = createMuiTheme({
  palette: {
    primary: {
      light: Colors.TURQUOISE_LIGHT,
      main: Colors.TURQUOISE,
      dark: Colors.TURQUOISE_DARK,
      contrastText: '#fff',
    },
    secondary: {
      light: Colors.WINE_LIGHT,
      main: Colors.WINE,
      dark: Colors.WINE_DARK,
      contrastText: '#fff',
    },
    success: {
      light: Colors.EMERALD,
      main: Colors.EMERALD,
      dark: Colors.EMERALD,
      contrastText: '#fff',
    },
    error: {
      light: Colors.RUBY,
      main: Colors.RUBY,
      dark: Colors.RUBY,
      contrastText: '#fff',
    },
    info: { // SAPPHIRE
      light: Colors.AQUAMARINE,
      main: Colors.AQUAMARINE,
      dark: Colors.AQUAMARINE,
      contrastText: '#fff',
    },
    range: [Colors.TANZANITE, Colors.SLATE, Colors.TURQUOISE, Colors.AQUAMARINE, Colors.WINE, Colors.AMETHYST, Colors.STONE, Colors.SAPPHIRE, Colors.EMERALD, Colors.RUBY, Colors.CORAL],
  },
  shape: {
    borderRadius: 0,
  },
  overrides: {
    MuiButton: {
      text: {
        borderRadius: 3,
        borderColor: '#FFFFFF',
        border: 5,
      },
    },
    MuiListItemText: {
      primary: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'block',
        fontSize: 12,
      },
    },
    MuiMenuItem: {
      root: {
        borderBottom: `1px solid ${Colors.GREY_80}`,
        fontSize: 12,
        '&.selected': {
          backgroundColor: Colors.QLIK_GREEN,
          color: '#FFF',
          borderBottom: `1px solid ${Colors.GREY_100}`,
          '&:hover': {
            backgroundColor: Colors.QLIK_GREEN,
          },
          '& .MuiListItemIcon-root': {
            minWidth: 10,
            '& .MuiSvgIcon-root': {
              fill: '#FFF',
              width: '0.5em',
              height: '0.5em',
            },
          },
        },
        '&.excluded': {
          backgroundColor: Colors.GREY_80,
          color: '#000',
          borderBottom: `1px solid ${Colors.GREY_100}`,
          '&:hover': {
            color: '#FFF',
            backgroundColor: Colors.QLIK_GREEN,
          },
        },
      },
    },
    MuiSlider: {
      root: {
        height: 8,
      },
      thumb: {
        height: 24,
        width: 'auto',
        padding: 5,
        borderRadius: 0,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -10,
        marginLeft: -12,
        '&:focus,&:hover,&$active': {
          boxShadow: 'inherit',
        },
        '& .bar': {
          height: 10,
          width: 1,
          backgroundColor: 'currentColor',
          marginLeft: 1,
          marginRight: 1,
        },
      },
      active: {},
      valueLabel: {
        left: 'calc(-50% + 4px)',
      },
      track: {
        height: 5,
        borderRadius: 0,
      },
      rail: {
        height: 5,
        borderRadius: 0,
      },
    },
    MuiList: {
      root: {
        maxHeight: 310,
        overflowY: 'scroll',
      },
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiListItem: {
      root: {
        borderBottom: `1px solid ${Colors.GREY_85}`,
        '&$selected': {
          backgroundColor: Colors.QLIK_GREEN,
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: Colors.QLIK_GREEN,
          },
        },
      },
    },
  },
});

export default theme;
