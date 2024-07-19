import { Container, ButtonToggleMode } from './styles';

import PolygonFooter from '../../assets/PolygonFooter.svg';
import useTheme from '../../hooks/useTheme';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { LuSun } from "react-icons/lu";

export function Footer({ ...rest }) {
  const [theme, toggleTheme] = useTheme();

  return (
    <Container {...rest}>
      <div className="logo-header">
        <img src={PolygonFooter} alt="Logo Polygon Footer" />
        <h1>food explorer</h1>
      </div>

      <div className="box-toggle">
        <p>© 2023 - Todos os direitos reservados.</p>

        <ButtonToggleMode onClick={toggleTheme}>
          <div>
            {theme === 'light' ? <BsFillMoonStarsFill /> : <LuSun />}
          </div>
        </ButtonToggleMode>
      </div>

    </Container>
  )
}