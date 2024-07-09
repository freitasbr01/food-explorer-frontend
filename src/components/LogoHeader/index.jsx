import { Container } from './styles';
import logo from '../../assets/Polygon1.svg';

import { USER_ROLE } from '../../utils/roles';
import { useAuth } from '../../hooks/auth';

export function LogoHeader({ ...rest }) {
  const { user } = useAuth();

  return (
    <Container {...rest} >

      <div className="logo-title">
        <img src={logo} alt="Logo Polygon" />
        <h1>food explorer</h1>
      </div>


      { [USER_ROLE.ADMIN].includes(user.role) && <p>admin</p> }

      
    </Container>
  )
}