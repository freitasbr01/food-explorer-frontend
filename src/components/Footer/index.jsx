import { Container } from './styles';

import PolygonFooter from '../../assets/PolygonFooter.svg';

export function Footer({ ...rest }) {
  return (
    <Container {...rest}>
      <div className="logo-header">
        <img src={PolygonFooter} alt="Logo Polygon Footer" />
        <h1>food explorer</h1>
      </div>

      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}