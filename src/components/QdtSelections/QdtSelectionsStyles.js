
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
  },
  field: {
    fontSize: 12,
    fontWeight: 700,
    textAlign: 'left',
    lineHeight: 1,
    textTransform: 'none',
    paddingTop: 2,
    paddingLeft: 5,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  selected: {
    fontSize: 10,
    textTransform: 'none',
    textAlign: 'left',
    paddingLeft: 5,
    paddingBottom: 1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  icon: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex',
    opacity: 0.5,
    paddingRight: 1,
  },
  menuList: {
    overflow: 'auto',
  },
  primaryGrid: {
    backgroundColor: theme.palette.grey[300],
    border: '1px solid',
    borderColor: theme.palette.grey[300],
    height: 38,
  },
  buttonGroup: {
    backgroundColor: theme.palette.grey[200],
    height: 38,
  },
  selectedItemButton: {
    width: 148,
    backgroundColor: theme.palette.grey[100],
    borderTop: 0,
    borderBottom: 0,
    padding: 0,
    borderColor: theme.palette.grey[300],
    justifyContent: 'start',
  },
  linearProgressRoot: {
    backgroundColor: theme.palette.grey[300],
  },
  linearProgressBar: {
    backgroundColor: theme.palette.success.main,
  },
}));

export default useStyles;
