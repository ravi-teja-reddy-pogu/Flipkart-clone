
import { Card, makeStyles, Box , Typography, Button} from '@material-ui/core';
import { linkClasses } from '@mui/material';
import clsx from 'clsx'

import GroupButton from './GroupButton';
 
const useStyle= makeStyles({
    component: {
        display: 'flex',
        borderRadius: 0,
        borderTop: '1px solid #f0f0f0'
    },
    leftComponent: {
        margin: 20,
        display:'flex',
        flexDirection:'column'
    },
    rightComponent: {
        marginTop: 20
    },
    smallText: {
        fonstSize: 14
    },
    greyTextColor: {
        color: '#878787'
    },
    price: {
        fontSize: 18,
        fontWeight: 600
    },
    image: {
        height: 110,
        width: 110
    },
    remove: {
        marginTop: 20,
        fontSize: 16
    }
})

const CartItem= ({item, removeItemFromCart}) => {
    const classes = useStyle();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    return (
        <Card className={classes.component}>
            <Box className = {classes.leftComponent}>
                <img src={item.url} className={classes.image}/>
                <GroupButton/>
            </Box>
            <Box className = {classes.rightComponent}>
                <Typography>
                    {item.title.longTitle}
                </Typography>
                <Typography className={clsx(classes.smallText,classes.greyTextColor)} style={{marginTop: 10}}>
                    Seller: SuperComNet
                    <span><img src={fassured} style={{width: 50, maginLeft: 10}}/></span>
                </Typography>
                <Typography style={{margin: '20px 0'}}>
                    <span className={classes.price}>₹{item.price.cost}</span> &nbsp;&nbsp;&nbsp;
                    <span className={classes.greyTextColor}><strike>₹{item.price.mrp}</strike></span>
                    <span style={{color: '#388E3C'}}>{item.price.discount}off</span>
                </Typography>
                <Button className={classes.remove} onClick={()=> removeItemFromCart(item.id)}>Remove</Button>
            </Box>
        </Card>
    )
}

export default CartItem;