import { Container } from './styles';

import { Header } from '../../components/Header';
import { NewEditPlate } from '../../components/NewEditPlate';
import { Footer } from '../../components/Footer';


export function New({ ...rest }) {
  return (
    <Container {...rest}>

      <Header />

      <NewEditPlate
        titleNewOrEdit="Novo prato"
        descriptionUpload="Selecione a imagem"
        mode="new"
      />

      <Footer />

    </Container>
  )
}