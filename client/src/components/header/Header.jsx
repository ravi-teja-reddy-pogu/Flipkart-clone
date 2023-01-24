import { AppBar, Toolbar, makeStyles, Typography,Box ,withStyles, IconButton, Drawer,List ,ListItem} from '@material-ui/core';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButtons';
import {Menu} from '@material-ui/icons';
import {useState} from 'react';

const useStyle = makeStyles(theme=>({
    header: {
        background: '#2874f0',
        height: 64
    },
    logo:{
        width:75
    },
    subURL: {
        width: 10,
        height: 10,
        marginLeft: 4
    },
    container: {
        display: 'flex',
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        color: '#FFFFFF',
        textDecoration: 'none'
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic'
    },
    list:{
        width: 250
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    headerButtons: {
        margin: '0 5% 0 auto', 
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        } 
    }

}))

const ToolBar = withStyles({
    root: {
      minHeight: 55
    },
})(Toolbar);


const Header=()=>{
    const classes=useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const [open, setOpen] = useState(false);
    const handleClose =() =>{
        setOpen(false);
    }
    const handleOpen =() =>{
        setOpen(true);
    }
    const list =()=> (
        <Box className={classes.list} >
            <List>
                <listItem button>
                    <HeaderButtons/>
                </listItem>
            </List>
        </Box>
    )
    

    return (
        <AppBar position="fixed" className={classes.header}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    className={classes.menuButton}
                    onClick={handleOpen}
                >
                    <Menu/>
                </IconButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Link to="/" className={classes.component}>
                    <img src={logoURL} className={classes.logo} />
                    <Box component="span" className={classes.container}>
                        <Typography className = {classes.subHeading}>Explore <Box component="span" style={{color:'#FFE500'}}>Plus</Box></Typography>
                        <img src={subURL} className={classes.subURL} />
                    </Box>
                </Link>
                <SearchBar />
                <span className={classes.headerButtons}><HeaderButtons/></span>
            </Toolbar>
        </AppBar>
    )
}
export default Header;
