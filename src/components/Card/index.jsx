import { Container, ImgCard, DescriptionCard, BoxCountInclude, BoxCount } from './styles';

import { useState } from 'react';
import { USER_ROLE } from '../../utils/roles';
import { useAuth } from '../../hooks/auth';

import { PiHeartStraight } from "react-icons/pi";
import { PiPencilSimple } from "react-icons/pi";
import { FiPlus, FiMinus } from "react-icons/fi";

import { Button } from '../../components/Button';


export function Card({ title, description, value, img, addToOrderList, ...rest }) {
  const [itemCount, setItemCount] = useState(1);
  const { user } = useAuth();

  function CountPlus() {
    setItemCount(itemCount + 1)
  }

  function CountMinus() {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
    }
  }

  function formatWithLeadingZero(itemCount) {
    return itemCount < 10 ? `0${itemCount}` : itemCount;
  }

  return (
    <Container {...rest}>

      <ImgCard>
        <div className='icon'>
          <PiHeartStraight />
          { [USER_ROLE.ADMIN].includes(user.role) && <PiPencilSimple /> }
          
        </div>
        <img src={img} alt="Imagem prato" />      
      </ImgCard>
      
      <DescriptionCard>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{value}</span>
      </DescriptionCard>


        { 
          [USER_ROLE.CUSTOMER].includes(user.role) &&

          <BoxCountInclude>            
            <BoxCount>
              <button className='button-count' onClick={CountMinus}><FiMinus/></button>          
                {formatWithLeadingZero(itemCount)}
              <button className='button-count' onClick={CountPlus}><FiPlus /></button>
            </BoxCount>

            <Button 
              className="button-order" 
              title="Incluir" onClick={() => addToOrderList(title, itemCount)}
            />
          </BoxCountInclude>
        }

    </Container>
  )
}
