import Link from 'next/link';
import { useState } from 'react';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import {
  Container,
  Slider,
  ContentContainer,
  Box,
  Form,
  InputsContainer,
  SignUpText,
} from './styles';

export default function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Slider>
        <img src="/images/login.png" alt="" />
      </Slider>

      <ContentContainer>
        <Box>
          <img src="/images/logo.png" alt="Instagram" />

          <Form>
            <InputsContainer>
              <Input
                type="text"
                label="E-mail"
                name="email"
                handleChange={value => setEmail(value)}
                value={email}
              />
              <Input
                type="password"
                label="Senha"
                name="password"
                handleChange={value => setPassword(value)}
                value={password}
              />
            </InputsContainer>

            <Button
              onClick={() => {
                console.log('clicou');
              }}
            >
              Entrar
            </Button>
          </Form>
        </Box>

        <Box>
          <SignUpText>
            Não tem uma conta? <Link href="signup">Cadastre-se</Link>
          </SignUpText>
        </Box>
      </ContentContainer>
    </Container>
  );
}
