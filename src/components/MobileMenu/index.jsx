import { Container, Close, Button } from './styles';

import { IoSearchOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { Input } from '../Input';


export function MobileMenu({ menuIsOpen, onCloseMenu, ...rest }) {

  return (
    <Container {...rest} data-menu-is-open={menuIsOpen} >

      <Close>
        <CgClose onClick={onCloseMenu} />
        <p>Menu</p>
      </Close>

      <div className="box-input">
        <Input icon={IoSearchOutline} placeholder="Busque por pratos ou ingredientes" />
      </div>

      <Button to="/new" className="new">Novo prato</Button>
      <Button className="logout">Sair</Button>


    </Container>
  )
}