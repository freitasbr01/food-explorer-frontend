import { Container, Picture, BackgroundCover, TitleCover } from './styles';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

import cover from '../../assets/imgs/cover.svg';
import coverMobile from '../../assets/imgs/cover-mobile.svg';


export function CoverHome({...rest}) {
  return (
    <Container {...rest}>

      <Picture>
        <source srcSet={coverMobile} media={`(max-width: ${DEVICE_BREAKPOINTS.LG}`} />
        <img src={cover} alt="Imagem capa" />
      </Picture>

      <BackgroundCover>        
        <TitleCover>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </TitleCover>
      </BackgroundCover>

    </Container>
  )
}