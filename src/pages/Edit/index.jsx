import { Container } from './styles';

import { Header } from '../../components/Header';
import { NewEditPlate } from '../../components/NewEditPlate';
import { Footer } from '../../components/Footer';


export function Edit({ ...rest }) {
  return (
    <Container {...rest}>

      <Header />

      <NewEditPlate
        title="Editar prato"
        descriptionUpload="Selecione para alterar"
        mode="edit"
      />

      <Footer />

    </Container>
  )
}