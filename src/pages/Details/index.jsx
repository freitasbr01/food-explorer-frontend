import { Container, Content, Description, BoxIngredients, BoxCountButton } from './styles';

import { useState } from 'react';
import { Header } from '../../components/Header';
import { ButtonBack } from '../../components/ButtonBack';

import { IoIosArrowBack } from "react-icons/io";
import { PiReceipt } from "react-icons/pi";

import ravanello  from '../../assets/imgs/ravanello.svg';
import { Ingredient } from '../../components/Ingredient';
import { BoxCount } from '../../components/BoxCount';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';
import { useNavigate, Link } from 'react-router-dom';


export function Details({ img, title, description, tags, ...rest }) {
  const [orderList, setOrderList] = useState({}); 
  const { user } = useAuth();
  const [itemCount, setItemCount] = useState(1);
  
  const isCustomer = [USER_ROLE.CUSTOMER].includes(user.role);
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role);
  
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  }

  const addToOrderList = (product, quantity) => {
    setOrderList((prevOrderList) => {
      const newOrderList = { ...prevOrderList };

      if (newOrderList[product]) {
        newOrderList[product] += quantity;
      } else {
        newOrderList[product] = quantity;
      }
      return newOrderList;
    });
  };

  const uniqueOrderCount = Object.keys(orderList).length

  return (
    <Container {...rest}>
      <Header uniqueOrderCount={uniqueOrderCount} onReceiptClick={() => setShowReceipt(true)} />

          <ButtonBack
            className="back"
            title="voltar"
            icon={IoIosArrowBack }
            onClick={handleBack} 
          />
      
      <Content>
        <img src={ravanello} alt={ravanello} />          

        <Description>
          <h1>Salada Ravanello</h1>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

          <BoxIngredients>
            <Ingredient title="alface" />
            <Ingredient title="cebola" />
            <Ingredient title="pão noan" />
            <Ingredient title="pepino" />
            <Ingredient title="rabanete" />
            <Ingredient title="tomate" />
          </BoxIngredients>

          <BoxCountButton>
            <BoxCount className="Count" itemCount={itemCount} setItemCount={setItemCount} />

            {isCustomer && (
              <Button
                className="button-order"
                title="incluir R$ 25,00" 
                icon={PiReceipt}
                onClick={() => addToOrderList(title, itemCount)}
              />
            )}

            {isAdmin && (
              <Button
                to="/edit"
                className="button-order"
                title="Editar prato"            
              />
            )}

          </BoxCountButton>
        </Description>

      </Content>

      <Footer />


    </Container>
  )
}