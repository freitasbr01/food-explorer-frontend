import { Container } from './styles';
import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';

import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { PiReceipt } from "react-icons/pi";
import { PiSignOut } from "react-icons/pi";

import { LogoHeader } from '../LogoHeader';
import { ReceiptIcon } from '../ReceiptIcon';
import { Input } from '../Input';
import { Button } from '../Button';


export function Header({uniqueOrderCount, onReceiptClick, ...rest}) {
  const { user } = useAuth();

  return (
    <Container {...rest}>

      <FiMenu className='display-icon'/>
      <LogoHeader />
      <Input className="input-search" icon={IoSearchOutline } placeholder="Busque por pratos ou ingredientes" />
      
      <Button
        className="button-order"
        title="Pedidos" 
        icon={PiReceipt} 
        uniqueOrderCount={`(${uniqueOrderCount})`} 
        onReceiptClick={onReceiptClick}
      />

      <div className='signout'>
        <PiSignOut  />
      </div>


      {
        [USER_ROLE.CUSTOMER].includes(user.role) && 
        <ReceiptIcon 
          uniqueOrderCount={uniqueOrderCount} 
          onReceiptClick={onReceiptClick}
        />
      }      

    </Container>
  )
}


// {[USER_ROLE.ADMIN].includes(user.role) && }