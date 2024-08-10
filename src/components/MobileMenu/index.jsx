import { Container, Close, Button } from './styles';

import { IoSearchOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { Input } from '../Input';
import { USER_ROLE } from '../../utils/roles';
import { useAuth } from '../../hooks/auth';


export function MobileMenu({ menuIsOpen, onCloseMenu, ...rest }) {
  const { signOut, user } = useAuth();

  const isCustomer = [USER_ROLE.CUSTOMER].includes(user.role);
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role);

  return (
    <Container {...rest} data-menu-is-open={menuIsOpen} >

      <Close>
        <CgClose onClick={onCloseMenu} />
        <p>Menu</p>
      </Close>

      <div className="box-input">
        <Input icon={IoSearchOutline} placeholder="Busque por pratos ou ingredientes" />
      </div>

      {isAdmin && ( <Button to="/new" className="new">Novo prato</Button> )}

      <Button className="logout" onClick={signOut} >Sair</Button>

    </Container>
  )
}