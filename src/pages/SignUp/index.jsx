import { Container, Form } from './styles';

import { LogoHeader } from '../../components/LogoHeader';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { Button } from '../../components/Button';

import { FiMail, FiLock, FiUser } from 'react-icons/fi';

export function SignUp() {
  return (
    <Container>
      <LogoHeader className="logo-header"/>

      <Form>
        <h2>Crie sua conta</h2>

        <Label htmlFor="name" title="Nome" />
        <Input
          placeholder='Exemplo: Maria da Silva'
          type="text" 
          id='name'
          icon={FiUser}
        />

        <Label htmlFor="email" title="Email" />
        <Input
          placeholder='exemplo@exemplo.com.br'
          type="text" 
          id='email'
          icon={FiMail}
        />

        <Label htmlFor="password" title="Senha" />
        <Input
          placeholder='No mínimo 6 caracteres'
          type="text" 
          id='password'
          icon={FiLock}
          minLength="6"
        />

        <Button className="button-order"  title="Criar conta" />

        <a href="/">
          Já tenho uma conta
        </a>
      </Form>

    </Container>
  )
}