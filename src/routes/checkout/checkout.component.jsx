import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
  selectCartCount,
  selectLoading,
} from '../../store/cart/cartSelector';
import { selectUser } from '../../store/user/userSelector';
import { placeOrderAsync } from '../../store/cart/cartAction';
import { setCartItems } from '../../store/cart/cartSlice';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import Button from '../../components/button/button.component';
import RadioButtons from '../../components/radio-buttons/radio-buttons.component';

import { Conatainer, NoItemText, Heading, TotalPrice } from './checkout.styles';

const paymentInfo = [
  { name: 'Cash', value: 'cash' },
  { name: 'UPI', value: 'upi' },
];

const deliveryInfo = [
  { name: 'Home Delivery', value: 'home-delivery' },
  { name: 'Pick Up', value: 'pick-up' },
];

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const cartCount = useSelector(selectCartCount);
  const loading = useSelector(selectLoading);

  const handleNavigate = () => {
    navigate('/auth');
  };

  const successhandler = () => {
    dispatch(setCartItems([]));
    navigate('/orders');
  };

  const formik = useFormik({
    initialValues: {
      paymentMethod: '',
      deliveryOption: '',
    },
    validateOnMount: true,
    validationSchema: Yup.object({
      paymentMethod: Yup.string().required('Payment method is required.'),
      deliveryOption: Yup.string().required('Delivery option is required.'),
    }),
    onSubmit: () => {
      dispatch(placeOrderAsync(cartItems, formik.values, successhandler));
    },
  });

  return (
    <Conatainer>
      {!!cartCount ? (
        <>
          <Heading className="heading-3">Your Order</Heading>
          {cartItems.map((item) => (
            <CheckoutItem key={item._id} item={item} />
          ))}
          <TotalPrice>₹ {cartTotal}</TotalPrice>

          <form onSubmit={formik.handleSubmit}>
            <Heading className="heading-3">Delivery Option</Heading>
            <RadioButtons
              name="deliveryOption"
              info={deliveryInfo}
              handleChange={formik.handleChange}
            />
            <Heading className="heading-3">Payment Method</Heading>
            <RadioButtons
              name="paymentMethod"
              info={paymentInfo}
              handleChange={formik.handleChange}
            />
            {user ? (
              <Button
                type="submit"
                isInvalid={!(cartItems.length && formik.isValid)}
                loading={loading}
              >
                Place Order
              </Button>
            ) : (
              <Button type="button" onClick={handleNavigate}>
                Login to Order
              </Button>
            )}
          </form>
        </>
      ) : (
        <NoItemText>Cart is Empty. Add Items to order.</NoItemText>
      )}
    </Conatainer>
  );
};

export default Checkout;
