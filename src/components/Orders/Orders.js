import React from 'react';
import styled from 'styled-components';
import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
  DialogShadow,
} from '../FoodDialog/FoodDialog';
import { formatPrice } from '../../utils/formatPrice';
import { useSelector, useDispatch } from 'react-redux';
import { QuantityManage } from './QuantityManage';

import * as cartActions from '../../redux/cart/cart-actions';
import { Link } from 'react-router-dom';

const OrderStyled = styled.div`
  position: fixed;
  right: 0;
  top: 93px;
  width: 340px;
  background-color: white;
  height: calc(100% - 93px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
  transform: ${({ show }) => (show ? `translateX(0)` : `translateX(100%)`)};
  transition-property: transform;
  transition-duration: 0.5s;
`;

const OrderContent = styled(DialogContent)`
  max-height: 100%;
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid #f7f7f7;
`;

const OrderItem = styled.div`
  padding: 10px 5px;
  display: grid;
  grid-template-columns: 50px 100px 100px;
  justify-content: space-between;
`;

const ItemImg = styled.div`
  width: 46px;
  height: 46px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
`;

export const Orders = () => {
  const hidden = useSelector((state) => state.cart.hidden);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handlerToggle = () => {
    dispatch(cartActions.toggleCartHidden());
  };
  return (
    <>
      {hidden && <DialogShadow onClick={handlerToggle} />}
      <OrderStyled show={hidden}>
        {cartItems?.length === 0 ? (
          <OrderContent>Nada por aquí</OrderContent>
        ) : (
          <OrderContent>
            <OrderContainer>Tu pedido:</OrderContainer>
            {cartItems.map((item) => (
              <OrderContainer>
                <OrderItem>
                  <ItemImg img={item.img} />
                  <div>
                    <div>{item.name}</div>
                    {formatPrice(item.price)}
                  </div>
                  <div>
                    <QuantityManage item={item} />
                  </div>
                </OrderItem>
              </OrderContainer>
            ))}
          </OrderContent>
        )}
        <DialogFooter>
          <Link to="/checkout">
            <ConfirmButton onClick={handlerToggle}>Ir a Pagar</ConfirmButton>
          </Link>
        </DialogFooter>
      </OrderStyled>
    </>
  );
};
