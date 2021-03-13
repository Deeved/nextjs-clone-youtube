import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Inputbase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import { Button, Hidden } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/search'
import VideoCall from '@material-ui/icons/VideoCall'
import Apps from '@material-ui/icons/Apps'
import MoreVert from '@material-ui/icons/MoreVert'
import { AccountCircle } from '@material-ui/icons';


const useStyles = makeStyles( (theme)=> ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default 
  },
  toolbar: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    cursor: 'point',
    height: 18,
    marginLeft: theme.spacing(3)
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: 35,
    width: 700
  },
  input: {
    flex: 1
  }
}))
function TopBar() {
  const classes = useStyles()
  return(
    <AppBar className={classes.root } color='default'>
      <Toolbar className={classes.toolbar}>
        <Box display='flex' alignItems='center'>
          <MenuIcon/>
            <img src="/new-youtube-logo.svg" alt="logo" className={classes.logo}/>
        </Box>
        <Hidden mdDown>
          <Box>
            <Paper component='form' className={classes.search}>
              <Inputbase
                className={classes.input}
                placeholder='Pesquisar'
                inputProps={{'aria-label': 'search google maps'}}
              />
              <IconButton 
                type='submit' 
                className={classes.iconButton} 
                aria-label='search'
              > <SearchIcon/> 
              </IconButton>
            </Paper>
          </Box>
        </Hidden>

        <Box display='flex'>
          <IconButton 
            className={classes.icons} 
          > 
            <VideoCall/> 
          </IconButton>
          <IconButton 
            className={classes.icons} 
          > 
            <Apps/> 
          </IconButton>
          <IconButton 
            className={classes.icons} 
          > 
            <MoreVert/> 
          </IconButton>
          <Button
            color='secondary'
            variant='outlined'
            startIcon={<AccountCircle/>}
            // onClick={()=>signin('google')}
          >
            Fazer Login
          </Button>
        </Box>
        
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
