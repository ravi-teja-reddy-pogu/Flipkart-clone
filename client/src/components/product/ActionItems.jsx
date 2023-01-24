import { Box, Button,makeStyles } from "@material-ui/core";
import clsx from "clsx";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { addToCart} from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { payUsingPaytm } from "../../service/api";
import {post} from '../../utils/paytm'

const useStyle = makeStyles(theme=>({
    leftContainer:{
        padding:'40px 0 0 80px',
        [theme.breakpoints.down('md')]:{
            padding: '20px 40px'
        }
    },
    image:{
        padding:'15px 20px',
        border:'1px solid #f0f0f0',
        width:'95%'
    },
    button:{
        height:50,
        width:'46%',
        borderRadius:2
    }
    ,
    addTocart:{
        background:'#ff9f00',
        color:'#fff',
        marginRight:10
    },
    buyNow:{
        background:'#fb641b',
        color:'#fff'
    }
}));

const ActionItems = ({product}) =>{
    const classes = useStyle();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const addItemToCart = () => {
        dispatch(addToCart(product.id));
        navigate('/cart')
    } 

    const buyNow = async()=>{
       let response= await payUsingPaytm({amount:500,email:'ganesh220801@gmail.com'});
       let information = {
           action:'https://securegw-stage.paytm.in/order/process',
           params:response
       }
            post(information);
    }

    return(
        <Box className={classes.leftContainer}>
            <img src={product.detailUrl} className={classes.image} /> <br/>
            <Button onClick={() => addItemToCart()} variant="contained" className={clsx(classes.button,classes.addTocart)}><ShoppingCartIcon/> Add to Cart</Button>
            <Button onClick={()=>buyNow()} variant="contained" className={clsx(classes.button,classes.buyNow)}><FlashOnIcon/>Buy Now</Button>
        </Box>
    )
}

export default ActionItems;

