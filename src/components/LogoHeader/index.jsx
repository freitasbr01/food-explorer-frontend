import { Container } from './styles';
import logo from '../../assets/Polygon1.svg';
import { AiOutlineSetting } from "react-icons/ai";

import { USER_ROLE } from '../../utils/roles';
import { useAuth } from '../../hooks/auth';
import { Link } from 'react-router-dom';


export function LogoHeader({ ...rest }) {
  const { user } = useAuth();

  return (
    <Container {...rest} >

      <div className="logo-title">
        <img src={logo} alt="Logo Polygon" />
        <h1>food explorer</h1>
      </div>

      { user && [USER_ROLE.ADMIN].includes(user.role) &&
        <Link to="/users" className="manage">
          <p>Admin</p> 
          <AiOutlineSetting />
        </Link>      
      }
      
    </Container>
  )
}