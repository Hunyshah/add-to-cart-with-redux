import { useDispatch,useSelector } from 'react-redux';
import { uiActions } from '../../store/uislice';
import classes from './CartButton.module.css';
const CartButton = (props) => {
   const dispatch = useDispatch();
   const qunity = useSelector(state => state.cart.totalamount)

   const togglehandler = () => {
     dispatch(uiActions.toggler());
     console.log(uiActions)
  }
  return (
    <button onClick={togglehandler} className={classes.button} >
      <span>My Dart</span>
      <span className={classes.badge}>{qunity}</span>
    </button>
  );
};

export default CartButton;
