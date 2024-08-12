import { Container, ImgCard, DescriptionCard, BoxCountButton } from './styles';

import { USER_ROLE } from '../../utils/roles';
import { useAuth } from '../../hooks/auth';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { PiHeartStraight } from "react-icons/pi";
import { PiPencilSimple } from "react-icons/pi";

import { BoxCount } from '../BoxCount';
import { Button } from '../Button';

import { api } from '../../services/api';
import { useParams, useNavigate } from 'react-router-dom';


export function Card({ data, addToOrderList, ...rest }) {
  const { user } = useAuth();
  const [itemCount, setItemCount] = useState(1);
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const isCustomer = [USER_ROLE.CUSTOMER].includes(user.role);
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role);

  const imageURL = data.image_url ? `${api.defaults.baseURL}/files/${data.image_url}` : '';


  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  function formatPrice(value) {
    const numericValue = value ? parseFloat(value / 100).toFixed(2) : '0.00';
    return `R$ ${numericValue.replace('.', ',')}`;
  }

  return (
    <Container {...rest}>

      <ImgCard>
        <div className='icon'>
          { isCustomer && 
            <PiHeartStraight 
              className={`icon-heart ${isHeartClicked ? 'clicked' : ''}`}
              onClick={handleHeartClick} 
            /> 
          }

          { isAdmin && 
            <Link className='icon-pencil' to={`/edit/${data.id}`}>
              <PiPencilSimple />
            </Link>
          }
        </div>

        <img
          src={imageURL}
          alt="Foto do prato"
        />
      </ImgCard>


        <DescriptionCard onClick={() => handleDetails(data.id)}>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <span>{formatPrice(data.price)}</span>
        </DescriptionCard>

      { isCustomer && 
        <BoxCountButton>
          <BoxCount itemCount={itemCount} setItemCount={setItemCount} />
          <Button 
            className="button-order" 
            title="Incluir" 
            onClick={() => addToOrderList(data.title, itemCount)}
          />
        </BoxCountButton>
      }

    </Container>
  )
}
