import Link from 'next/link';
import { useState } from 'react';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Slider } from '../../components/Slider';

import {
  Container,
  ContentContainer,
  SliderContainer,
  Box,
  Form,
  InputsContainer,
  SignUpText,
} from './styles';

export default function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const imagesSlider = [
    {
      id: '1',
      name: 'Instagram Image',
      url: '/images/phoneSlider1.jpg',
    },
    {
      id: '2',
      name: 'Instagram Image',
      url: '/images/phoneSlider2.jpg',
    },
    {
      id: '3',
      name: 'Instagram Image',
      url: '/images/phoneSlider3.jpg',
    },
    {
      id: '4',
      name: 'Instagram Image',
      url: '/images/phoneSlider4.jpg',
    },
    {
      id: '5',
      name: 'Instagram Image',
      url: '/images/phoneSlider5.jpg',
    },
  ];

  return (
    <>
      <Container>
        <SliderContainer>
          <Slider images={imagesSlider} width="24rem" height="42.7rem" />
        </SliderContainer>

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

              <Button onClick={() => {}}>Entrar</Button>
            </Form>
          </Box>

          <Box>
            <SignUpText>
              Não tem uma conta? <Link href="signup">Cadastre-se</Link>
            </SignUpText>
          </Box>
        </ContentContainer>
      </Container>
    </>
  );
}
