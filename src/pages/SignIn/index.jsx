import { Container, Form } from './styles';

import { LogoHeader } from '../../components/LogoHeader';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { Button } from '../../components/Button';

import { FiMail, FiLock } from 'react-icons/fi';

export function SignIn() {
  return (
    <Container>
      <LogoHeader className="LogoHeader"/>

      <Form>
        <h2>Faça login</h2>
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

        <Button title="Entrar" />

        <a href="/">
          Criar uma conta
        </a>
      </Form>

    </Container>
  )
}

