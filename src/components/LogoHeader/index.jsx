import { Container } from './styles';
import logo from '../../assets/Polygon1.svg';

export function LogoHeader({ ...rest }) {
  return (
    <Container {...rest} >
      <img src={logo} alt="Logo Polygon" />
      <h1>food explorer</h1>
    </Container>
  )
}