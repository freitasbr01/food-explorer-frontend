import { Container, Content, Description, BoxIngredients, BoxCountButton } from './styles';

import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ButtonBack } from '../../components/ButtonBack';

import { IoIosArrowBack } from "react-icons/io";
import { PiReceipt } from "react-icons/pi";

import { Ingredient } from '../../components/Ingredient';
import { BoxCount } from '../../components/BoxCount';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';
import { useParams, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { Link } from 'react-router-dom';



export function Details({ img, title, description, tags, ...rest }) {
  const { user } = useAuth();

  const [data, setData] = useState(null);
  const [orderList, setOrderList] = useState({}); 
  const [itemCount, setItemCount] = useState(1);

  const isCustomer = [USER_ROLE.CUSTOMER].includes(user.role);
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role);  
  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`/plates/${params.id}`)
      setData(response.data);
    }

    fetchPlate();
  }, [params.id]);

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

  const imageURL = data?.image_url ? `${api.defaults.baseURL}/files/${data.image_url}` : '';


  return (
    <Container {...rest}>
      <Header uniqueOrderCount={uniqueOrderCount} />

        <ButtonBack
          className="back"
          title="voltar"
          icon={IoIosArrowBack }
          onClick={handleBack} 
        />

      {
        data &&
        <Content>
          <img src={imageURL} alt={data.title} />          

          <Description>
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            {
              data.ingredients &&
              <BoxIngredients>
              {
                data.ingredients.map(ingredient => (
                  <Ingredient
                    key={String(ingredient.id)}
                    title={ingredient.ingredient}
                  />
                ))
              }
              </BoxIngredients>
            }

            <BoxCountButton>

              {isCustomer && (
                <BoxCount className="Count" itemCount={itemCount} setItemCount={setItemCount} />
              )}

              {isCustomer && (
                <Button
                  className="button-order"
                  title="incluir R$ 25,00" 
                  icon={PiReceipt}
                  onClick={() => addToOrderList(title, itemCount)}
                />
              )}

              {isAdmin && (
                <Link to={`/edit/${params.id}`}>
                  <Button
                    to="/edit"
                    className="button-order"
                    title="Editar prato"            
                  />
                </Link>
              )}

            </BoxCountButton>
          </Description>

        </Content>
      }

      <Footer />
    </Container>
  )
}

