import {useRouter} from 'next/router'
import {
  makeStyles,
  Hidden,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Avatar,
  Divider,
  Typography,
  Button
} from '@material-ui/core'

import HomeIcon from '@material-ui/icons/Home'
import Subscription from '@material-ui/icons/Subscriptions'
import Whatshot from '@material-ui/icons/Whatshot'
import VideoLibrary from '@material-ui/icons/VideoLibrary'
import History from '@material-ui/icons/History'
import { AccountCircle } from '@material-ui/icons'

const useStyles = makeStyles( (theme)=> ({
  mobileDrawer: {
    width: 240
  },
  desktopDrawer: {
    width: 240,
    top: 56,
    height: 'calc(100%-64px)',
    borderRight: 'none',
  },
  avatar: {
    cursor: 'point',
    width: 24,
    height: 24
  },
  listItem: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: theme.spacing(3)
  },
  listItemText: {
    fontSize: 14
  }
}))

function NavBar(){
  const router = useRouter()
  const classes = useStyles()

  const primaryMenu = [
    {id: 1, label: 'Início', path: '/', icon: HomeIcon},
    {id: 2, label: 'Em alta', path: '/tremding', icon: Whatshot},
    {id: 3, label: 'Inscrições', path: '/subscription', icon: Subscription},
  ]
  const secondaryMenu = [
    {id: 1, label: 'Biblioteca', path: '/library', icon: VideoLibrary},
    {id: 2, label: 'Histórico', path: '/history', icon: History},
  ]
  
  const isSelected = (item) =>{
    return router.pathname === item.path
  }

  const content  = (
    <Box height='100%' display='flex'  flexDirection='column'>
      <List>
        {primaryMenu.map( (item) => {
          
          const Icon = item.icon
          return(
            <ListItem
              key={item.id}
              button
              className={{root: classes.listItem}}
              selected={isSelected(item)} 
            >
              <ListItemIcon>
                <Icon style={{color: isSelected(item) && '#f44336'}} />
              </ListItemIcon>
              <ListItemText
                classes={{primary: classes.listItemText}}
                primary={item.label}
              />
            </ListItem>
          )
        })}
      </List>
      <Divider/>
      <List>
        {secondaryMenu.map( (item) => {
          const Icon = item.icon
          return(
            <ListItem
              key={item.id}
              button
              className={{root: classes.listItem}}
              selected={isSelected(item)} 
            >
              <ListItemIcon>
                <Icon style={{color: isSelected(item) && '#f44336'}} />
              </ListItemIcon>
              <ListItemText
                classes={{primary: classes.listItemText,}}
                primary={item.label}
              />
            </ListItem>
          )
        })}
      </List>
      <Divider />
      <Box  mx={4} my={2}>
        <Typography variant={'body2'}>
          Faça Login para curtir vídeos, comentar e se inscrever
        </Typography>
        <Box mt={2}>
          <Button variant="outlined" color="secondary" startIcon={<AccountCircle/>}>
            Fazer login
          </Button>
        </Box>
      </Box>
    </Box>
  )
  return (
    <Hidden mdDown>
      <Drawer classes={{paper: classes.desktopDrawer}}
        anchor='left' 
        open 
        variant='persistent'
      >
        {content}
      </Drawer>
    </Hidden>
  )
}

export default NavBar
