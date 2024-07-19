import { Container, ImgCard, DescriptionCard, BoxCountButton } from './styles';

import { USER_ROLE } from '../../utils/roles';
import { useAuth } from '../../hooks/auth';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { PiHeartStraight } from "react-icons/pi";
import { PiPencilSimple } from "react-icons/pi";

import { BoxCount } from '../BoxCount';
import { Button } from '../Button';


export function Card({ title, description, value, img, addToOrderList, ...rest }) {
  const { user } = useAuth();
  const [itemCount, setItemCount] = useState(1);
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  const isCustomer = [USER_ROLE.CUSTOMER].includes(user.role);
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role);

  return (
    <Container {...rest}>

      <ImgCard>
        <div className='icon'>
          { isCustomer && <PiHeartStraight className={`icon-heart ${isHeartClicked ? 'clicked' : ''}`} onClick={handleHeartClick} /> }
          { isAdmin && <Link className='icon-pencil' to="/edit"><PiPencilSimple /></Link> } 
        </div>
        <img src={img} alt="Imagem prato" />      
      </ImgCard>
      
      <Link to="/details">
        <DescriptionCard>
          <h3>{title}</h3>
          <p>{description}</p>
          <span>{value}</span>
        </DescriptionCard>
      </Link>


      { isCustomer && 
        <BoxCountButton>
          <BoxCount itemCount={itemCount} setItemCount={setItemCount} />
          <Button 
            className="button-order" 
            title="Incluir" 
            onClick={() => addToOrderList(title, itemCount)}
          />
        </BoxCountButton>
      }

    </Container>
  )
}
