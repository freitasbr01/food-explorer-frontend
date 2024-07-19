import { Container } from './styles';
import { FiPlus, FiX } from 'react-icons/fi';


export function IngredientItem({ isNew, value, ...rest }) {
  return (
    <Container isNew={isNew} {...rest}>
      <input 
        type="text"
        value={value}
        {...rest}
      />

      <button
        type='button'
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>

    </Container>
  )
}