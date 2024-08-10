import { Container, BoxInputUpload, BoxInputText, BoxInputNumber, BoxSelect, Select, BoxIngredients, BoxTextArea, Buttons } from './styles';

import { IoIosArrowBack } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";

import { ImgUpload } from '../ImgUpload';
import { ButtonBack } from '../ButtonBack';
import { Label } from '../Label';
import { Input } from '../Input';
import { IngredientItem } from '../IngredientItem';

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../services/api';


export function NewEditPlate({ titleNewOrEdit, descriptionUpload, mode, ...rest }) {
  const params = useParams();
  const navigate = useNavigate();

  const [imageFile, setImageFile] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(""); 

  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState('');

  const categories = ["refeição", "sobremesa", "bebidas"]; 


  useEffect(() => {
    if (params.id) {
      api.get(`/plates/${params.id}`).then(response => {
        const { title, category, description, price, ingredients, image_url } = response.data;

        const ingredientStrings = ingredients.map(ingredient => ingredient.ingredient);

        setTitle(title);
        setCategory(category);
        setDescription(description);
        setPrice(price);
        setIngredients(ingredientStrings);
        setImageURL(image_url);
      });
    }
  }, [params.id]);

  function handleBack() {
    navigate(-1);
  }

  function handleChangeImage(event) {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      setImageURL(file.name); 
    }
  }

  function handleAddIngredient() {
    if (ingredientInput && !ingredients.includes(ingredientInput)) {
      setIngredients([...ingredients, ingredientInput]);
      setIngredientInput('');
    }
  }  
  
  function handleRemoveIngredient(deleted) {
    setIngredients(ingredients.filter(ingredient => ingredient !== deleted));
  }

  function handlePriceChange(event) {
    const value = event.target.value.replace(/\D/g, '');
    setPrice(value);
  }

  function formatPrice(value) {
    const numericValue = value ? parseFloat(value / 100).toFixed(2) : '0.00';
    return `R$ ${numericValue.replace('.', ',')}`;
  }

  async function handleNewPlate(event) {
    event.preventDefault();

    if (!title || !category || !description || !price || !imageFile || ingredients.length === 0) {
      alert('Preencha todos os campos!');
      return;
    }  

    try {
      const formData = new FormData();
      formData.append('image', imageFile);
      formData.append('title', title);
      formData.append('category', category);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('ingredients', JSON.stringify(ingredients));
  
      await api.post('/plates', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      alert('Prato criado com sucesso!');
      navigate('/');
  
    } catch (error) {
      alert('Erro ao criar prato. Por favor, tente novamente.');
    }
  }

  async function handleEditPlate(event) {
    event.preventDefault();
  
    const formData = new FormData();
    let hasChanges = false;
  
    if (imageFile) {
      formData.append('image', imageFile);
      hasChanges = true;
    }
  
    if (title) {
      formData.append('title', title);
      hasChanges = true;
    }
  
    if (category) {
      formData.append('category', category);
      hasChanges = true;
    }
  
    if (price) {
      formData.append('price', price);
      hasChanges = true;
    }
  
    if (description) {
      formData.append('description', description);
      hasChanges = true;
    }
  
    if (ingredients.length > 0) {
      formData.append('ingredients', JSON.stringify(ingredients));
      hasChanges = true;
    }    
    
  
    if (hasChanges) {
      try {
        await api.patch(`/plates/${params.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
  
        alert('Prato atualizado com sucesso!');
        navigate('/');

      } catch (error) {
        alert('Erro ao atualizar prato. Por favor, tente novamente.');
      }
    }
    
  }

  async function handleRemovePlate() {
    const confirm = window.confirm("Deseja realmente remover o prato?");
    if (confirm) {
      try {
        await api.delete(`/plates/${params.id}`);
        alert('Prato removido com sucesso!');
        console.log('Redirecionando para a página inicial');
        navigate("/");
      } catch (error) {
        console.error("Erro ao remover o prato:", error);
      }
    }
  }


  return (
    <Container {...rest}>

      <ButtonBack
        className="back" 
        title="voltar" 
        icon={IoIosArrowBack} 
        onClick={handleBack}
      />

      <h1>{titleNewOrEdit}</h1>

      <div className="section1">
        <BoxInputUpload>
          <Label className="label-img" title="Imagem do prato" />
          <ImgUpload 
            handleChangeImage={handleChangeImage}
            descriptionUpload={descriptionUpload}
            image={imageURL}
            alt={title}
          />
        </BoxInputUpload>

        <BoxInputText>
          <Label htmlFor="nome" title="Nome" />
          <Input
            className="box-input"
            type="text"
            id="nome"
            placeholder="Ex: Salada Ceasar"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </BoxInputText>

        <BoxSelect>
          <Label htmlFor="category" title="Categoria" />
            <Select name="category" id="category" onChange={e => setCategory(e.target.value)} value={category}>
            {categories.map(cat => (
                <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
              ))}
            </Select>
            <FiChevronDown />
        </BoxSelect>
      </div>

      <div className="section2">
        <BoxIngredients>
          <Label title="Ingredientes" />
          <div className="box-ingredient">            
            {
              ingredients.map((ingredient, index) => (
                <IngredientItem 
                  key={String(index)}
                  value={ingredient}
                  onClick={() => {handleRemoveIngredient(ingredient)}}
                />
              ))
            }
            <IngredientItem 
              $isNew 
              placeholder="Adicionar"
              value={ingredientInput}
              onChange={e => setIngredientInput(e.target.value)}
              onClick={handleAddIngredient}
            />
          </div>
        </BoxIngredients>

        <BoxInputNumber>
          <Label htmlFor="number" title="Preço" />
          <Input
            className="box-input"
            type="text"
            id="number"
            placeholder="R$ 40,00"
            value={formatPrice(price)}
            onChange={handlePriceChange}
          />
        </BoxInputNumber>
      </div>

      <div className="section3">
        <BoxTextArea>
          <Label htmlFor="description" title="Descrição" />
          <textarea
            name="description" 
            id="description" 
            placeholder='A Salada César é uma opção refrescante para o verão.'
            value={description}
            onChange={e => setDescription(e.target.value)}
          >
          </textarea>
        </BoxTextArea>

        <Buttons>
          { mode === 'new' ? (
            <button className='button-save' onClick={handleNewPlate}>Salvar</button>
          ) : (
            <div className='box-delete-save'>
              <button className='button-delete' onClick={handleRemovePlate}>Excluir prato</button>
              <button className='button-save' onClick={handleEditPlate}>Salvar alterações</button>
            </div>
          )}
        </Buttons>
      </div>

    </Container>
  )
}

