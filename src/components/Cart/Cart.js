import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartitems = useSelector(state => state.cart.items );
  return (
    
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartitems.map((item)=>(
         <CartItem
         item={{key:item.id,id: item.id, title: item.name, quantity: item.quanitity, total: item.totalprice, price: item.price }}
       />
        ))}
        
      </ul>
    </Card>
  );
};

export default Cart;
