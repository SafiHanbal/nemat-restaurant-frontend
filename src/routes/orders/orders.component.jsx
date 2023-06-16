import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectOrders } from '../../store/cart/cartSelector';
import { getOrdersAsync } from '../../store/cart/cartAction';

import OrderItem from '../../components/order-item/order-item.compoent';

import { Container, Heading, NoItemText } from './orders.styles';

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);

  useEffect(() => {
    dispatch(getOrdersAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {!!orders.length ? (
        <>
          <Heading className="heading-3">Orders</Heading>
          {orders.map((order) => (
            <OrderItem key={order._id} order={order} />
          ))}
        </>
      ) : (
        <NoItemText>No previous orders. Order to see here.</NoItemText>
      )}
    </Container>
  );
};

export default Orders;
