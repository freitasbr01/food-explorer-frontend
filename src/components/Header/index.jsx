import { Container } from './styles';
import { USER_ROLE } from '../../utils/roles';

import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { PiReceipt } from "react-icons/pi";
import { PiSignOut } from "react-icons/pi";

import { LogoHeader } from '../LogoHeader';
import { ReceiptIcon } from '../ReceiptIcon';
import { Input } from '../Input';
import { Button } from '../Button';
import { MobileMenu } from '../MobileMenu';


import { useAuth } from '../../hooks/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export function Header({ uniqueOrderCount, ...rest}) {
  const { user } = useAuth();
  const [menuIsOpen, setMenuIsOpen] = useState(false);  

  const isCustomer = [USER_ROLE.CUSTOMER].includes(user.role);
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role);

  return (
    <Container {...rest} isCustomer={isCustomer} >

      <MobileMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <FiMenu className='display-icon' onClick={() => setMenuIsOpen(true)} />

      <LogoHeader className="logo-header" isCustomer={isCustomer} />
      <Input className="input-search" icon={IoSearchOutline } placeholder="Busque por pratos ou ingredientes" />
      

      {isCustomer && (
        <Button
          className="button-order"
          title="Pedidos" 
          icon={PiReceipt} 
          uniqueOrderCount={`(${uniqueOrderCount})`} 
        />
      )}

      {isAdmin && (
        <Link to="/new" className="button-order">
          <Button
            className="button-order"
            title="Novo Produto" 
          />
        </Link>
      )}

      <div className='signout'>
        <PiSignOut  />
      </div>


      {isCustomer && (
        <ReceiptIcon 
          uniqueOrderCount={uniqueOrderCount} 
        />
      )}      

    </Container>
  )
}


