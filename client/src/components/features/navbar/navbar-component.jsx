import React , {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { themeContext } from "../../../context/theme-context/theme-context";
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { useNavigate } from 'react-router-dom';
import './navbar.css'
import UserUpdate from '../update/update-component';

  const pages = ['Home', 'News', 'Grades', 'Schedule', 'Contact'];
  const settings = ['Logout'];
  const navigations = ['/home', '/news', '/grades', '/schedule', '/contact'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const {themeColor ,  setThemeColor , purpleMode , setPurpleMode } = useContext(themeContext);

  const changeTheme = () => {
    setPurpleMode(!purpleMode) ;
  }

  const user = JSON.parse(localStorage.getItem('user'));

  let navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navBarNavigator = (index) => {
    navigate(navigations[index]);
    handleCloseNavMenu();
  }
  const logout = () => {
    localStorage.clear();
    handleCloseUserMenu();
    navigate('/');
    window.location.reload();
  }

  return (
  <AppBar position="static" className='navbar' style={purpleMode ? themeColor.lightPurpleTheme : themeColor.lightCyanTheme}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}

            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
              backgroundColor : "primary"
            }}
          >
            {pages.map((page, index) => (
              <MenuItem  key={page} onClick={() => navBarNavigator(index)}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
        >

        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page, index) => (
            <Button className='links'
              key={page}
              onClick={() => navBarNavigator(index)}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page}
            </Button>
          ))}
           <ColorLensOutlinedIcon onClick={changeTheme} style={{fontSize:"300%" , color:"white" , marginTop:"1%" , marginLeft:"3%" , cursor:"pointer"}}/>
        </Box>
        {/* <Box>
          <button onClick={UserUpdate}><img src='https://jooinn.com/images/edit-1.png' alt='edit' width="10px" height="10px"/></button>
        </Box> */}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="User Image" src={user?.img} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={logout}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
      </AppBar>
  );
};

export default Navbar;