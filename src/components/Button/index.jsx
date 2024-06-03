import { Container } from './styles';

export function Button({ icon: Icon, title, loading = false, ...rest}) {
  return (
    <Container 
      type="button" 
      disable={loading} 
      {...rest}
    >
      {Icon && <Icon size={20} />}
      {loading ? 'Carregando...' : title}
    </Container>
  )
}