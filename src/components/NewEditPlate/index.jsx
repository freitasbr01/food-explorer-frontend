import { Container, BoxInputUpload, BoxInputText, BoxInputNumber, BoxSelect, Select, BoxIngredients, BoxTextArea, Buttons } from './styles';

import { IoIosArrowBack } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';


import { ImgUpload } from '../ImgUpload';
import { ButtonBack } from '../ButtonBack';
import { Label } from '../Label';
import { Input } from '../Input';
import { IngredientItem } from '../IngredientItem';

export function NewEditPlate({ title, descriptionUpload, mode, ...rest }) {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container {...rest}>

      <ButtonBack
        className="back" 
        title="voltar" 
        icon={IoIosArrowBack} 
        onClick={handleBack}
      />

      <h1>{title}</h1>

      <div className="section1">
        <BoxInputUpload>
          <Label className="label-img" title="Imagem do prato" />
          <ImgUpload descriptionUpload={descriptionUpload} />
        </BoxInputUpload>

        <BoxInputText>
          <Label htmlFor="nome" title="Nome" />
          <Input
            className="box-input"
            type="text"
            id="nome"
            placeholder="Ex: Salada Ceasar"
          />
        </BoxInputText>

        <BoxSelect>
          <Label htmlFor="category" title="Categoria" />
            <Select name="category" id="category">
              <option value="refeição">Refeição</option>
              <option value="sobremesa">Sobremesa</option>
              <option value="bebidas">Bebidas</option>
            </Select>
            <FiChevronDown />
        </BoxSelect>
      </div>

      <div className="section2">
        <BoxIngredients>
          <Label title="Ingredientes" />
          <div className="box-ingredient">
            <IngredientItem title="title" />
            <IngredientItem isNew placeholder="Adicionar" />
          </div>
        </BoxIngredients>

        <BoxInputNumber>
          <Label htmlFor="number" title="Preço" />
          <Input
            className="box-input"
            type="number"
            id="number"
            placeholder="R$ 40,00"
          />
        </BoxInputNumber>
      </div>


      <div className="section3">
        <BoxTextArea>
          <Label htmlFor="description" title="Descrição" />
          <textarea name="description" id="description" placeholder='A Salada César é uma opção refrescante para o verão.'>
          </textarea>
        </BoxTextArea>

        <Buttons>
          { mode === 'new' ? (
            <button className='button-save'>Salvar alterações</button>
          ) : (
            <div className='box-delete-save'>
              <button className='button-delete'>Excluir prato</button>
              <button className='button-save'>Salvar alterações</button>
            </div>
          )}
        </Buttons>
      </div>

    </Container>
  )
}